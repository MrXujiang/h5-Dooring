import React, { MouseEvent } from 'react';
import { Popover } from 'antd';
import { ExpandOutlined, InsertRowBelowOutlined } from '@ant-design/icons';
import styles from './index.less';

interface CanvasControlProps {
  scaleNum: number;
  handleSlider: Function;
  backSize(event: MouseEvent<HTMLDivElement>): void;
}

const fastMenu = (
  <div className={styles.fastMenu}>
    <div className={styles.boardTit}>快捷键</div>
    <div className={styles.keyRow}>
      <span className={styles.key}>
        <code>command + c</code>
        <code>ctrl + c</code>
      </span>
      <span className={styles.text}>复制组件</span>
    </div>
    <div className={styles.keyRow}>
      <span className={styles.key}>
        <code>delete</code>
        <code>backspace</code>
      </span>
      <span className={styles.text}>删除组件</span>
    </div>
  </div>
);

const CanvasControl = (props: CanvasControlProps) => {
  const { scaleNum, handleSlider, backSize } = props;
  console.log(scaleNum);
  return (
    <div className={styles.sliderWrap}>
      <span
        className={styles.sliderBtn}
        onClick={handleSlider.bind(this, 1)}
        style={
          scaleNum === 1.5 ? { pointerEvents: 'none' } : { display: 'initial', marginLeft: '13px' }
        }
      >
        +
      </span>
      <span>{Math.floor(scaleNum * 10) * 10}%</span>
      <span
        className={styles.sliderBtn}
        style={scaleNum === 0.5 ? { pointerEvents: 'none' } : { display: 'initial' }}
        onClick={handleSlider.bind(this, 0)}
      >
        -
      </span>
      <span className={styles.backSize}>
        <Popover placement="bottom" title={null} content={fastMenu} trigger="hover">
          <InsertRowBelowOutlined />
        </Popover>
      </span>
      <span className={styles.backSize}>
        <ExpandOutlined onClick={backSize} />
      </span>
    </div>
  );
};

export default CanvasControl;
