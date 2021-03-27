import React, { memo, PropsWithChildren } from 'react';
import { Carousel } from 'zarm';
import styles from './index.less';
import { ICarouselConfig } from './schema';
import logo from '@/assets/banner.png';

interface CarouselTypes extends ICarouselConfig {
  isTpl: boolean;
}

const XCarousel = memo((props: PropsWithChildren<CarouselTypes>) => {
  const { direction, swipeable, autoPlay, isTpl, imgList, round } = props;
  const contentRender = () => {
    return imgList.map((item, i) => {
      return (
        <div className={styles.carousel__item__pic} key={+i} style={{ borderRadius: round + 'px' }}>
          <a href={item.link}>
            <img src={item.imgUrl.length > 0 ? item.imgUrl[0].url : ''} alt="" />
          </a>
        </div>
      );
    });
  };
  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      {isTpl ? (
        <div className={styles.carousel__item__pic}>
          <img src={logo} alt="" />
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
