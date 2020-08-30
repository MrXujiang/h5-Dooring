import React, { useMemo, memo } from 'react';
import { useDrag, DragPreviewImage } from 'react-dnd';
import { connect } from 'dva';
import schema from 'components/DynamicEngine/schema';

import styles from './index.less';

const TargetBox = memo(props => {
  const { item, dispatch, canvasId, pointData } = props;
  const [{ isDragging }, drag, preview] = useDrag({
    item: {
      type: item.type,
      config: schema[item.type].config,
      h: item.h,
      editableEl: schema[item.type].editData,
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const containerStyle = useMemo(
    () => ({
      opacity: isDragging ? 0.4 : 1,
      cursor: 'move',
    }),
    [isDragging],
  );

  return (
    <div className={styles.module} style={{ ...containerStyle }} ref={drag}>
      {props.children}
      {item.type === 'Carousel' && (
        <DragPreviewImage
          connect={preview}
          src={'https://www.easyicon.net/api/resizeApi.php?id=1200841&size=32'}
        ></DragPreviewImage>
      )}
    </div>
  );
});

export default connect(({ editorModal: { pointData } }) => ({
  pointData,
}))(TargetBox);
