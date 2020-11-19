import { Input, Cell, DateSelect, Radio, Select, Checkbox } from 'zarm';
import styles from './baseForm.less';
import React, { ReactText, useState } from 'react';
import {
  baseFormDateTpl,
  baseFormMyRadioTpl,
  baseFormMyCheckboxTpl,
  baseFormMySelectTpl,
  baseFormNumberTpl,
  baseFormTextAreaTpl,
  baseFormTextTpl,
  baseFormTextTipTpl,
  baseFormUnionType,
} from '@/components/PanelComponents/FormEditor/types';
import { formatTime } from '@/utils/tool';
// 维护表单控件， 提高form渲染性能

type TBaseForm = {
  [key in baseFormUnionType]: any;
};

const BaseForm: TBaseForm = {
  Text: (props: baseFormTextTpl & { onChange: (v: string | undefined) => void }) => {
    const { label, placeholder, onChange } = props;
    return (
      <Cell title={label}>
        <Input clearable type="text" placeholder={placeholder} onChange={onChange} />
      </Cell>
    );
  },
  Textarea: (props: baseFormTextAreaTpl & { onChange: (v: string | undefined) => void }) => {
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
  Number: (props: baseFormNumberTpl & { onChange: (v: string | undefined | number) => void }) => {
    const { label, placeholder, onChange } = props;
    return (
      <Cell title={label}>
        <Input type="number" placeholder={placeholder} onChange={onChange} />
      </Cell>
    );
  },
  MyRadio: (props: baseFormMyRadioTpl & { onChange: (v: string | undefined | number) => void }) => {
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
  MyCheckbox: (
    props: baseFormMyCheckboxTpl & { onChange: (v: Array<ReactText> | undefined) => void },
  ) => {
    const { label, options, onChange } = props;
    return (
      <div className={styles.radioWrap}>
        <div className={styles.radioTitle}>{label}</div>
        <Cell>
          <Checkbox.Group onChange={onChange}>
            {options.map((item, i) => {
              return (
                <Checkbox value={item.value} key={i} className={styles.radioItem}>
                  {item.label}
                </Checkbox>
              );
            })}
          </Checkbox.Group>
        </Cell>
      </div>
    );
  },
  Date: (props: baseFormDateTpl & { onChange: (v: Date) => void }) => {
    const { label, placeholder, onChange } = props;
    const [value, setValue] = useState<any>('');
    const handleChange = (v: any) => {
      setValue(v);
      onChange && onChange(formatTime('yyyy-MM-dd', v));
    };
    return (
      <Cell title={label}>
        <DateSelect
          placeholder={placeholder}
          mode="date"
          min="1949-05-15"
          max="2100-05-15"
          value={value}
          onOk={handleChange}
        />
      </Cell>
    );
  },
  MySelect: (
    props: baseFormMySelectTpl & { onChange: ((v: Record<string, any>) => void) | undefined },
  ) => {
    const { label, options, onChange } = props;
    return (
      <Cell title={label}>
        <Select dataSource={options} onOk={onChange} />
      </Cell>
    );
  },
  MyTextTip: (props: baseFormTextTipTpl) => {
    const { label, color, fontSize } = props;
    return <Cell title={<div style={{ color, fontSize }}>{label}</div>}></Cell>;
  },
};

export default BaseForm;
