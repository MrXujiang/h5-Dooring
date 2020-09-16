import { LongTextConfigType } from '@/components/DynamicEngine/schema';
import React, { memo } from 'react';
import styles from './index.less';
const LongText = memo((props: LongTextConfigType) => {
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
