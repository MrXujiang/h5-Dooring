import React, { memo } from 'react';
import { IFooterConfig } from './schema';
import logo from '@/assets/footer.png';
const Footer = memo((props: IFooterConfig) => {
  const { bgColor, text, color, align, fontSize, height } = props;
  return (
    <>
      {props.isTpl && (
        <div>
          <img src={logo} alt="" />
        </div>
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
