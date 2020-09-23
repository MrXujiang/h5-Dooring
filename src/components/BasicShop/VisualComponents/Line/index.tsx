import { Chart } from '@antv/f2';
import React, { memo, useEffect, useRef } from 'react';
// import { uuid } from 'utils/tool';
import LineImg from '@/assets/line.png';

import styles from './index.less';
import { IChartConfig } from './schema';

interface XChartProps extends IChartConfig {
  isTpl: boolean;
}

const XLine = (props: XChartProps) => {
  const { isTpl, data, color, size, paddingTop, title } = props;
  const chartRef = useRef(null);
  useEffect(() => {
    if (!isTpl) {
      const chart = new Chart({
        el: chartRef.current || undefined,
        pixelRatio: window.devicePixelRatio, // 指定分辨率
      });

      // step 2: 处理数据
      const dataX = data.map(item => ({ ...item, value: Number(item.value) }));

      // Step 2: 载入数据源
      chart.source(dataX, {
        value: {
          tickCount: 5,
          min: 0,
        },
      });

      chart.tooltip({
        showCrosshairs: true,
        showItemMarker: false,
      });

      chart.axis('name', {
        label: function label(text, index, total) {
          const textCfg: any = {};
          if (index === 0) {
            textCfg.textAlign = 'left';
          } else if (index === total - 1) {
            textCfg.textAlign = 'right';
          }
          return textCfg;
        },
      });

      chart.line().position('name*value');
      chart
        .point()
        .position('name*value')
        .style({
          stroke: '#fff',
          lineWidth: 1,
        });

      chart.render();
    }
  }, [data, isTpl]);
  return (
    <div className={styles.chartWrap}>
      <div className={styles.chartTitle} style={{ color, fontSize: size, paddingTop }}>
        {title}
      </div>
      {isTpl ? <img src={LineImg} alt="dooring chart" /> : <canvas ref={chartRef}></canvas>}
    </div>
  );
};

export default memo(XLine);
