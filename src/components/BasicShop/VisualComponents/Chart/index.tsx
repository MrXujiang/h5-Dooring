import { Chart } from '@antv/f2';
import React, { memo, useEffect, useRef } from 'react';
// import { uuid } from 'utils/tool';
import ChartImg from '@/assets/chart.png';

import styles from './index.less';
import { IChartConfig } from './schema';

interface XChartProps extends IChartConfig {
  isTpl: boolean;
}

const XChart = (props: XChartProps) => {
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
      chart.source(dataX);

      // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
      chart
        .interval()
        .position('name*value')
        .color('name');

      // Step 4: 渲染图表
      chart.render();
    }
  }, [data, isTpl]);
  return (
    <div className={styles.chartWrap}>
      <div className={styles.chartTitle} style={{ color, fontSize: size, paddingTop }}>
        {title}
      </div>
      {isTpl ? <img src={ChartImg} alt="dooring chart" /> : <canvas ref={chartRef}></canvas>}
    </div>
  );
};

export default memo(XChart);
