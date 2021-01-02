import React, { memo } from 'react';
import { IZLConfig } from './schema';
import logo from '@/assets/cunpos.png';
import styles from './index.less';

interface IProps extends IZLConfig {
  isTpl?: boolean;
}

const Coupons = memo((props: IProps) => {
  const { money, ifText, desc, dealTime, link, bgColor, isTpl } = props;
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
        width: 'calc(100% - 32px)',
        borderRadius: '6px',
        margin: '16px auto',
        overflow: 'hidden',
        boxShadow: '0 0 6px rgba(0,0,0, .1)',
      }}
    >
      <div className={styles.topArea} style={{ backgroundColor: bgColor }} onClick={toLink}>
        <div className={styles.leftBox}>
          <span>{money}</span>元优惠券
        </div>
        <div className={styles.rightBox}>
          <div className={styles.label} style={{ color: bgColor }}>
            {ifText}
          </div>
          <div className={styles.time}>{dealTime}</div>
        </div>
      </div>
      <div className={styles.ft}>{desc}</div>
    </div>
  );
});

export default Coupons;
