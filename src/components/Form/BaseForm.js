import { Input, Cell, DateSelect, Radio, Select } from 'zarm';
import styles from './baseForm.less';

// 维护表单控件， 提高form渲染性能
const BaseForm = {
  Text: props => {
    const { label, placeholder, onChange } = props;
    return (
      <Cell title={label}>
        <Input clearable type="text" placeholder={placeholder} onChange={onChange} />
      </Cell>
    );
  },
  Textarea: props => {
    const { label, placeholder, onChange } = props;
    return (
      <Cell title={label}>
        <Input
          type="text"
          rows={3}
          autoHeight
          showLength
          placeholder={placeholder}
          onChange={onChange}
        />
      </Cell>
    );
  },
  Number: props => {
    const { label, placeholder, onChange } = props;
    return (
      <Cell title={label}>
        <Input
          type="number"
          rows={3}
          autoHeight
          showLength
          placeholder={placeholder}
          onChange={onChange}
        />
      </Cell>
    );
  },
  MyRadio: props => {
    const { label, options, onChange } = props;
    return (
      <div className={styles.radioWrap}>
        <div className={styles.radioTitle}>{label}</div>
        <Cell>
          <Radio.Group onChange={onChange}>
            {options.map((item, i) => {
              return (
                <Radio value={item.value} key={i} className={styles.radioItem}>
                  {item.label}
                </Radio>
              );
            })}
          </Radio.Group>
        </Cell>
      </div>
    );
  },
  Date: props => {
    const { label, placeholder, onChange } = props;
    return (
      <Cell title={label}>
        <DateSelect
          placeholder={placeholder}
          mode="date"
          min="1949-05-15"
          max="2100-05-15"
          onOk={onChange}
        />
      </Cell>
    );
  },
  MySelect: props => {
    const { label, options, onChange } = props;
    return (
      <Cell title={label}>
        <Select dataSource={options} onOk={onChange} />
      </Cell>
    );
  },
};

export default BaseForm;
