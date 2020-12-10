import React, { memo } from 'react';
import { Button, Popover } from 'antd';
import styles from './index.less';

///这组件写的有问题  popover会重定位
const content = (
  <div className={styles.imgWrap}>
    <img src="http://49.234.61.19/uploads/WechatIMG2_1742b586c3d.jpeg" alt="sponsorship" />
  </div>
);

export default memo(function ZanPao() {
  return (
    <div className={styles.takeCat} style={{ display: 'inline-block' }}>
      <Popover placement="top" title={null} content={content} trigger="hover">
        <Button type="primary" size="large">
          支持开源, 请作者喝奶茶~
        </Button>
      </Popover>
    </div>
  );
});
