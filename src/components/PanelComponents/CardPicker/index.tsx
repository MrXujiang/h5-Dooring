import { useState, useEffect, memo } from 'react';
import classnames from 'classnames';
import Icon from '../../BasicShop/BasicComponents/Icon';
import styles from './index.less';
import { IconTypes } from '../../DynamicEngine/schema';
import React from 'react';

interface CardPickerType {
  type: IconTypes;
  icons: Array<IconTypes>;
  onChange?: (v: string) => void;
}

export default memo((props: CardPickerType) => {
  const { type, icons, onChange } = props;
  console.log(type);
  const [selected, setSelected] = useState<IconTypes>(type);

  const handlePicker = (v: IconTypes) => {
    if (onChange) {
      onChange(v);
      return;
    }
    setSelected(v);
  };

  useEffect(() => {
    setSelected(type);
  }, [type]);

  return (
    <div className={styles.pickerWrap}>
      {icons.map((item, i) => {
        return (
          <span
            className={classnames(styles.picker, selected === item ? styles.selected : '')}
            onClick={() => handlePicker(item)}
            key={i}
          >
            <Icon type={item} size={20} />
          </span>
        );
      })}
    </div>
  );
});
