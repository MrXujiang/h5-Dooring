import React, { memo } from 'react';
import { IZLConfig } from './schema';
import logo from '@/assets/cardLabel.png';
import styles from './index.less';

interface IProps extends IZLConfig {
  isTpl?: boolean;
}

const Coupons = memo((props: IProps) => {
  const { title, desc, link, frontColor, titColor, round, imgUrl, bgColor, isTpl } = props;
  const toLink = () => {
    if (link && window.location.href.indexOf('editor') < 0) {
      window.location.href = link;
    }
  };
  return isTpl ? (
    <div>
      <img style={{ width: '100%' }} src={logo} alt=""></img>
    </div>
  ) : (
    <div
      style={{
        maxWidth: 'calc(100% - 8px)',
        borderRadius: round + 'px',
        margin: '4px auto',
        overflow: 'hidden',
        boxShadow: '0 0 6px rgba(0,0,0, .1)',
      }}
    >
      <div
        className={styles.topArea}
        style={{ backgroundImage: `linear-gradient(45deg, ${frontColor}, ${bgColor})` }}
        onClick={toLink}
      >
        <div className={styles.leftBox}>
          <img src={imgUrl && imgUrl[0].url} alt="" />
        </div>
        {title && (
          <div className={styles.rightBox}>
            <div className={styles.title} style={{ color: titColor }}>
              {title}
            </div>
            <div className={styles.desc}>{desc}</div>
          </div>
        )}
      </div>
    </div>
  );
});

export default Coupons;
