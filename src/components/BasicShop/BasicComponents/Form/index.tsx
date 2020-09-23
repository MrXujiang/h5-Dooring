import React, { memo, useCallback } from 'react';
import { Button } from 'zarm';
import BaseForm from './BaseForm';
import styles from './index.less';
import { IFormConfig } from './schema';

const FormComponent = (props: IFormConfig) => {
  const { title, bgColor, fontSize, titColor, btnColor, btnTextColor, api, formControls } = props;
  const formData: Record<string, any> = {};
  const handleChange = useCallback(
    (item, v) => {
      if (item.options) {
        formData[item.label] = v[0].label;
        return;
      }
      formData[item.label] = v;
    },
    [formData],
  );
  const handleSubmit = () => {
    if (api) {
      fetch(api, {
        body: JSON.stringify(formData),
        cache: 'no-cache',
        headers: {
          'content-type': 'application/json',
        },
        method: 'POST',
        mode: 'cors',
      });
    }
  };
  return (
    <>
      {props.isTpl && (
        <div className={styles.formWrap} style={{ backgroundColor: bgColor }}>
          {title && (
            <div className={styles.title} style={{ fontSize, color: titColor }}>
              {title}
            </div>
          )}
          <div className={styles.formContent}>
            {formControls.map(item => {
              const FormItem = BaseForm[item.type];
              return <FormItem onChange={handleChange.bind(this, item)} {...item} key={item.id} />;
            })}
            <div style={{ textAlign: 'center', padding: '16px 0' }}>
              <Button
                theme="primary"
                size="sm"
                block
                onClick={handleSubmit}
                style={{ backgroundColor: btnColor, borderColor: btnColor, color: btnTextColor }}
              >
                提交
              </Button>
            </div>
          </div>
        </div>
      )}
      {!props.isTpl && (
        <div
          className={styles.formWrap}
          style={{
            backgroundColor: bgColor,
            overflow: 'hidden',
            position: 'absolute',
            width: `${props.baseWidth}%`,
            height: `${props.baseHeight}%`,
            borderRadius: props.baseRadius,
            transform: `translate(${props.baseLeft}px,${props.baseTop}px) 
                scale(${props.baseScale / 100}) 
                rotate(${props.baseRotate}deg)`,
          }}
        >
          {title && (
            <div className={styles.title} style={{ fontSize, color: titColor }}>
              {title}
            </div>
          )}
          <div className={styles.formContent}>
            {formControls.map(item => {
              const FormItem = BaseForm[item.type];
              return <FormItem onChange={handleChange.bind(this, item)} {...item} key={item.id} />;
            })}
            <div style={{ textAlign: 'center', padding: '16px 0' }}>
              <Button
                theme="primary"
                size="sm"
                block
                onClick={handleSubmit}
                style={{ backgroundColor: btnColor, borderColor: btnColor, color: btnTextColor }}
              >
                提交
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default memo(FormComponent);
