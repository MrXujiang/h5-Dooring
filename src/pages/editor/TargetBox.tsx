import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useDrop } from 'react-dnd';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import { ItemCallback } from 'react-grid-layout';
import { connect } from 'dva';
import { ViewRender } from '@/core';
import styles from './index.less';
import { uuid } from '@/utils/tool';
import { Dispatch } from 'umi';
import { StateWithHistory } from 'redux-undo';
import { Menu, Item, MenuProvider } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.min.css';
interface SourceBoxProps {
  pstate: { pointData: { id: string; item: any; point: any; isMenu?: any }[]; curPoint: any };
  cstate: { pointData: { id: string; item: any; point: any }[]; curPoint: any };
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

const TargetBox = memo((props: SourceBoxProps) => {
  const { pstate, scaleNum, canvasId, allType, dispatch, dragState, setDragState, cstate } = props;

  let pointData = pstate ? pstate.pointData : [];
  const cpointData = cstate ? cstate.pointData : [];

  const [canvasRect, setCanvasRect] = useState<number[]>([]);
  const [isShowTip, setIsShowTip] = useState(true);
  const [{ isOver }, drop] = useDrop({
    accept: allType,
    drop: (item: { h: number; type: string; x: number }, monitor) => {
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
          status: 'inToCanvas',
        },
      });
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      item: monitor.getItem(),
    }),
  });

  const dragStop: ItemCallback = useMemo(() => {
    return (layout, oldItem, newItem, placeholder, e, element) => {
      const curPointData = pointData.filter(item => item.id === newItem.i)[0];
      dispatch({
        type: 'editorModal/modPointData',
        payload: { ...curPointData, point: newItem, status: 'inToCanvas' },
      });
    };
  }, [cpointData, dispatch, pointData]);

  const onDragStart: ItemCallback = useMemo(() => {
    return (layout, oldItem, newItem, placeholder, e, element) => {
      const curPointData = pointData.filter(item => item.id === newItem.i)[0];
      dispatch({
        type: 'editorModal/modPointData',
        payload: { ...curPointData, status: 'inToCanvas' },
      });
    };
  }, [dispatch, pointData]);

  const onResizeStop: ItemCallback = useMemo(() => {
    return (layout, oldItem, newItem, placeholder, e, element) => {
      const curPointData = pointData.filter(item => item.id === newItem.i)[0];
      dispatch({
        type: 'editorModal/modPointData',
        payload: { ...curPointData, point: newItem, status: 'inToCanvas' },
      });
    };
  }, [dispatch, pointData]);

  const handleContextMenuDel = () => {
    if (pstate.curPoint) {
      dispatch({
        type: 'editorModal/delPointData',
        payload: { id: pstate.curPoint.id },
      });
    }
  };

  const handleContextMenuCopy = () => {
    if (pstate.curPoint) {
      dispatch({
        type: 'editorModal/copyPointData',
        payload: { id: pstate.curPoint.id },
      });
    }
  };

  const onConTextClick = (type: string) => {
    if (type === 'del') {
      handleContextMenuDel();
    } else if (type === 'copy') {
      handleContextMenuCopy();
    }
  };

  const MyAwesomeMenu = useCallback(
    () => (
      <Menu id="menu_id">
        <Item onClick={() => onConTextClick('copy')}>复制</Item>
        <Item onClick={() => onConTextClick('del')}>删除</Item>
      </Menu>
    ),
    [onConTextClick],
  );

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

  const render = useMemo(() => {
    return (
      <Draggable
        position={dragState}
        handle=".js_box"
        onStop={(e: DraggableEvent, data: DraggableData) => {
          setDragState({ x: data.x, y: data.y });
        }}
      >
        <div className={styles.canvasBox}>
          <MenuProvider id="menu_id">
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
                {pointData.length > 0 ? (
                  <ViewRender
                    pointData={pointData}
                    width={canvasRect[0] || 0}
                    dragStop={dragStop}
                    onDragStart={onDragStart}
                    onResizeStop={onResizeStop}
                  />
                ) : null}
              </div>
            </div>
          </MenuProvider>
        </div>
      </Draggable>
    );
  }, [
    canvasId,
    canvasRect,
    dragState,
    dragStop,
    drop,
    isShowTip,
    onDragStart,
    onResizeStop,
    opacity,
    pointData,
    scaleNum,
    setDragState,
  ]);

  return (
    <>
      {render}
      <MyAwesomeMenu />
    </>
  );
});

export default connect((state: StateWithHistory<any>) => ({
  pstate: state.present.editorModal,
  cstate: state.present.editorPcModal,
}))(TargetBox);
