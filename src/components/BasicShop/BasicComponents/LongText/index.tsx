import React, { memo } from 'react';
import styles from './index.less';
import { ILongTextConfig } from './schema';
import logo from '@/assets/08-长文本.png';
const LongText = memo((props: ILongTextConfig & { isTpl: boolean }) => {
  const { text, fontSize, color, indent, lineHeight, textAlign, isTpl } = props;
  return (
    <>
      {isTpl ? (
        <div>
          <img src={logo} alt=""></img>
        </div>
      ) : (
        <div
          className={styles.textWrap}
          style={{ color, textIndent: indent + 'px', fontSize, lineHeight, textAlign }}
        >
          {text}
        </div>
      )}
    </>
  );
});
export default LongText;
