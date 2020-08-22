import React, { memo } from 'react';
import { Carousel } from 'zarm';
import styles from './index.less';

const XCarousel = memo(props => {
  const {
    direction,
    swipeable,
    imgList
  } = props
  
  const contentRender = () => {
    return imgList.map((item, i) => {
      return (
        <div className={styles.carousel__item__pic} key={+i}>
          <img src={item.imgUrl[0].url} alt="" />
        </div>
      )
    })
  }

  return <div style={{width: '100%', overflow: 'hidden'}}>
          <Carousel
            onChange={(index) => {
              // console.log(`onChange: ${index}`);
            }}
            direction={direction}
            swipeable={swipeable}
            autoPlay
            loop
          >
            {contentRender()}
          </Carousel>
        </div>
})

export default XCarousel;