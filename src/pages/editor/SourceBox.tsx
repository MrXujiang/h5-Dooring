import React, { memo, useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import GridLayout, { ItemCallback } from 'react-grid-layout';
import { Tooltip } from 'antd';
import { connect } from 'dva';
import DynamicEngine from 'components/DynamicEngine';
import styles from './index.less';
import { uuid } from '@/utils/tool';
import { Dispatch } from 'umi';
import { StateWithHistory } from 'redux-undo';
interface SourceBoxProps {
  pstate: { pointData: { id: string; item: any; point: any }[] };
  scaleNum: number;
  canvasId: string;
  allType: string[];
  dispatch: Dispatch;
  dragState: { x: number; y: number };
  setDragState: React.Dispatch<
    React.SetStateAction<{
      x: number;
      y: number;
    }>
  >;
}

const SourceBox = memo((props: SourceBoxProps) => {
  const { pstate, scaleNum, canvasId, allType, dispatch, dragState, setDragState } = props;

  const pointData = pstate ? pstate.pointData : [];
  const [canvasRect, setCanvasRect] = useState<number[]>([]);
  const [isShowTip, setIsShowTip] = useState(true);
  const [{ isOver }, drop] = useDrop({
    accept: allType,
    drop: (item: { h: number; type: string }, monitor) => {
      let parentDiv = document.getElementById(canvasId),
        pointRect = parentDiv!.getBoundingClientRect(),
        top = pointRect.top,
        pointEnd = monitor.getSourceClientOffset(),
        y = pointEnd!.y < top ? 0 : pointEnd!.y - top,
        col = 24, // 网格列数
        cellHeight = 2,
        w = item.type === 'Icon' ? 3 : col;
      // 转换成网格规则的坐标和大小
      let gridY = Math.ceil(y / cellHeight);
      dispatch({
        type: 'editorModal/addPointData',
        payload: {
          id: uuid(6, 10),
          item,
          point: { i: `x-${pointData.length}`, x: 0, y: gridY, w, h: item.h, isBounded: true },
        },
      });
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      item: monitor.getItem(),
    }),
  });

  const dragStop: ItemCallback = (layout, oldItem, newItem, placeholder, e, element) => {
    const curPointData = pointData.filter(item => item.id === newItem.i)[0];
    dispatch({
      type: 'editorModal/modPointData',
      payload: { ...curPointData, point: newItem },
    });
  };

  const onDragStart: ItemCallback = (layout, oldItem, newItem, placeholder, e, element) => {
    const curPointData = pointData.filter(item => item.id === newItem.i)[0];
    dispatch({
      type: 'editorModal/modPointData',
      payload: { ...curPointData },
    });
  };

  const onResizeStop: ItemCallback = (layout, oldItem, newItem, placeholder, e, element) => {
    const curPointData = pointData.filter(item => item.id === newItem.i)[0];
    dispatch({
      type: 'editorModal/modPointData',
      payload: { ...curPointData, point: newItem },
    });
  };

  useEffect(() => {
    let { width, height } = document.getElementById(canvasId)!.getBoundingClientRect();
    setCanvasRect([width, height]);
  }, [canvasId]);

  useEffect(() => {
    let timer = window.setTimeout(() => {
      setIsShowTip(false);
    }, 3000);
    return () => {
      window.clearTimeout(timer);
    };
  }, []);
  const opacity = isOver ? 0.7 : 1;
  // const backgroundColor = isOver ? 1 : 0.7;

  return (
    <Draggable
      position={dragState}
      handle=".js_box"
      onStop={(e: DraggableEvent, data: DraggableData) => {
        setDragState({ x: data.x, y: data.y });
      }}
    >
      <div className={styles.canvasBox}>
        <div
          style={{
            transform: `scale(${scaleNum})`,
            position: 'relative',
            width: '100%',
            height: '100%',
          }}
        >
          <div
            id={canvasId}
            className={styles.canvas}
            style={{
              opacity,
            }}
            ref={drop}
          >
            <Tooltip placement="right" title="鼠标按住此处拖拽画布" visible={isShowTip}>
              <div
                className="js_box"
                style={{
                  width: '10px',
                  height: '100%',
                  position: 'absolute',
                  borderRadius: '0 6px 6px 0',
                  backgroundColor: '#2f54eb',
                  right: '-10px',
                  top: '0',
                  color: '#fff',
                  cursor: 'move',
                }}
              />
            </Tooltip>

            {pointData.length > 0 ? (
              <GridLayout
                className={styles.layout}
                cols={24}
                rowHeight={2}
                width={canvasRect[0] || 0}
                margin={[0, 0]}
                onDragStop={dragStop}
                onDragStart={onDragStart}
                onResizeStop={onResizeStop}
              >
                {pointData.map(value => (
                  <div className={styles.dragItem} key={value.id} data-grid={value.point}>
                    <DynamicEngine {...value.item} isTpl={false} />
                  </div>
                ))}
              </GridLayout>
            ) : null}
          </div>
        </div>
      </div>
    </Draggable>
  );
});

export default connect((state: StateWithHistory<any>) => ({ pstate: state.present.editorModal }))(
  SourceBox,
);
