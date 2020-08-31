import React, { memo } from 'react';
import { Carousel } from 'zarm';
import styles from './index.less';

const XCarousel = memo(props => {
  const { direction, swipeable, autoPlay, isTpl, imgList, tplImg } = props;

  const contentRender = () => {
    return imgList.map((item, i) => {
      return (
        <div className={styles.carousel__item__pic} key={+i}>
          <img src={item.imgUrl[0].url} alt="" />
        </div>
      );
    });
  };

  console.log(isTpl);

  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      {isTpl ? (
        <div className={styles.carousel__item__pic}>
          <img src={tplImg} alt="" />
        </div>
      ) : (
        <Carousel
          onChange={index => {
            // console.log(`onChange: ${index}`);
          }}
          direction={direction}
          swipeable={swipeable}
          autoPlay={autoPlay}
          loop
        >
          {contentRender()}
        </Carousel>
      )}
    </div>
  );
});

export default XCarousel;
