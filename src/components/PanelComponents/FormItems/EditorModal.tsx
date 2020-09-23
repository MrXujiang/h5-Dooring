import React, { FC, memo, useEffect } from 'react';
import { Form, Select, Input, Modal } from 'antd';
import { baseFormOptionsType } from '../FormEditor/types';

const { Option } = Select;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

interface EditorModalProps {
  item: any;
  onSave: (data: any) => void;
  visible: boolean;
  onCancel: () => void;
}

const EditorModal: FC<EditorModalProps> = props => {
  const { item, onSave, visible, onCancel } = props;

  const onFinish = (values: any) => {
    onSave && onSave(values);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then(values => {
        values.id = item.id;
        onSave && onSave(values);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const [form] = Form.useForm();

  useEffect(() => {
    return () => {
      form.resetFields();
    };
  }, [form, item]);

  return (
    <>
      {!!item && (
        <Modal
          title="编辑表单组件"
          visible={visible}
          onOk={handleOk}
          onCancel={onCancel}
          okText="确定"
          cancelText="取消"
        >
          <Form
            form={form}
            name={`formItem_editor_modal`}
            {...formItemLayout}
            onFinish={onFinish}
            initialValues={item}
          >
            {
              <Form.Item label="类型" name="type" hidden>
                <Input />
              </Form.Item>
            }
            {!!item.label && (
              <Form.Item
                label="字段名"
                name="label"
                rules={[{ required: true, message: '请输入字段名!' }]}
              >
                <Input />
              </Form.Item>
            )}
            {!!item.placeholder && (
              <Form.Item label="提示文本" name="placeholder">
                <Input placeholder="请输入提示文本" />
              </Form.Item>
            )}
            {!!item.options && (
              <Form.Item
                label="选项源"
                name="options"
                rules={[{ required: true, message: '选项不能为空!' }]}
              >
                <Select
                  placeholder="请输入"
                  mode="tags"
                  labelInValue
                  maxTagCount={39}
                  maxTagTextLength={16}
                >
                  {item.options.map((v: baseFormOptionsType, i: number) => {
                    return (
                      <Option value={v.value} key={i}>
                        {v.label}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
            )}
          </Form>
        </Modal>
      )}
    </>
  );
};

export default memo(EditorModal);
