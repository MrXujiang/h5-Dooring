import React, { memo } from 'react';
import { IFooterConfig } from './schema';
const Footer = memo((props: IFooterConfig) => {
  const { bgColor, text, color, align, fontSize, height } = props;
  console.log(props);
  return (
    <>
      {props.isTpl && (
        <footer
          style={{
            backgroundColor: bgColor,
            color,
            fontSize,
            textAlign: align,
            height,
            lineHeight: height + 'px',
          }}
        >
          {text}
        </footer>
      )}
      {!props.isTpl && (
        <div
          style={{
            overflow: 'hidden',
            position: 'absolute',
            width: `${props.baseWidth}%`,
            height: `${props.baseHeight}%`,
            borderRadius: props.baseRadius,
            transform: `translate(${props.baseLeft}px,${props.baseTop}px) 
                scale(${props.baseScale / 100}) 
                rotate(${props.baseRotate}deg)`,
          }}
        >
          <footer
            style={{
              backgroundColor: bgColor,
              color,
              fontSize,
              textAlign: align,
              height,
              lineHeight: height + 'px',
            }}
          >
            {text}
          </footer>
        </div>
      )}
    </>
  );
});

export default Footer;
