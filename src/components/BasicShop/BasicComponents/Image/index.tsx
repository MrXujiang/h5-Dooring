import React, { memo } from 'react';
import { IImageConfig } from './schema';
const Image = memo((props: IImageConfig) => {
  const { imgUrl, round = 0 } = props;
  return (
    <>
      {props.isTpl && (
        <div
          style={{
            borderRadius: round,
            width: '100%',
            textAlign: 'center',
            overflow: 'hidden',
          }}
        >
          <img src={imgUrl && imgUrl[0].url} alt="" style={{ width: '100%' }} />
        </div>
      )}
      {!props.isTpl && (
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
          <div
            style={{
              borderRadius: round,
              width: '100%',
              textAlign: 'center',
              overflow: 'hidden',
            }}
          >
            <img src={imgUrl && imgUrl[0].url} alt="" style={{ width: '100%' }} />
          </div>
        </div>
      )}
    </>
  );
});

export default Image;
