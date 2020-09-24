import React, { useState, useEffect, useRef, useCallback } from 'react';

import styles from './index.less';

export interface calibrationTypes {
  width: number;
  height: number;
}
export type CalibrationTypes = {
  direction: 'up' | 'left' | 'right';
  multiple: number;
  id: string;
};

export default function Calibration(props: CalibrationTypes) {
  const { direction, multiple } = props;
  const [calibrationLength, setCalibration] = useState<calibrationTypes>({ width: 0, height: 0 });
  const calibrationRef = useRef<HTMLDivElement>(null);

  const generateElement = useCallback(
    (item?: boolean, num?: number) => {
      if (calibrationRef.current) {
        let createSpan = document.createElement('div');
        createSpan.className = 'calibrationLine';
        createSpan.style.backgroundColor = '#ccc';
        calibrationRef.current.style.display = 'flex';
        calibrationRef.current.style.justifyContent = 'space-between';
        if (direction === 'up') {
          calibrationRef.current.style.marginLeft = '50px';
          createSpan.style.width = '1px';
          createSpan.style.height = '6px';
          createSpan.style.display = 'inline-block';
        } else {
          calibrationRef.current.style.flexDirection = 'column';
          createSpan.style.height = '1px';
          createSpan.style.width = '6px';
        }
        if (item) {
          let createSpanContent = document.createElement('span');
          if (direction === 'up') {
            createSpan.style.height = '12px';
            createSpanContent.style.transform = 'translate3d(-4px, 20px, 0px)';
            createSpan.style.transform = 'translateY(0px)';
          } else {
            createSpan.style.width = '12px';
            createSpanContent.style.paddingLeft = '20px';
          }
          createSpanContent.style.display = 'block';
          createSpanContent.className = 'calibrationNumber';
          createSpanContent.innerHTML = num! * 5 + '';
          createSpan.appendChild(createSpanContent);
        }
        calibrationRef.current.appendChild(createSpan);
      }
    },
    [direction],
  );

  useEffect(() => {
    if (calibrationRef.current) {
      let calibration = calibrationRef.current.getBoundingClientRect();
      setCalibration({ width: calibration.width, height: calibration.height });
      let length = direction === 'up' ? calibration.width : calibration.height;
      for (let i = 0; i < length / 5; i++) {
        if (i % 10 === 0) {
          generateElement(true, i);
        } else {
          generateElement();
        }
      }
    }
  }, [direction, generateElement]);

  useEffect(() => {
    if (calibrationRef.current) {
      let width = calibrationLength.width
        ? calibrationLength.width
        : calibrationRef.current.getBoundingClientRect().width;
      let height = calibrationLength.height
        ? calibrationLength.height
        : calibrationRef.current.getBoundingClientRect().height;
      let arr = [...Array.from(calibrationRef.current.querySelectorAll('.calibrationLine'))];
      if (arr.length) {
        if (direction === 'up') {
          calibrationRef.current.style.width = parseFloat(multiple.toFixed(1)) * width + 'px';
          arr.forEach(el => {
            let dom = [...Array.from(el.querySelectorAll('.calibrationNumber'))][0] as HTMLElement;
            if (dom) {
              dom.style.transform = `translate3d(-4px, 16px, 0px) scale(${(multiple + 0.1).toFixed(
                1,
              )})`;
            }
          });
        } else {
          calibrationRef.current.style.height = parseFloat(multiple.toFixed(1)) * height + 'px';
          arr.forEach(el => {
            let dom = [...Array.from(el.querySelectorAll('.calibrationNumber'))][0] as HTMLElement;
            if (dom) {
              dom.style.transform = `translate3d(-4px, -8px, 0px) scale(${(multiple + 0.1).toFixed(
                1,
              )})`;
            }
          });
        }
      }
    }
  }, [calibrationLength.height, calibrationLength.width, direction, multiple]);

  return <div className={styles.calibration} ref={calibrationRef}></div>;
}
