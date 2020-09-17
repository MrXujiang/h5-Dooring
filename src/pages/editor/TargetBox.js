import React, { useMemo, memo } from 'react';
import { useDrag } from 'react-dnd';
import schema from 'components/BasicShop/schema';
import styles from './index.less';

const TargetBox = memo(props => {
  const { item } = props;
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: item.type,
      config: schema[item.type].config,
      h: item.h,
      editableEl: schema[item.type].editData,
      category: item.category,
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
    </div>
  );
});

export default TargetBox;
