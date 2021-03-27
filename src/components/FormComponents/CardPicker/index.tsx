import { useState, useEffect, memo } from 'react';
import classnames from 'classnames';
import Icon from '@/materials/base/Icon';
import styles from './index.less';
import React from 'react';
import { IconTypes } from '@/materials/base/Icon/schema';
import { ICardPickerConfigType } from '../types';

interface CardPickerType extends Omit<ICardPickerConfigType<IconTypes>, 'type' | 'key' | 'name'> {
  onChange?: (v: string) => void;
  type: IconTypes;
}

export default memo((props: CardPickerType) => {
  const { type, icons, onChange } = props;
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
            <Icon type={item} size={20} color={'#4091f7'} spin={false} />
          </span>
        );
      })}
    </div>
  );
});
