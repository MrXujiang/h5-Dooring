import React, { memo, RefObject, useCallback, useEffect, useState } from 'react';
import BaseForm from '@/materials/base/Form/BaseForm';
import BasePopoverForm from '@/materials/base/Form/BasePopoverForm';
import EditorModal from './EditorModal';
import { MinusCircleFilled, EditFilled, PlusOutlined } from '@ant-design/icons';
import styles from './formItems.less';
import { baseFormUnion, TFormItemsDefaultType } from '../types';
import { uuid } from '@/utils/tool';
import { Button } from 'antd';
import MyPopover from 'yh-react-popover';
// import { Popconfirm } from 'antd';

const formTpl: TFormItemsDefaultType = [
  {
    id: '1',
    type: 'Text',
    label: '文本框',
    placeholder: '请输入文本',
  },
  {
    id: '2',
    type: 'Textarea',
    label: '长文本框',
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
  {
    id: '7',
    type: 'MyTextTip',
    label: '纯文本',
    fontSize: 12,
    color: 'rgba(0,0,0,1)',
  },
];

interface FormItemsProps {
  formList?: TFormItemsDefaultType;
  onChange?: (v: TFormItemsDefaultType) => void;
  data: any;
  rightPannelRef: RefObject<HTMLDivElement>;
}

const FormItems = (props: FormItemsProps) => {
  const { formList, onChange, rightPannelRef } = props;
  const [formData, setFormData] = useState<TFormItemsDefaultType>(formList || []);
  const [visible, setVisible] = useState(false);
  const [curItem, setCurItem] = useState<baseFormUnion>();
  const [force, setforce] = useState<{ force: Function }>({
    force: () => {},
  });

  const handleAddItem = (item: baseFormUnion) => {
    let tpl = formTpl.find(v => v.type === item.type);
    let newData = [...formData, { ...tpl!, id: uuid(6, 10) }];
    setFormData(newData);
    onChange && onChange(newData);
    force.force();
  };

  const handleEditItem = (item: baseFormUnion) => {
    setVisible(true);
    setCurItem(item);
  };

  const handleDelItem = (item: baseFormUnion) => {
    let newData = formData.filter(v => v.id !== item.id);
    setFormData(newData);
    onChange && onChange(newData);
  };

  const handleSaveItem = (data: baseFormUnion) => {
    let newData = formData.map(v => (v.id === data.id ? data : v));
    setFormData(newData);
    onChange && onChange(newData);
    setVisible(false);
  };

  const callback = useCallback((v: Function) => {
    console.log(v);
    setforce({ force: v });
  }, []);

  useEffect(() => {
    let listenner: (e: Event) => void;
    if (rightPannelRef.current) {
      listenner = () => {
        force.force();
      };
      rightPannelRef.current.addEventListener('scroll', listenner);
    }
    return () => {
      if (rightPannelRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        rightPannelRef.current.removeEventListener('scroll', listenner);
      }
    };
  }, [force, rightPannelRef]);

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
          <MyPopover
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
            directions={'LB'}
            innerConstDomStyle={{ display: 'block' }}
            constDomStyle={{ display: 'block' }}
            callback={callback}
          >
            <Button style={{ width: '100%' }} block icon={<PlusOutlined />}>
              添加
            </Button>
          </MyPopover>
        </div>
      </div>

      <EditorModal item={curItem} onSave={handleSaveItem} visible={visible} />
    </div>
  );
};

export default memo(FormItems);
