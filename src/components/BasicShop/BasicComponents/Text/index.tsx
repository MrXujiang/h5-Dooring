import React, { memo } from 'react';
import styles from './index.less';
import { ITextConfig } from './schema';

const Text = memo((props: ITextConfig) => {
  const { align, text, fontSize, color, lineHeight } = props;
  return (
    <div className={styles.textWrap} style={{ color, textAlign: align, fontSize, lineHeight }}>
      {text}
    </div>
  );
});
export default Text;
