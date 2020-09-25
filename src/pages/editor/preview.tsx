import React, { memo, useEffect, useMemo, useRef, useState } from 'react';
import GridLayout from 'react-grid-layout';
import DynamicEngine from 'components/DynamicEngine';
import req from '@/utils/req';
import styles from './index.less';
import { useGetScrollBarWidth } from '@/utils/tool';
import { LocationDescriptorObject } from 'history-with-query';

const isMac = navigator.platform.indexOf('Mac') === 0;

interface PreviewPageProps {
  location: LocationDescriptorObject;
}
interface PointDataItem {
  id: string;
  item: Record<string, any>;
  point: Record<string, any>;
}

const PreviewPage = memo((props: PreviewPageProps) => {
  const [pointData, setPointData] = useState(() => {
    let pointDataStr = localStorage.getItem('pointData');
    let points;

    try {
      points = JSON.parse(pointDataStr!) || [];
    } catch (err) {
      points = [];
    }
    return points.map((item: PointDataItem) => ({
      ...item,
      point: { ...item.point, isDraggable: false, isResizable: false },
    }));
  });

  const vw = window.innerWidth;

  useEffect(() => {
    const tid = props.location.query?.tid;
    req
      .get<any, PointDataItem[]>('/visible/preview/get', { params: { tid } })
      .then(res => {
        setPointData(
          res.map(item => ({
            ...item,
            point: { ...item.point, isDraggable: false, isResizable: false },
          })),
        );
      })
      .catch(err => {
        console.error(err);
      });
  }, [props.location.query]);

  const ref = useRef<HTMLDivElement>(null);
  const width = useGetScrollBarWidth(ref);
  const pcStyle = useMemo(() => {
    return {
      width: isMac ? 395 : 375 + width + 1, //小数会有偏差
      margin: '20px auto',
      border: '10px solid #000',
      borderRadius: '20px',
      height: '684px',
      overflow: 'auto',
    };
  }, [width]);

  return (
    <div ref={ref} style={vw > 800 ? pcStyle : {}}>
      <GridLayout
        className={styles.layout}
        cols={24}
        rowHeight={2}
        width={vw > 800 ? 375 : vw}
        margin={[0, 0]}
      >
        {pointData.map((value: PointDataItem) => (
          <div className={styles.dragItem} key={value.id} data-grid={value.point}>
            <DynamicEngine {...(value.item as any)} />
          </div>
        ))}
      </GridLayout>
    </div>
  );
});

export default PreviewPage;
