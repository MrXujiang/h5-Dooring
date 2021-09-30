import React, { memo } from 'react';
import GridLayout, { ItemCallback } from 'react-grid-layout';
import DynamicEngine from '@/core/DynamicEngine';
import styles from './viewRender.less';

interface PointDataItem {
  id: string;
  item: Record<string, any>;
  point: Record<string, any>;
}

interface ViewProps {
  pointData: Array<PointDataItem>;
  pageData?: any;
  width?: number;
  dragStop?: ItemCallback;
  onDragStart?: ItemCallback;
  onResizeStop?: ItemCallback;
}

const ViewRender = memo((props: ViewProps) => {
  const { pointData, pageData, width, dragStop, onDragStart, onResizeStop } = props;

  return (
    <GridLayout
      cols={24}
      rowHeight={2}
      width={width}
      margin={[0, 0]}
      onDragStop={dragStop}
      onDragStart={onDragStart}
      onResizeStop={onResizeStop}
      style={{
        minHeight: '100vh',
        backgroundColor: pageData && pageData.bgColor,
        backgroundImage:
          pageData && pageData.bgImage ? `url(${pageData.bgImage[0].url})` : 'initial',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {pointData.map((value: PointDataItem) => (
        <div key={value.id} data-grid={value.point} className={onDragStart && styles.dragItem}>
          <DynamicEngine {...(value.item as any)} isTpl={false} />
        </div>
      ))}
    </GridLayout>
  );
});

export default ViewRender;
