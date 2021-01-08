import React, { memo, useState, useRef } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import styles from './index.less';
import { IListConfig } from './schema';
import logo from '@/assets/list.png';

interface ListType extends IListConfig {
  isTpl?: boolean;
}

const List = memo((props: ListType) => {
  const { round, sourceData, isSearch, imgSize, fontSize, color, padding } = props;
  const [data, setData] = useState(sourceData);
  const iptRef: any = useRef(null);
  const handleSearch = () => {
    let keyword = iptRef?.current?.value;
    if (keyword) {
      setData(prev => {
        return prev.filter(
          item => item.title.indexOf(keyword) > -1 || item.desc.indexOf(keyword) > -1,
        );
      });
      return;
    }
    setData(sourceData);
  };
  return props.isTpl ? (
    <div>
      <img style={{ width: '100%' }} src={logo} alt="" />
    </div>
  ) : (
    <div className={styles.list}>
      {isSearch && (
        <div className={styles.searchWrap}>
          <input type="text" ref={iptRef} />
          <span className={styles.searchBtn} onClick={handleSearch}>
            <SearchOutlined />
          </span>
        </div>
      )}
      <div className={styles.sourceList}>
        {data.map((item, i) => {
          return (
            <div className={styles.sourceItem} key={i} style={{ marginBottom: padding + 'px' }}>
              <div className={styles.imgWrap}>
                <img
                  src={item.imgUrl[0] && item.imgUrl[0].url}
                  alt={item.desc}
                  style={{
                    width: parseFloat(imgSize),
                    height: imgSize + 'px',
                    objectFit: 'cover',
                    borderRadius: round,
                  }}
                />
              </div>
              <div className={styles.content}>
                <a
                  className={styles.tit}
                  style={{ fontSize, color }}
                  href={item.link ? item.link : '#'}
                >
                  {item.title}
                  <div
                    className={styles.desc}
                    style={{ fontSize: fontSize * 0.8, color: 'rgba(0,0,0, .3)' }}
                  >
                    {item.desc}
                  </div>
                </a>
              </div>
              <span className={styles.price}>{item.price}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default List;
