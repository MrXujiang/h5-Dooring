import { memo } from 'react';
import styles from './index.less';
import React from 'react';
import { IWhiteTplConfig } from './schema';
import logo from '@/assets/white.png';
interface IProps extends IWhiteTplConfig {
  isTpl: boolean;
}

const WhiteTpl = memo((props: IProps) => {
  const { bgColor, text, fontSize, color, height, isTpl } = props;
  return (
    <>
      {isTpl ? (
        <div>
          <img src={logo} alt=""></img>
        </div>
      ) : (
        <div
          className={styles.whiteTpl}
          style={{ backgroundColor: bgColor, height, lineHeight: height + 'px' }}
        >
          <div className={styles.title} style={{ fontSize, color }}>
            {text}
          </div>
        </div>
      )}
    </>
  );
});

export default WhiteTpl;
