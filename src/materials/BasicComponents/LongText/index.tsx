import React, { memo } from 'react';
import { ILongTextConfig } from './schema';
import logo from '@/assets/longText.png';
const LongText = memo((props: ILongTextConfig & { isTpl: boolean }) => {
  const {
    text,
    fontSize,
    color,
    indent,
    lineHeight,
    textAlign,
    bgColor,
    padding,
    radius,
    isTpl,
  } = props;
  return (
    <>
      {isTpl ? (
        <div>
          <img src={logo} alt=""></img>
        </div>
      ) : (
        <div
          style={{
            color,
            textIndent: indent + 'px',
            fontSize,
            lineHeight,
            textAlign,
            backgroundColor: bgColor,
            padding,
            borderRadius: radius,
          }}
        >
          {text}
        </div>
      )}
    </>
  );
});
export default LongText;
