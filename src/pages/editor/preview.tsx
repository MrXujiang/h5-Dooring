import React, { CSSProperties, memo, useEffect, useMemo, useRef, useState } from 'react';
import GridLayout from 'react-grid-layout';
import DynamicEngine from 'components/DynamicEngine';
import domtoimage from 'dom-to-image';
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
    const { tid, gf } = props.location.query!;
    if (!gf) {
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
      return;
    }

    setTimeout(() => {
      generateImg((url: string) => {
        parent.window.getFaceUrl(url);
      });
    }, 3000);
  }, [props.location.query]);

  const ref = useRef<HTMLDivElement>(null);
  const width = useGetScrollBarWidth(ref);
  const pcStyle: CSSProperties = useMemo(() => {
    return {
      width: isMac ? 395 : 375 + width + 1, //小数会有偏差
      margin: '55px auto',
      height: '684px',
      overflow: 'auto',
      position: 'relative',
      transform: 'scale(0.7) translateY(-80px)',
    };
  }, [width]);

  const generateImg = (cb: any) => {
    domtoimage
      .toBlob(ref.current)
      .then(function(blob: Blob) {
        const formData = new FormData();
        formData.append('file', blob, 'tpl.jpg');
        req.post('/files/xxx', formData).then((res: any) => {
          cb && cb(res.url);
        });
      })
      .catch(function(error: any) {
        console.error('oops, something went wrong!', error);
      });
  };

  return (
    <>
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

      {vw > 800 ? (
        <div
          style={{
            backgroundImage: "url('/iphone.png') ",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            position: 'absolute',
            top: 0,
            height: '840px',
            width: '419px', //375+22+22
            left: '50%',
            transform: 'translate(-50%,-80px) scale(0.7)',
            boxShadow: '0 4px 30px 0 rgba(4, 59, 85, 0.1)',
            borderRadius: '60px',
            pointerEvents: 'none',
          }}
        ></div>
      ) : null}
    </>
  );
});

export default PreviewPage;
