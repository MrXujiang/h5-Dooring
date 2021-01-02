import React, { memo } from 'react';
import { IZLConfig } from './schema';
import logo from '@/assets/zhuanlan.png';
import styles from './index.less';

interface IProps extends IZLConfig {
  isTpl?: boolean;
}

const ZL = memo((props: IProps) => {
  const {
    title,
    desc,
    imgUrl,
    link,
    linkText,
    linkBg,
    titColor,
    titFontSize,
    bgColor,
    padding,
    radius,
    content,
    isTpl,
  } = props;
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
        backgroundColor: bgColor,
        padding: padding + 'px',
        borderRadius: radius + 'px',
        margin: '16px auto',
        boxShadow: '0 0 6px rgba(0,0,0, .1)',
      }}
    >
      <div className={styles.topArea}>
        <div className={styles.tx}>
          <img src={imgUrl && imgUrl[0].url} alt="dooring" />
        </div>
        <div className={styles.textArea}>
          <div className={styles.title} style={{ fontSize: titFontSize + 'px', color: titColor }}>
            {title}
          </div>
          <div
            className={styles.desc}
            style={{ fontSize: Math.ceil(titFontSize * 0.7) + 'px', color: titColor }}
          >
            {desc}
          </div>
        </div>
        <div className={styles.btnArea}>
          <span className={styles.btn} style={{ backgroundColor: linkBg }} onClick={toLink}>
            {' '}
            {linkText}{' '}
          </span>
        </div>
      </div>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
});

export default ZL;
