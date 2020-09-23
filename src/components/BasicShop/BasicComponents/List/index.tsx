import React, { memo } from 'react';
import styles from './index.less';
import { IListConfig } from './schema';
const List = memo((props: IListConfig) => {
  const { round, sourceData, imgSize, fontSize, color } = props;
  return (
    <>
      {props.isTpl && (
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
                        width: parseFloat(imgSize),
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
      )}
      {!props.isTpl && (
        <div
          className={styles.list}
          style={{
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
                        width: parseFloat(imgSize),
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
      )}
    </>
  );
});

export default List;
