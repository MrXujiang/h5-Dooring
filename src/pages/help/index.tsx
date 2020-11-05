import React from 'react';
import A from '@/assets/1.png';
import B from '@/assets/2.png';
import C from '@/assets/3.png';
import D from '@/assets/4.png';
import E from '@/assets/5.png';
import F from '@/assets/6.png';
import styles from './index.less';

const Help = () => {
  return (
    <div className={styles.helpWrap}>
      <h2>H5-Dooring使用指南</h2>
      <div className={styles.helpItem}>
        <h3>1. 首页功能介绍</h3>
        <div className={styles.imgWrap}>
          <img src={A} alt="H5编辑器, H5制作, H5设计" />
        </div>
      </div>
      <div className={styles.helpItem}>
        <h3>2. 客服机器人</h3>
        <div className={styles.imgWrap}>
          <img src={B} alt="H5编辑器, H5制作, H5设计" />
        </div>
      </div>
      <div className={styles.helpItem}>
        <h3>3. 编辑器页面使用说明</h3>
        <div className={styles.imgWrap}>
          <img src={C} alt="H5编辑器, H5制作, H5设计" />
        </div>
      </div>
      <div className={styles.helpItem}>
        <h3>4. 管理后台入口</h3>
        <div className={styles.imgWrap}>
          <img src={D} alt="H5编辑器, H5制作, H5设计" />
        </div>
      </div>
      <div className={styles.helpItem}>
        <h3>5. 页面管理系统使用</h3>
        <div className={styles.imgWrap}>
          <img src={E} alt="H5编辑器, H5制作, H5设计" />
        </div>
      </div>
      <div className={styles.helpItem}>
        <h3>6. 页面数据分析, 数据收集</h3>
        <div className={styles.imgWrap}>
          <img src={F} alt="H5编辑器, H5制作, H5设计" />
        </div>
      </div>
    </div>
  );
};

export default Help;
