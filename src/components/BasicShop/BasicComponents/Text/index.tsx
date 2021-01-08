import React, { memo } from 'react';
import { ITextConfig } from './schema';
import logo from '@/assets/text.png';
const Text = memo((props: ITextConfig & { isTpl: boolean }) => {
  const { align, text, fontSize, color, lineHeight, isTpl } = props;
  return (
    <>
      {isTpl ? (
        <div>
          <img src={logo} alt=""></img>
        </div>
      ) : (
        <div style={{ color, textAlign: align, fontSize, lineHeight }}>{text}</div>
      )}
    </>
  );
});
export default Text;
