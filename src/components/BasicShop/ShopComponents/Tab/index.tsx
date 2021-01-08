import React, { useEffect, useRef } from 'react';
import { Tabs } from 'zarm';
import styles from './index.less';
import { ITabConfig } from './schema';
import logo from '@/assets/tab.png';

interface TabType extends ITabConfig {
  isTpl?: boolean;
}

const { Panel } = Tabs;

const XTab = (props: TabType) => {
  const { tabs = ['分类一', '分类二'], activeColor, color, fontSize, sourceData, isTpl } = props;

  const tabWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tabWrapRef.current) {
      let res = tabWrapRef.current.querySelector('.za-tabs__line') as HTMLElement;
      if (res) {
        res.style.backgroundColor = activeColor;
      }
    }
  }, [activeColor]);

  return isTpl ? (
    <div>
      <img style={{ width: '100%' }} src={logo} alt=""></img>
    </div>
  ) : (
    <div className={styles.tabWrap} ref={tabWrapRef}>
      <Tabs
        scrollThreshold={3}
        onChange={i => {
          console.log(i);
        }}
      >
        {tabs.map((item, i) => {
          return (
            <Panel title={item} key={i}>
              <div className={styles.content}>
                {sourceData
                  .filter(item => item.type === i)
                  .map((item, i) => {
                    return (
                      <div className={styles.item} key={i}>
                        <a className={styles.imgWrap} href={item.link} title={item.desc}>
                          <img src={item.imgUrl[0] && item.imgUrl[0].url} alt={item.title} />
                          <div className={styles.title} style={{ fontSize, color }}>
                            {item.title}
                          </div>
                        </a>
                        <span className={styles.price}> {item.price} </span>
                      </div>
                    );
                  })}
              </div>
            </Panel>
          );
        })}
      </Tabs>
    </div>
  );
};

export default XTab;
