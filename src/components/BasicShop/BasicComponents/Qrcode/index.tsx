import React, { memo } from 'react';
import { IQrcodeConfig } from './schema';

const Qrcode = memo((props: IQrcodeConfig) => {
  const { qrcode, text, color, fontSize = 14 } = props;
  return (
    <div style={{ width: '240px', margin: '16px auto' }}>
      <img src={qrcode && qrcode[0].url} alt={text} style={{ width: '100%' }} />
      <div style={{ textAlign: 'center', color, fontSize, paddingTop: '8px' }}>{text}</div>
    </div>
  );
});

export default Qrcode;
