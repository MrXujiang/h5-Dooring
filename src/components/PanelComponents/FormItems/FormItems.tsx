import React, { memo, useState } from 'react';
import BaseForm from '../../BasicShop/BasicComponents/Form/BaseForm';
import EditorModal from './EditorModal';
import { EditOutlined, MinusCircleOutlined } from '@ant-design/icons';
import styles from './formItems.less';
import { baseFormUnion, TFormItemsDefaultType } from '../FormEditor/types';
import { uuid } from '@/utils/tool';

// import { Popconfirm } from 'antd';

const formTpl: TFormItemsDefaultType = [
  {
    id: '1',
    type: 'Text',
    label: '文本',
    placeholder: '请输入文本',
  },
  {
    id: '2',
    type: 'Textarea',
    label: '长文本',
    placeholder: '请输入长文本请输入长文本',
  },
  {
    id: '3',
    type: 'Number',
    label: '数值',
    placeholder: ' 请输入数值',
  },
  {
    id: '4',
    type: 'MyRadio',
    label: '单选框',
    options: [
      { label: '选项一', value: '1' },
      { label: '选项二', value: '2' },
    ],
  },
  {
    id: '5',
    type: 'MySelect',
    label: '下拉选择框',
    options: [
      { label: '选项一', value: '1' },
      { label: '选项二', value: '2' },
      { label: '选项三', value: '3' },
    ],
  },
  {
    id: '6',
    type: 'Date',
    label: '日期框',
    placeholder: '',
  },
];

interface FormItemsProps {
  formList?: TFormItemsDefaultType;
  onChange?: (v: TFormItemsDefaultType) => void;
  data: any;
}

const FormItems = (props: FormItemsProps) => {
  const { formList, onChange } = props;
  const [formData, setFormData] = useState<TFormItemsDefaultType>(formList || []);
  const [visible, setVisible] = useState(false);
  const [curItem, setCurItem] = useState<baseFormUnion>();

  const handleAddItem = (item: baseFormUnion) => {
    let tpl = formTpl.find(v => v.type === item.type);
    let newData = [...formData, { ...tpl!, id: uuid(6, 10) }];
    setFormData(newData);
    onChange && onChange(newData);
  };

  const handleEditItem = (item: baseFormUnion) => {
    setVisible(true);
    setCurItem(item);
  };

  const handleDelItem = (item: baseFormUnion) => {
    let newData = formData.filter(v => v.type !== item.type);
    setFormData(newData);
    onChange && onChange(newData);
  };

  const handleCloseModal = () => {
    setVisible(false);
  };

  const handleSaveItem = (data: baseFormUnion) => {
    let newData = formData.map(v => (v.type === data.type ? data : v));
    setFormData(newData);
    onChange && onChange(newData);
    setVisible(false);
  };
  return (
    <div className={styles.formItemWrap}>
      <div className={styles.editForm}>
        {formData.map((item: baseFormUnion, i: number) => {
          let FormItem = BaseForm[item.type];
          return (
            <div className={styles.formItem} key={i}>
              <div className={styles.disClick}>
                <FormItem {...item} />
              </div>
              <div className={styles.operationWrap}>
                <span className={styles.operationBtn} onClick={handleEditItem.bind(this, item)}>
                  <EditOutlined />
                </span>
                <span className={styles.operationBtn} onClick={handleDelItem.bind(this, item)}>
                  <MinusCircleOutlined />
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.formTpl}>
        <h4>表单模版</h4>
        {formTpl.map((item, i) => {
          let FormItem = BaseForm[item.type];
          return (
            <div className={styles.formItem} key={i}>
              <div className={styles.disClick}>
                <FormItem {...item} />
              </div>
              <span className={styles.addBtn} onClick={handleAddItem.bind(this, item)}>
                添加
              </span>
            </div>
          );
        })}
      </div>
      <EditorModal
        item={curItem}
        onSave={handleSaveItem}
        visible={visible}
        onCancel={handleCloseModal}
      />
    </div>
  );
};

export default memo(FormItems);
