import React, { memo } from 'react';
import styles from './index.less';
import { ILongTextConfig } from './schema';
const LongText = memo((props: ILongTextConfig) => {
  const { text, fontSize, color, indent, lineHeight, textAlign } = props;
  return (
    <div
      className={styles.textWrap}
      style={{ color, textIndent: indent + 'px', fontSize, lineHeight, textAlign }}
    >
      {text}
    </div>
  );
});
export default LongText;
