import React, { useMemo, memo } from 'react'
import { useDrag } from 'react-dnd'
import { connect } from 'dva'
import schema from 'components/DynamicEngine/schema'
import { uuid } from '@/utils/tool';
import styles from './index.less'

const TargetBox = memo((props) => {
  const { item, dispatch, canvasId, pointData } = props
  const [{ isDragging }, drag] = useDrag({
    item: { type: item.type, config: schema[item.type].config, h: item.h, editableEl: schema[item.type].editData },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    // begin(monitor) {
    //   getStartPoint(monitor.getSourceClientOffset())
    // },
    end(item, monitor) {
      let parentDiv = document.getElementById(canvasId),
          pointRect = parentDiv.getBoundingClientRect(),
          top = pointRect.top,
          pointEnd = monitor.getSourceClientOffset(),
          y = pointEnd.y - top,
          col = 24,              // 网格列数
          cellHeight = 2
      // 转换成网格规则的坐标和大小
      let gridY = Math.ceil(y / cellHeight)

      dispatch({
        type: 'editorModal/addPointData',
        payload: {
          id: uuid(6, 10),
          item, 
          point: { i: `x-${pointData.length}`, x: 0, y: gridY, w: col, h: item.h, isBounded: true }
        }
      })
    }
  })

  const containerStyle = useMemo(
    () => ({
      opacity: isDragging ? 0.4 : 1,
      cursor: 'move'
    }),
    [isDragging],
  )

  return (
    <div 
      className={styles.module} 
      style={{ ...containerStyle}} 
      ref={drag}
    >
    { props.children }
    </div>
  )
})

export default connect(({ editorModal: { pointData } }) => ({
  pointData
}))(TargetBox)
