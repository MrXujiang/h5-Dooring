import { FooterConfigType } from '@/components/DynamicEngine/schema';
import React, { memo } from 'react';
const Footer = memo((props: FooterConfigType) => {
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
