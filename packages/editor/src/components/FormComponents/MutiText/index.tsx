import React, { memo, useEffect } from 'react';
import { Input, Button, Popconfirm } from 'antd';
import { MinusCircleFilled } from '@ant-design/icons';
import styles from './index.less';
import { TMutiTextDefaultType } from '../types';

type MultiTextProps = {
  onChange?: (v: TMutiTextDefaultType) => void;
  value?: TMutiTextDefaultType;
};

export default memo(function MutiText(props: MultiTextProps) {
  const { value, onChange } = props;
  const handleAdd = () => {
    onChange && onChange([...value!, '新增项目']);
  };

  const handleDel = (index: number) => {
    let newList = value!.filter((_item, i) => i !== index);
    onChange && onChange(newList);
  };

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    let newList = value!.map((item, i) => (i === index ? e.target.value : item));
    onChange && onChange(newList);
  };
  useEffect(() => {
    window['currentCates'] = value!;
    return () => {
      window['currentCates'] = null;
    };
  }, [value]);

  return (
    <div className={styles.mutiText}>
      {value && value.length ? (
        value!.map((item, i) => {
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
                  <MinusCircleFilled />
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
      {value && value.length < 3 && (
        <div className={styles.iptWrap}>
          <Button block onClick={handleAdd}>
            添加项目
          </Button>
        </div>
      )}
    </div>
  );
});
