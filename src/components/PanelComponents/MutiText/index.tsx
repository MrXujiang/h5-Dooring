import React, { memo, useState, useEffect } from 'react';
import { Input, Button, Popconfirm } from 'antd';
import { MinusCircleOutlined } from '@ant-design/icons';
import styles from './index.less';
import { TMutiTextDefaultType } from '../FormEditor/types';

type MultiTextProps = {
  onChange?: (v: TMutiTextDefaultType) => void;
  value?: TMutiTextDefaultType;
};

export default memo(function MutiText(props: MultiTextProps) {
  const { value, onChange } = props;
  const [valueList, setValueList] = useState(value || []);
  const handleAdd = () => {
    setValueList(prev => {
      return [...prev, '新增项'];
    });
  };

  const handleDel = (index: number) => {
    setValueList(prev => {
      let newList = prev.filter((_item, i) => i !== index);
      onChange && onChange(newList);
      return newList;
    });
  };

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValueList(prev => {
      let newList = prev.map((item, i) => (i === index ? value : item));
      onChange && onChange(newList);
      return newList;
    });
  };

  useEffect(() => {
    window['currentCates'] = valueList;
    return () => {
      window['currentCates'] = null;
    };
  }, [valueList]);

  return (
    <div className={styles.mutiText}>
      {valueList.length ? (
        valueList.map((item, i) => {
          return (
            <div className={styles.iptWrap} key={i}>
              <Input defaultValue={item} onChange={e => handleChange(i, e)} />
              <Popconfirm
                title="确定要删除吗?"
                onConfirm={() => handleDel(i)}
                placement="leftTop"
                okText="确定"
                cancelText="取消"
              >
                <span className={styles.delBtn}>
                  <MinusCircleOutlined />
                </span>
              </Popconfirm>
            </div>
          );
        })
      ) : (
        <div className={styles.iptWrap}>
          <Input />
        </div>
      )}
      {valueList.length < 3 && (
        <div className={styles.iptWrap}>
          <Button type="primary" onClick={handleAdd}>
            添加项目
          </Button>
        </div>
      )}
    </div>
  );
});
