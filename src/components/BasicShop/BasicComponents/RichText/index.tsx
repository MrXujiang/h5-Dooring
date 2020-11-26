import React, { memo, useState } from 'react';
import styles from './index.less';
import { IButtonConfig } from './schema';
import logo from '@/assets/richText.png';

interface IProps extends IButtonConfig {
  isTpl: boolean;
}

const XButton = memo((props: IProps) => {
  const { isTpl, borderColor, borderWidth, round, padding, content } = props;

  return isTpl ? (
    <div>
      <img style={{ width: '100%' }} src={logo} alt=""></img>
    </div>
  ) : (
    <div
      className={styles.richTextWrap}
      style={{
        border: `${borderWidth}px solid ${borderColor}`,
        borderRadius: round + 'px',
        padding: padding + 'px',
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
});
export default XButton;
