import React, { MouseEvent } from 'react';
import { ExpandOutlined, ReloadOutlined } from '@ant-design/icons';
import styles from './index.less';

interface CanvasControlProps {
  scaleNum: number;
  handleSlider: Function;
  backSize(event: MouseEvent<HTMLDivElement>): void;
  updateDrag(event: MouseEvent<HTMLDivElement>): void;
}

const CanvasControl = (props: CanvasControlProps) => {
  const { scaleNum, handleSlider, backSize, updateDrag } = props;
  return (
    <div className={styles.sliderWrap}>
      <span
        className={styles.sliderBtn}
        onClick={handleSlider.bind(this, 1)}
        style={
          scaleNum === 1 ? { pointerEvents: 'none' } : { display: 'initial', marginLeft: '13px' }
        }
      >
        +
      </span>
      <span>{scaleNum * 100}%</span>
      <span
        className={styles.sliderBtn}
        style={scaleNum === 0.1 ? { pointerEvents: 'none' } : { display: 'initial' }}
        onClick={handleSlider.bind(this, 0)}
      >
        -
      </span>
      <span className={styles.backSize}>
        <ExpandOutlined onClick={backSize} />
      </span>
      <span className={styles.backSize}>
        <ReloadOutlined onClick={updateDrag} />
      </span>
    </div>
  );
};

export default CanvasControl;
