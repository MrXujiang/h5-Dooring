import React, { memo } from 'react';
import { Button, Popover } from 'antd';
import styles from './index.less';

interface IProps {
  text: any;
}

///这组件写的有问题  popover会重定位
const content = (
  <div className={styles.imgWrap}>
    <img src={`http://h5.dooring.cn/uploads/WechatIMG2_17969ccfe40.jpeg`} alt="sponsorship" />
  </div>
);

export default memo(function ZanPao(props: IProps) {
  const {
    text = (
      <Button type="primary" danger style={{ background: 'red !important' }} size="large">
        支持开源, 请作者喝茶~
      </Button>
    ),
  } = props;
  return (
    <div className={styles.takeCat}>
      <Popover placement="top" title={null} content={content} trigger="hover">
        {text}
      </Popover>
    </div>
  );
});
