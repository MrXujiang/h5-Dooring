import React, { memo } from 'react';
import { IFooterConfig } from './schema';
const Footer = memo((props: IFooterConfig) => {
  const { bgColor, text, color, align, fontSize, height } = props;
  return (
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
  );
});

export default Footer;
