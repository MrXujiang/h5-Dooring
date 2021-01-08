import { memo } from 'react';
import styles from './index.less';
import React from 'react';
import { IHeaderConfig } from './schema';
import logos from '@/assets/header.png';
const Header = memo((props: IHeaderConfig) => {
  const { bgColor, logo, logoText, fontSize, color } = props;
  return (
    <>
      {props.isTpl && (
        <div>
          <img src={logos} alt="" />
        </div>
      )}
      {!props.isTpl && (
        <header
          className={styles.header}
          style={{
            backgroundColor: bgColor,
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
          <div className={styles.logo}>
            <img src={logo && logo[0].url} alt={logoText} />
          </div>
          <div className={styles.title} style={{ fontSize, color }}>
            {logoText}
          </div>
        </header>
      )}
    </>
  );
});

export default Header;
