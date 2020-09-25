import { memo } from 'react';
import styles from './index.less';
import React from 'react';
import { IWhiteTplConfig } from './schema';

interface IProps extends IWhiteTplConfig {
  isTpl: boolean;
}

const WhiteTpl = memo((props: IProps) => {
  const { bgColor, text, fontSize, color, height, isTpl } = props;
  console.log('data', bgColor, text, fontSize, color, height);
  return (
    <div
      className={styles.whiteTpl}
      style={{ backgroundColor: bgColor, height, lineHeight: height + 'px' }}
    >
      <div className={styles.title} style={{ fontSize, color }}>
        {isTpl ? '空白模版' : text}
      </div>
    </div>
  );
});

export default WhiteTpl;
