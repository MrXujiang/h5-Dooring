import React, { MouseEvent, useEffect, useState } from 'react';
import { Popover, Tooltip } from 'antd';
import { ExpandOutlined, InsertRowBelowOutlined } from '@ant-design/icons';
import Draggable from 'react-draggable';
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
    <div className={styles.keyRow}>
      <span className={styles.key}>
        <code>command + h</code>
        <code>ctrl +h</code>
      </span>
      <span className={styles.text}>显示/隐藏网格线</span>
    </div>
    <div className={styles.keyRow}>
      <span className={styles.key}>
        <code>鼠标右键菜单</code>
        <code>快捷键盘(删除/复制)</code>
      </span>
      <span className={styles.text}>显示/隐藏网格线</span>
    </div>
  </div>
);

const CanvasControl = (props: CanvasControlProps) => {
  const { scaleNum, handleSlider, backSize } = props;
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 5000);
  }, []);
  return (
    <Draggable>
      <div className={styles.sliderWrap}>
        <Tooltip title="支持自由拖拽啦" visible={visible}>
          <span className={styles.showTip}></span>
        </Tooltip>
        <span
          className={styles.sliderBtn}
          onClick={handleSlider.bind(this, 1)}
          style={
            scaleNum === 1.5
              ? { pointerEvents: 'none' }
              : { display: 'initial', marginLeft: '13px' }
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
    </Draggable>
  );
};

export default CanvasControl;
