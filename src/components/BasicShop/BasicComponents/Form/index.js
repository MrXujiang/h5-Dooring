import React, { memo, useState, useEffect } from 'react';
import { Button } from 'zarm';
import BaseForm from './BaseForm';
import req from 'utils/req';
import styles from './index.less';

function unParams(params = '?a=1&b=2&c=3') {
  let obj = {};
  params &&
    params.replace(/((\w*)=([\.a-z0-9A-Z]*)?)?/g, (m, a, b, c) => {
      if (b || c) obj[b] = c;
    });
  return obj;
}
const FormComponent = props => {
  const { title, bgColor, fontSize, titColor, btnColor, btnTextColor, api, formControls } = props;

  const formData = {};

  const handleChange = (item, v) => {
    if (item.options) {
      formData[item.label] = v[0].label;
      return;
    }
    formData[item.label] = v;
  };

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
  );
};

export default memo(FormComponent);
