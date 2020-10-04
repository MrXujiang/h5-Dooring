import React, { memo } from 'react';
import { IButtonConfig } from './schema';
import { Button } from 'antd';
const button = memo((props: IButtonConfig) => {
  const { text, type } = props;
  return <Button type={type}>{text}</Button>;
});

export default button;
