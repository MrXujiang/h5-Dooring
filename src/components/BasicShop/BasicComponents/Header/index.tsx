import { memo } from 'react';
import styles from './index.less';
import React from 'react';
import { IHeaderConfig } from './schema';

const Header = memo((props: IHeaderConfig) => {
  const { bgColor, logo, logoText, fontSize, color } = props;
  return (
    <header className={styles.header} style={{ backgroundColor: bgColor }}>
      <div className={styles.logo}>
        <img src={logo && logo[0].url} alt={logoText} />
      </div>
      <div className={styles.title} style={{ fontSize, color }}>
        {logoText}
      </div>
    </header>
  );
});

export default Header;
