import { useState, useEffect, memo } from 'react';
import classnames from 'classnames';
import Icon from '../Icon';
import styles from './index.less';

interface CardPickerType {
  type: string;
  icons: Array<string>;
  onChange: (v: string) => void;
}

export default memo((props: CardPickerType) => {
  const { type, icons, onChange } = props;

  const [selected, setSelected] = useState(type);

  const handlePicker = v => {
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
            onClick={handlePicker.bind(this, item)}
            key={i}
          >
            <Icon type={item} size={20} />
          </span>
        );
      })}
    </div>
  );
});
