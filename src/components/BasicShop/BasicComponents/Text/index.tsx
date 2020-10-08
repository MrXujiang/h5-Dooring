import React, { memo } from 'react';
import styles from './index.less';
import { ITextConfig } from './schema';
import logo from '@/assets/12-文本.png';
const Text = memo((props: ITextConfig & { isTpl: boolean }) => {
  const { align, text, fontSize, color, lineHeight, isTpl } = props;
  return (
    <>
      {isTpl ? (
        <div>
          <img src={logo} alt=""></img>
        </div>
      ) : (
        <div className={styles.textWrap} style={{ color, textAlign: align, fontSize, lineHeight }}>
          {text}
        </div>
      )}
    </>
  );
});
export default Text;
