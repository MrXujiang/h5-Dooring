import React, { memo } from 'react';
import { IQrcodeConfig } from './schema';
import logo from '@/assets/qrcode.png';
const Qrcode = memo((props: IQrcodeConfig & { isTpl: boolean }) => {
  const { qrcode, text, color, fontSize = 14, isTpl } = props;
  return (
    <>
      {isTpl ? (
        <div>
          <img src={logo} alt=""></img>
        </div>
      ) : (
        <div style={{ width: '100%', maxWidth: '220px', margin: '16px auto' }}>
          <img src={qrcode && qrcode[0].url} alt={text} style={{ width: '100%' }} />
          <div style={{ textAlign: 'center', color, fontSize, paddingTop: '8px' }}>{text}</div>
        </div>
      )}
    </>
  );
});

export default Qrcode;
