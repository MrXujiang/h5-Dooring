import { NoticeBar } from 'zarm';
import React, { memo } from 'react';
import { INoticeConfig } from './schema';
import logo from '@/assets/notice.png';
const Notice = memo((props: INoticeConfig & { isTpl: boolean }) => {
  const { text, speed, theme, isClose = false, isTpl } = props;
  return (
    <>
      {isTpl ? (
        <div>
          <img src={logo} alt=""></img>
        </div>
      ) : (
        <NoticeBar theme={theme === 'default' ? undefined : theme} closable={isClose} speed={speed}>
          <span style={{ color: 'inherit' }}>{text}</span>
        </NoticeBar>
      )}
    </>
  );
});

export default Notice;
