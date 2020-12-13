import React, { memo, useState, useEffect } from 'react';
import { InputNumber } from 'antd';
import styles from './index.less';
import { TPosDefaultType, TPosItem } from '../types';

type PosProps = {
  value?: TPosDefaultType;
  onChange?: (v: TPosItem | string) => void;
};

export default memo(function Pos(props: PosProps) {
  const { value, onChange } = props;
  let _this: typeof Pos = Pos;

  const handleChange = (index: number, v: TPosItem | string) => {
    let arr: any = value || [];
    arr[index] = v;
    onChange && onChange(arr);
  };

  return (
    <div className={styles.posIpt}>
      <div className={styles.posItem}>
        <span>x: </span>
        <InputNumber defaultValue={value && value[0]} onChange={handleChange.bind(_this, 0)} />
      </div>
      <div className={styles.posItem}>
        <span>y: </span>
        <InputNumber defaultValue={value && value[1]} onChange={handleChange.bind(_this, 1)} />
      </div>
    </div>
  );
});
