import { memo } from 'react';
import * as Icon from '@ant-design/icons';
import IconImg from 'assets/icon.png';

const XIcon = memo(props => {
  const { color, size, type, spin, isTpl } = props;

  const MyIcon = Icon[type];

  return isTpl ? (
    <div style={{ textAlign: 'center' }}>
      <img style={{ verticalAlign: '-20px', width: '82px' }} src={IconImg} alt={type} />
      图标
    </div>
  ) : (
    <MyIcon twoToneColor={color} style={{ fontSize: size }} spin={spin} />
  );
});

export default XIcon;
