import React, { useMemo, memo, ReactNode } from 'react';
import { useDrag } from 'react-dnd';
import schema from 'components/BasicShop/schema';
import styles from './index.less';

interface TargetBoxProps {
  item: any;
  children: ReactNode;
  canvasId: string;
}

const TargetBox = memo((props: TargetBoxProps) => {
  const { item } = props;
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: item.type,
      config: schema[item.type as keyof typeof schema].config,
      h: item.h,
      editableEl: schema[item.type as keyof typeof schema].editData,
      category: item.category,
      x: item.x || 0,
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
