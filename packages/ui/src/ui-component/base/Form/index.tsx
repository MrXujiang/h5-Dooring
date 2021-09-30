import React, { memo, useCallback } from 'react';
import { Button } from 'zarm';
import BaseForm from './BaseForm';
import styles from './index.less';
import { IFormConfig } from './schema';
import logo from '@/assets/form.png';
const FormComponent = (props: IFormConfig & { isTpl: boolean }) => {
  const {
    title,
    bgColor,
    fontSize,
    titColor,
    btnColor,
    titWeight,
    btnTextColor,
    api,
    formControls,
  } = props;
  const formData: Record<string, any> = {};
  const handleChange = useCallback(
    (item, v) => {
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

  const isEditorPage = window.location.pathname.indexOf('editor') > -1;
  return (
    <>
      {props.isTpl && (
        <div>
          <img src={logo} alt="" />
        </div>
      )}
      {!props.isTpl && (
        <div
          className={styles.formWrap}
          style={{
            backgroundColor: bgColor,
            overflow: 'hidden',
            position: 'absolute',
            pointerEvents: isEditorPage ? 'none' : 'initial',
          }}
        >
          {title && (
            <div
              className={styles.title}
              style={{ fontSize, fontWeight: +titWeight, color: titColor }}
            >
              {title}
            </div>
          )}
          <div className={styles.formContent}>
            {formControls.map(item => {
              const FormItem = BaseForm[item.type];
              return (
                <FormItem onChange={(v: string) => handleChange(item, v)} {...item} key={item.id} />
              );
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
