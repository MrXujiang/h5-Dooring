import { Chart } from '@antv/f2';
import React, { memo, useEffect, useRef } from 'react';
// import { uuid } from 'utils/tool';
import PieImg from '@/assets/pie.png';

import styles from './index.less';
import { IChartConfig } from './schema';

interface XChartProps extends IChartConfig {
  isTpl: boolean;
}

interface DataMap {
  [name: string]: number | string;
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

      // 获取数据的map类型，用以展示图例说明
      const dataMap: DataMap = dataX.reduce((prev: any, cur) => {
        return prev.name
          ? { [prev.name]: prev.value, ...{ [cur.name]: cur.value } }
          : { ...prev, ...{ [cur.name]: cur.value } };
      });

      chart.legend({
        position: 'right',
        itemFormatter: function itemFormatter(val) {
          return val + '  ' + dataMap[val] + '%';
        },
      });
      chart.tooltip(false);
      chart.coord('polar', {
        transposed: true,
        radius: 0.85,
      });
      chart.axis(false);
      chart
        .interval()
        .position('a*value')
        .color('name', [
          '#1890FF',
          '#13C2C2',
          '#2FC25B',
          '#FACC14',
          '#00CC99',
          '#CC3366',
          '#CC6600',
          '#CC66CC',
          '#FF3366',
          '#0066CC',
        ])
        .adjust('stack')
        .style({
          lineWidth: 1,
          stroke: '#fff',
          lineJoin: 'round',
          lineCap: 'round',
        })
        .animate({
          appear: {
            duration: 1200,
            easing: 'bounceOut',
          },
        });

      chart.render();
    }
  }, [data, isTpl]);
  return (
    <div className={styles.chartWrap}>
      <div className={styles.chartTitle} style={{ color, fontSize: size, paddingTop }}>
        {title}
      </div>
      {isTpl ? <img src={PieImg} alt="dooring chart" /> : <canvas ref={chartRef}></canvas>}
    </div>
  );
};

export default memo(XLine);
