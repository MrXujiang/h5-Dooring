import { NoticeBar } from 'zarm';
import React, { memo } from 'react';
import { NoticeConfigType } from '@/components/DynamicEngine/schema';
const Notice = memo((props: NoticeConfigType) => {
  const { text, speed, theme, isClose = false } = props;
  return (
    <NoticeBar theme={theme === 'default' ? undefined : theme} closable={isClose} speed={speed}>
      <span style={{ color: 'inherit' }}>{text}</span>
    </NoticeBar>
  );
});

export default Notice;
