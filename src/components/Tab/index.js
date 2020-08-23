import React, { useEffect, useRef } from 'react';
import { Tabs } from 'zarm';
import styles from './index.less';

const { Panel } = Tabs;

const XTab = (props) => {
  const {
    tabs = ['分类一', '分类二'],
    activeColor,
    color,
    fontSize,
    sourceData = [
      {
        "title": "趣谈小课",
        "desc": "致力于打造优质小课程",
        "link": "xxxxx",
        "type": 0,
        "imgUrl": "http://io.nainor.com/uploads/01_173e15d3493.png"
      },
      {
        "title": "趣谈小课",
        "desc": "致力于打造优质小课程",
        "link": "xxxxx",
        "type": 1,
        "imgUrl": "http://io.nainor.com/uploads/01_173e15d3493.png"
      },
      {
        "title": "趣谈小课",
        "desc": "致力于打造优质小课程",
        "link": "xxxxx",
        "type": 0,
        "imgUrl": "http://io.nainor.com/uploads/01_173e15d3493.png"
      }
    ]
  } = props

  const tabWrapRef = useRef(null)

  useEffect(() => {
    tabWrapRef.current.querySelector('.za-tabs__line').style.backgroundColor = activeColor
  }, [activeColor])

  return <div className={styles.tabWrap} ref={tabWrapRef}>
          <Tabs canSwipe onChange={(i) => { console.log(i); }}>
            {
              tabs.map((item, i) => {
                return <Panel title={item} key={i}>
                          <div className={styles.content}>
                            {
                              sourceData.filter(item => item.type === i).map((item, i) => {
                                return <div className={styles.item} key={i}>
                                  <a className={styles.imgWrap} href={item.link} title={item.desc}>
                                    <img src={item.imgUrl[0] ? item.imgUrl[0].url : 'http://io.nainor.com/uploads/01_173e15d3493.png'} alt={ item.title } />
                                    <div className={styles.title} style={{fontSize, color}}>{ item.title }</div>
                                  </a>
                                </div>
                              })
                            }
                          </div>
                       </Panel>
              })
            }
          </Tabs>
        </div>
};

export default XTab;