import React, { useState, memo, useEffect, useRef } from 'react';
import { Calendar } from 'zarm';
import styles from './index.less';
import { ICalendarConfig } from './schema';
import logo from '@/assets/calend.png';

const CalendarCp = memo((props: ICalendarConfig & { isTpl: boolean }) => {
  const { time, range, color, selectedColor, round, isTpl } = props;

  const realRange = range.split('-');

  const [value, setValue] = useState<Date[] | undefined>([
    new Date(`${time}-${realRange[0]}`),
    new Date(`${time}-${realRange[1]}`),
  ]);
  const [min] = useState(new Date(`${time}-01`));
  const [max] = useState(new Date(`${time}-31`));

  const boxRef = useRef<any>(null);

  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.style.setProperty('--color', color);
      boxRef.current.style.setProperty('--selectColor', selectedColor);
      boxRef.current.style.setProperty('--selectBgColor', selectedColor);
    }
  }, []);

  const isEditorPage = window.location.pathname.indexOf('editor') > -1;

  return (
    <>
      {isTpl ? (
        <div>
          <img src={logo} style={{ width: '100%' }} alt="h5-dooring日历组件"></img>
        </div>
      ) : (
        <div
          className={styles.calenderWrap}
          style={{ borderRadius: round + 'px', pointerEvents: isEditorPage ? 'none' : 'initial' }}
          ref={boxRef}
        >
          <Calendar
            multiple={!!range}
            value={value}
            min={min}
            max={new Date(max)}
            disabledDate={(date: any) => /(0|6)/.test(date.getDay())}
            onChange={(value: Date[] | undefined) => {
              setValue(value);
            }}
          />
        </div>
      )}
    </>
  );
});

export default CalendarCp;
