import React, { useMemo, memo, ReactNode, useContext } from 'react';
import { useDrag } from 'react-dnd';
import schemaH5 from 'components/BasicShop/schema';
import schemaPc from 'components/BasicPcShop/schema';
import styles from './index.less';
import { dooringContext } from '@/layouts';

interface TargetBoxProps {
  item: any;
  children: ReactNode;
  canvasId: string;
}

const TargetBox = memo((props: TargetBoxProps) => {
  const { item } = props;
  const context = useContext(dooringContext);
  const schema = useMemo(() => {
    if (context.theme === 'h5') {
      return schemaH5;
    } else {
      return schemaPc;
    }
  }, [context.theme]);
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
