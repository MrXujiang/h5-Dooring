import React, { FC, memo, useEffect } from 'react';
import { Form, Select, Input, Modal, Button, InputNumber } from 'antd';
import { baseFormOptionsType } from '../types';
import Color from '../Color';

const { Option } = Select;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

interface EditorModalProps {
  item: any;
  onSave: (data: any) => void;
  visible: boolean;
}

const EditorModal: FC<EditorModalProps> = props => {
  const { item, onSave, visible } = props;

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
    if (form && item && visible) {
      form.resetFields();
    }
  }, [form, item, visible]);

  return (
    <>
      {!!item && (
        <Modal
          title="编辑表单组件"
          footer={
            <div>
              <Button type="primary" onClick={() => handleOk()}>
                确定
              </Button>
            </div>
          }
          forceRender
          visible={visible}
          onOk={handleOk}
          closable={false}
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
            {!!item.fontSize && (
              <Form.Item
                label="字体大小"
                name="fontSize"
                rules={[{ required: true, message: '请输入字体大小!' }]}
              >
                <InputNumber min={12} max={30} defaultValue={14} />
              </Form.Item>
            )}
            {!!item.color && (
              <Form.Item
                label="文字颜色"
                name="color"
                rules={[{ required: true, message: '请输入文字颜色!' }]}
              >
                <Color />
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
