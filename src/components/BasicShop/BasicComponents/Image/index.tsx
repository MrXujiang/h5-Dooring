import { ImageConfigType } from '@/components/DynamicEngine/schema';
import React, { memo } from 'react';
const Image = memo((props: ImageConfigType) => {
  const { imgUrl, round = 0 } = props;
  return (
    <div style={{ borderRadius: round, width: '100%', textAlign: 'center', overflow: 'hidden' }}>
      <img src={imgUrl && imgUrl[0].url} alt="" style={{ width: '100%' }} />
    </div>
  );
});

export default Image;
