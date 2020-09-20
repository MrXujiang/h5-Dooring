import { Chart } from '@antv/f2';
import React, { memo, useEffect, useRef } from 'react';
// import { uuid } from 'utils/tool';
import AreaImg from '@/assets/area.png';

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
      const dataX = data.map(item => ({ ...item, value: Number(item.value), a: '1' }));

      // Step 2: 载入数据源
      chart.source(dataX, {
        percent: {
          formatter: function formatter(val) {
            return val * 100 + '%';
          },
        },
      });

      chart.tooltip({
        showCrosshairs: true,
      });

      chart.scale({
        name: {
          range: [0, 1],
        },
        value: {
          tickCount: 5,
          min: 0,
        },
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

      chart.area().position('name*value');
      chart.line().position('name*value');
      chart.render();
    }
  }, [data, isTpl]);
  return (
    <div className={styles.chartWrap}>
      <div className={styles.chartTitle} style={{ color, fontSize: size, paddingTop }}>
        {title}
      </div>
      {isTpl ? <img src={AreaImg} alt="dooring chart" /> : <canvas ref={chartRef}></canvas>}
    </div>
  );
};

export default memo(XLine);
