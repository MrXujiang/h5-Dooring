import React, { memo, useState, useEffect, useCallback } from 'react';
import { EditOutlined, MinusCircleOutlined, MenuOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import {
  DragSource,
  DropTarget,
  DndProvider,
  ConnectDropTarget,
  DragSourceSpec,
  DropTargetConnector,
  DragSourceMonitor,
  DragSourceConnector,
  DropTargetSpec,
  ConnectDragSource,
  ConnectDragPreview,
} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import EditorModal from './editorModal';
import { uuid } from '@/utils/tool';
import styles from './index.less';
import { TDataListDefaultType, TDataListDefaultTypeItem } from '../types';

type ListItemProps = DndItemProps & {
  isDragging: boolean;
  connectDragSource: ConnectDragSource;
  connectDragPreview: ConnectDragPreview;
  connectDropTarget: ConnectDropTarget;
};

function ListItem(props: ListItemProps) {
  const {
    title,
    desc,
    onDel,
    onEdit,
    // 这些 props 由 React DnD注入，参考`collect`函数定义
    isDragging,
    connectDragSource,
    connectDragPreview,
    connectDropTarget,
  } = props;
  const opacity = isDragging ? 0.5 : 1;
  return connectDropTarget(
    // 列表项本身作为 Drop 对象
    connectDragPreview(
      // 整个列表项作为跟随拖动的影像
      <div className={styles.listItem} style={Object.assign({}, { opacity })}>
        <div className={styles.tit}>{title}</div>
        <div className={styles.desc}>{desc}</div>
        <div className={styles.actionBar}>
          <span className={styles.action} onClick={() => onEdit()}>
            <EditOutlined />
          </span>
          <span className={styles.action} onClick={() => onDel()}>
            <MinusCircleOutlined />
          </span>
          {connectDragSource(
            <span className={styles.action}>
              <MenuOutlined />
            </span>,
          ) // 拖动图标作为 Drag 对象
          }
        </div>
      </div>,
    ),
  );
}

type DndItemProps = TDataListDefaultTypeItem & {
  onDel: Function;
  onEdit: Function;
  key: number;
  find: Function;
  move: Function;
  type?: number;
};

const type = 'item';
type DragObject = {
  id: string;
  originalIndex: number;
};
const dragSpec: DragSourceSpec<DndItemProps, DragObject> = {
  // 拖动开始时，返回描述 source 数据。后续通过 monitor.getItem() 获得
  beginDrag: props => ({
    id: props.id,
    originalIndex: props.find(props.id).index,
  }),
  // 拖动停止时，处理 source 数据
  endDrag(props, monitor) {
    const { id: droppedId, originalIndex } = monitor.getItem();
    const didDrop = monitor.didDrop();
    // source 是否已经放置在 target
    if (!didDrop) {
      return props.move(droppedId, originalIndex);
    }
  },
};

const dragCollect = (connect: DragSourceConnector, monitor: DragSourceMonitor) => ({
  connectDragSource: connect.dragSource(), // 用于包装需要拖动的组件
  connectDragPreview: connect.dragPreview(), // 用于包装需要拖动跟随预览的组件
  isDragging: monitor.isDragging(), // 用于判断是否处于拖动状态
});

const dropSpec: DropTargetSpec<DndItemProps> = {
  canDrop: () => false, // item 不处理 drop
  hover(props, monitor) {
    const { id: draggedId } = monitor.getItem();
    const { id: overId } = props;
    // 如果 source item 与 target item 不同，则交换位置并重新排序
    if (draggedId !== overId) {
      const { index: overIndex } = props.find(overId);
      props.move(draggedId, overIndex);
    }
  },
};

const dropCollect = (connect: DropTargetConnector) => ({
  connectDropTarget: connect.dropTarget(), // 用于包装需接收拖拽的组件
});

const DndItem = DropTarget(
  type,
  dropSpec,
  dropCollect,
)(DragSource(type, dragSpec, dragCollect)(ListItem));

export type DataListMemo = {
  onChange?: (v: TDataListDefaultType) => void;
  value?: TDataListDefaultType;
  cropRate: number;
};

export type DataListType = DataListMemo & {
  connectDropTarget: ConnectDropTarget;
};

const List = function(props: DataListType) {
  const { onChange, value, connectDropTarget, cropRate } = props;
  const [list, setList] = useState(value);
  const [visible, setVisible] = useState(false);
  const [curItem, setCurItem] = useState<TDataListDefaultTypeItem>();

  const handleDel = (id: string) => {
    if (value && onChange) {
      let newVal = value.filter(item => id !== item.id);
      onChange(newVal);
    }
  };

  const find = (id: string) => {
    const item = list!.find(c => `${c.id}` === id)!;
    return {
      item,
      index: list!.indexOf(item!),
    };
  };

  const move = (id: string, toIndex: number) => {
    const { item, index } = find(id);
    const oldList = [...list!];
    oldList.splice(index, 1);
    oldList.splice(toIndex, 0, item);
    if (onChange) {
      onChange(oldList);
      return;
    }
    setList(oldList);
  };

  const handleCancel = useCallback(() => {
    console.log('a');
    setVisible(false);
  }, []);

  const handleEdit = useCallback((item: TDataListDefaultTypeItem) => {
    console.log('b');
    setVisible(true);
    setCurItem(item);
  }, []);

  const handleSave = useCallback(
    (item: TDataListDefaultTypeItem) => {
      console.log('c');
      setVisible(false);
      if (onChange) {
        onChange(list!.map(p => (p.id === item.id ? item : p)));
        return;
      }
      setList(prev => prev!.map(p => (p.id === item.id ? item : p)));
    },
    [list, onChange],
  );

  const handleAdd = () => {
    const item = {
      title: '新增项标题',
      desc: '新增项描述',
      id: uuid(8, 10),
      imgUrl: [],
      link: '',
    };
    if (onChange) {
      onChange([...list!, item]);
      return;
    }
    setList([...list!, item]);
  };

  useEffect(() => {
    setList(value);
  }, [value]);

  return connectDropTarget(
    <div className={styles.dataList}>
      {!!(list && list.length) &&
        list.map((item, i) => (
          <DndItem
            {...item}
            onDel={() => handleDel(item.id)}
            onEdit={() => handleEdit(item)}
            key={i}
            id={`${item.id}`}
            find={find}
            move={move}
          />
        ))}
      <div style={{ marginTop: '10px' }}>
        <Button onClick={handleAdd} block>
          添加
        </Button>
      </div>
      <EditorModal
        visible={visible}
        onCancel={handleCancel}
        item={curItem}
        onSave={handleSave}
        cropRate={cropRate}
      />
    </div>,
  );
};

const DndList = DropTarget(type, {}, connect => ({
  connectDropTarget: connect.dropTarget(),
}))(List);

// 将 HTMLBackend 作为参数传给 DragDropContext
export default memo((props: DataListMemo) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <DndList {...props} />
    </DndProvider>
  );
});
