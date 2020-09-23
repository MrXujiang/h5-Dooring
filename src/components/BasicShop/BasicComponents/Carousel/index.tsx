import React, { memo } from 'react';
import { Carousel } from 'zarm';
import styles from './index.less';
import { ICarouselConfig } from './schema';

const XCarousel = memo((props: ICarouselConfig) => {
  const { direction, swipeable, autoPlay, isTpl, imgList, tplImg } = props;
  const contentRender = () => {
    return imgList.map((item, i) => {
      return (
        <div className={styles.carousel__item__pic} key={+i}>
          <img src={item.imgUrl.length > 0 ? item.imgUrl[0].url : ''} alt="" />
        </div>
      );
    });
  };
  return (
    <>
      {isTpl ? (
        <div className={styles.carousel__item__pic}>
          <img src={tplImg} alt="" />
        </div>
      ) : (
        <div
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
        </div>
      )}
    </>
  );
});

export default XCarousel;
