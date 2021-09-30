import React, { memo } from 'react';
import * as Icon from '@ant-design/icons';
import { AntdIconProps } from '@ant-design/icons/lib/components/AntdIcon';
import { AntdIconType } from './icon';
import { IIconConfig } from './schema';
import logo from '@/assets/icon_01.png';

interface IconType extends IIconConfig {
  isTpl?: boolean;
}
const XIcon = memo((props: IconType) => {
  const { color, size, link, text, fontSize, fontColor, type, spin, isTpl } = props;

  const MyIcon: React.ForwardRefExoticComponent<Pick<AntdIconProps, AntdIconType> &
    React.RefAttributes<HTMLSpanElement>> = Icon[type];

  const handleClick = () => {
    if (!link || window.location.href.indexOf('/editor') > -1) return;
    window.location.href = link;
  };

  return isTpl ? (
    <div>
      <img style={{ width: '100%' }} src={logo} alt="" />
    </div>
  ) : (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <MyIcon twoToneColor={color} style={{ fontSize: size }} spin={spin} onClick={handleClick} />
      <div style={{ fontSize, color: fontColor, paddingTop: '6px' }}> {text} </div>
    </div>
  );
});

export default XIcon;
