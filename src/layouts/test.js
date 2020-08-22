import React, { useState } from "react";
import { DragSource, DropTarget, DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { faTrashAlt, faArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";

function Item(props) {
  const {
    // 这些 props 由 React DnD注入，参考`collect`函数定义
    isDragging, connectDragSource, connectDragPreview, connectDropTarget,
    // 这些是组件收到的 props
    item, style = {}, find, move, change, remove, ...restProps
  } = props;
  const opacity = isDragging ? 0.5 : 1;
  const onRemove = event => {
    event.stopPropagation();
    remove(item);
  }
  return connectDropTarget( // 列表项本身作为 Drop 对象
    connectDragPreview( // 整个列表项作为跟随拖动的影像
      <div {...restProps} style={Object.assign(style, { opacity })}>
        <p className="title">{item.title || "任务标题"}</p>
        <ul className="oper-list">
          {
            connectDragSource(
                <li className="oper-item icon-move">
                  <FontAwesomeIcon icon={faArrowsAlt} />
                </li>
            ) // 拖动图标作为 Drag 对象
          }
          <li className="oper-item" onClick={onRemove}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </li>
        </ul>
      </div>
    )
  );
}

const type = "item";
const dragSpec = {
  // 拖动开始时，返回描述 source 数据。后续通过 monitor.getItem() 获得
  beginDrag: props => ({
    id: props.id,
    originalIndex: props.find(props.id).index
  }),
  // 拖动停止时，处理 source 数据
  endDrag(props, monitor) {
    const { id: droppedId, originalIndex } = monitor.getItem();
    const didDrop = monitor.didDrop();
    // source 是否已经放置在 target
    if (!didDrop) {
      return props.move(droppedId, originalIndex);
    }
    return props.change(droppedId, originalIndex);
  }
};
const dragCollect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(), // 用于包装需要拖动的组件
  connectDragPreview: connect.dragPreview(), // 用于包装需要拖动跟随预览的组件
  isDragging: monitor.isDragging() // 用于判断是否处于拖动状态
});
const dropSpec = {
  canDrop: () => false, // item 不处理 drop
  hover(props, monitor) {
    const { id: draggedId } = monitor.getItem();
    const { id: overId } = props;
    // 如果 source item 与 target item 不同，则交换位置并重新排序
    if (draggedId !== overId) {
      const { index: overIndex } = props.find(overId);
      props.move(draggedId, overIndex);
    }
  }
};
const dropCollect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget() // 用于包装需接收拖拽的组件
});

const DndItem = DropTarget(type, dropSpec, dropCollect)(
  DragSource(type, dragSpec, dragCollect)(Item)
);

function List(props) {
  let { list: propsList, activeItem, connectDropTarget } = props;
  propsList = propsList.map(item => {
    const isActive = activeItem.id === item.id;
    item = isActive ? activeItem : item;
    item.active = isActive;
    return item;
  });
  const [list, setList] = useState(propsList);
  const find = id => {
    const item = list.find(c => `${c.id}` === id);
    return {
      item,
      index: list.indexOf(item)
    };
  };
  const move = (id, toIndex) => {
    const { item, index } = find(id);
    list.splice(index, 1);
    list.splice(toIndex, 0, item);
    setList([...list]);
  };
  const change = (id, fromIndex) => {
    const { index: toIndex } = find(id);
    props.onDropEnd(list, fromIndex, toIndex);
  };
  const remove = item => {
    const newList = list.filter(it => it.id !== item.id);
    setList(newList);
    props.onDelete(newList);
  };
  const onClick = event => {
    const { id } = event.currentTarget;
    const { item } = find(id);
    props.onClick(item);
  };

  return connectDropTarget(
    <ul className="list">
      {list.map((item, index) => (
        <li
          className={classnames("item", { active: item.active })}
          key={item.id}
        >
          <div className="index">{index + 1}</div>
          <DndItem
            className="info"
            id={`${item.id}`}
            item={item}
            find={find}
            move={move}
            change={change}
            remove={remove}
            onClick={onClick}
          />
        </li>
      ))}
    </ul>
  );
}

const DndList = DropTarget(type, {}, connect => ({
  connectDropTarget: connect.dropTarget()
}))(List);

// 将 HTMLBackend 作为参数传给 DragDropContext
export default DragDropContext(HTML5Backend)(DndList);