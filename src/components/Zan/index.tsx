import React, { memo } from 'react';
import { Button, Popover } from 'antd';
import styles from './index.less';

///这组件写的有问题  popover会重定位
const content = (
  <div className={styles.imgWrap}>
    <img src="http://io.nainor.com/uploads/WechatIMG2_1742b586c3d.jpeg" alt="sponsorship" />
  </div>
);

export default memo(function ZanPao() {
  return (
    <div className={styles.takeCat}>
      <Popover placement="top" title={null} content={content} trigger="hover">
        <Button type="primary" danger>
          赞助作者
        </Button>
      </Popover>
    </div>
  );
});
