import React, { CSSProperties, memo, useEffect, useMemo, useRef, useState } from 'react';
import { ViewRender } from '@/core';
import domtoimage from 'dom-to-image';
import req from '@/utils/req';
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

  const [pageData, setPageData] = useState(() => {
    let pageConfigStr = localStorage.getItem('pageConfig');
    let pageConfig;

    try {
      pageConfig = JSON.parse(pageConfigStr!) || {};
    } catch (err) {
      pageConfig = {};
    }
    return pageConfig;
  });

  const vw = window.innerWidth;

  useEffect(() => {
    const { tid, gf } = props.location.query!;
    if (!gf && parent.window.location.pathname === '/preview') {
      req
        .get<any, any>('/xxx/xxx/你的自定义接口地址', { params: { tid } })
        .then(res => {
          const { pageConfig, tpl } = res || { pageConfig: {}, tpl: [] };
          // 设置标题
          document.title = pageConfig.title || 'H5-Dooring | 强大的H5编辑神器';
          // 设置数据源
          setPointData(
            tpl.map(item => ({
              ...item,
              point: { ...item.point, isDraggable: false, isResizable: false },
            })),
          );

          setPageData(pageConfig);
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
  const refImgDom = useRef<HTMLDivElement>(null);
  const width = useGetScrollBarWidth(ref);
  const pcStyle: CSSProperties = useMemo(() => {
    return {
      width: isMac ? 382 : 375 + width + 1, //小数会有偏差
      margin: '55px auto',
      height: '684px',
      overflow: 'auto',
      position: 'relative',
      transform: 'scale(0.7) translateY(-80px)',
      backgroundColor: pageData.bgColor,
    };
  }, [width]);

  const generateImg = (cb: any) => {
    domtoimage
      .toBlob(refImgDom.current, {
        bgcolor: '#fff',
        //  支持跨域截图
        cacheBust: true,
      })
      .then(function(blob: Blob) {
        const reader = new FileReader();
        reader.onload = function(e) {
          cb && cb(e?.target?.result);
        };
        reader.readAsDataURL(blob);
      })
      .catch(function(error: any) {
        console.error('oops, something went wrong!', error);
      });
  };

  return (
    <>
      <div
        ref={ref}
        style={
          vw > 800
            ? pcStyle
            : { height: '100vh', overflow: 'auto', backgroundColor: pageData.bgColor }
        }
      >
        <div ref={refImgDom}>
          <ViewRender pageData={pageData} pointData={pointData} width={vw > 800 ? 375 : vw} />
        </div>
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
