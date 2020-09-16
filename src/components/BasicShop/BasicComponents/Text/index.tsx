import { TextConfigType } from '@/components/DynamicEngine/schema';
import React, { memo } from 'react';
import styles from './index.less';

const Text = memo((props: TextConfigType) => {
  const { align, text, fontSize, color, lineHeight } = props;
  return (
    <div className={styles.textWrap} style={{ color, textAlign: align, fontSize, lineHeight }}>
      {text}
    </div>
  );
});
export default Text;
