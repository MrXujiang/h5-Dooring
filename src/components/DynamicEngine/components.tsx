import { memo } from 'react';
import { NoticeBar, Progress } from 'zarm';
import styles from './components.less';
import React from 'react';
import {
  HeaderConfigType,
  TextConfigType,
  NoticeConfigType,
  QRCodeConfigType,
  FooterConfigType,
  ImageConfigType,
  ListConfigType,
  XProgressConfigType,
} from './schema';

const Header = memo((props: HeaderConfigType) => {
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

const Text = memo((props: TextConfigType) => {
  const { align, text, fontSize, color, lineHeight } = props;
  return (
    <div className={styles.textWrap} style={{ color, textAlign: align, fontSize, lineHeight }}>
      {text}
    </div>
  );
});

const Notice = memo((props: NoticeConfigType) => {
  const { text, speed, theme, link, isClose = false } = props;
  return (
    <NoticeBar theme={theme === 'default' ? undefined : theme} closable={isClose} speed={speed}>
      <a style={{ color: 'inherit' }}>{text}</a>
    </NoticeBar>
  );
});

const Qrcode = memo((props: QRCodeConfigType) => {
  const { qrcode, text, color, fontSize = 14 } = props;
  return (
    <div style={{ width: '240px', margin: '16px auto' }}>
      <img src={qrcode && qrcode[0].url} alt={text} style={{ width: '100%' }} />
      <div style={{ textAlign: 'center', color, fontSize, paddingTop: '8px' }}>{text}</div>
    </div>
  );
});

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

const Image = memo((props: ImageConfigType) => {
  const { imgUrl, round = 0 } = props;
  return (
    <div style={{ borderRadius: round, width: '100%', textAlign: 'center', overflow: 'hidden' }}>
      <img src={imgUrl && imgUrl[0].url} alt="" style={{ width: '100%' }} />
    </div>
  );
});

const List = memo((props: ListConfigType) => {
  const { round, sourceData, imgSize, fontSize, color } = props;
  return (
    <div className={styles.list}>
      <div className={styles.sourceList}>
        {sourceData.map((item, i) => {
          return (
            <div className={styles.sourceItem} key={i}>
              <div className={styles.imgWrap}>
                <img
                  src={
                    item.imgUrl[0]
                      ? item.imgUrl[0].url
                      : 'http://io.nainor.com/uploads/01_173e15d3493.png'
                  }
                  alt={item.desc}
                  style={{
                    width: imgSize,
                    height: imgSize,
                    objectFit: 'cover',
                    borderRadius: round,
                  }}
                />
              </div>
              <div className={styles.content}>
                <a
                  className={styles.tit}
                  style={{ fontSize, color }}
                  href={item.link ? item.link : '#'}
                >
                  {item.title}
                  <div
                    className={styles.desc}
                    style={{ fontSize: fontSize * 0.8, color: 'rgba(0,0,0, .3)' }}
                  >
                    {item.desc}
                  </div>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

const XProgress = memo((props: XProgressConfigType) => {
  const { theme, size, shape, percent, strokeWidth } = props;
  return (
    <div className={styles.textWrap} style={{ textAlign: 'center' }}>
      <Progress
        shape={shape}
        size={size}
        percent={percent}
        theme={theme}
        strokeWidth={strokeWidth}
      />
    </div>
  );
});

export { Header, Text, Notice, Qrcode, Footer, Image, List, XProgress };
