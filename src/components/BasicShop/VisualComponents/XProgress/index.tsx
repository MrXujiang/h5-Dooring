import React, { memo } from 'react';
import { Progress } from 'zarm';
import styles from './index.less';
import { IXProgressConfig } from './schema';

const XProgress = memo((props: IXProgressConfig) => {
  const { theme, size, shape, percent, strokeWidth } = props;
  return (
    <div className={styles.textWrap} style={{ textAlign: 'center' }}>
      <Progress
        shape={shape}
        size={size}
        percent={percent}
        theme={theme}
        strokeWidth={strokeWidth}
      />
    </div>
  );
});

export default XProgress;
