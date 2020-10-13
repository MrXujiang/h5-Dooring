import React, { memo, useState } from 'react';
import BaseForm from '../../BasicShop/BasicComponents/Form/BaseForm';
import BasePopoverForm from '../../BasicShop/BasicComponents/Form/BasePopoverForm';
import EditorModal from './EditorModal';
import { MinusCircleFilled, EditFilled, PlusOutlined } from '@ant-design/icons';
import styles from './formItems.less';
import { baseFormUnion, TFormItemsDefaultType } from '../FormEditor/types';
import { uuid } from '@/utils/tool';
import { Button, Popover } from 'antd';

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
  const [isFormTplVisible, setFormTplVisible] = useState(false);

  const handleAddItem = (item: baseFormUnion) => {
    let tpl = formTpl.find(v => v.type === item.type);
    let newData = [...formData, { ...tpl!, id: uuid(6, 10) }];
    setFormData(newData);
    onChange && onChange(newData);
  };

  const handleEditItem = (item: baseFormUnion) => {
    console.log(item);
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
    let newData = formData.map(v => (v.id === data.id ? data : v));
    setFormData(newData);
    onChange && onChange(newData);
    setVisible(false);
  };
  const handleVisibleChange = (visible: boolean) => {
    setFormTplVisible(visible);
  };
  return (
    <div className={styles.formItemWrap}>
      <div className={styles.formTitle}>表单控件</div>
      <div className={styles.editForm}>
        {formData.map((item: baseFormUnion, i: number) => {
          let FormItem = BaseForm[item.type];
          return (
            <div className={styles.formItem} key={i}>
              <div className={styles.disClick}>
                <FormItem {...item} />
              </div>
              <div className={styles.deleteWrap}>
                <span className={styles.operationBtn} onClick={() => handleDelItem(item)}>
                  <MinusCircleFilled />
                </span>
              </div>
              <div className={styles.editWrap}>
                <span className={styles.operationBtn} onClick={() => handleEditItem(item)}>
                  <EditFilled />
                </span>
              </div>
            </div>
          );
        })}
        <div className={styles.formAddWrap}>
          <Popover
            content={
              <>
                <div className={styles.formTpl} style={{ color: 'red' }}>
                  {formTpl.map((item, i) => {
                    let FormItem = BasePopoverForm[item.type];
                    return (
                      <div className={styles.formItem} key={i} onClick={() => handleAddItem(item)}>
                        <div
                          className={styles.disClick}
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'row',
                            marginTop: '10px',
                          }}
                        >
                          <FormItem {...item} />
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* <a style={{color: 'red'}} onClick={() => setFormTplVisible(false)}>Close</a> */}
              </>
            }
            color="#4A4A4A"
            overlayStyle={{ width: '200px' }}
            // title="表单模板"
            trigger="click"
            placement="left"
            visible={isFormTplVisible}
            autoAdjustOverflow
            onVisibleChange={handleVisibleChange}
          >
            <Button block icon={<PlusOutlined />}>
              添加
            </Button>
          </Popover>
        </div>
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
