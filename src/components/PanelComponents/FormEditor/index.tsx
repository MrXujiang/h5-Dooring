import React, { memo, useEffect, useMemo } from 'react';
import { Form, Select, InputNumber, Input, Switch, Radio, Button } from 'antd';
import Upload from '../Upload';
import DataList from '../DataList';
import MutiText from '../MutiText';
import Color from '../Color';
import CardPicker from '../CardPicker';
import Table from '../Table';
import { Store } from 'antd/lib/form/interface';
import FormItems from '../FormItems';
// import styles from './index.less';
const normFile = (e: any) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    //待修改
    return e;
  }
  return e && e.fileList;
};

const { Option } = Select;
const { TextArea } = Input;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};

interface FormEditorProps {
  uid: string;
  onSave: Function;
  onDel: Function;
  defaultValue: { [key: string]: any };
  config: Array<any>;
}

const FormEditor = (props: FormEditorProps) => {
  const { config, defaultValue, onSave, onDel, uid } = props;
  const onFinish = (values: Store) => {
    onSave && onSave(values);
  };

  const handleDel = () => {
    onDel && onDel(uid);
  };

  const [form] = Form.useForm();

  useEffect(() => {
    return () => {
      form.resetFields();
    };
  }, [defaultValue, form]);
  return (
    <Form
      form={form}
      name={`form_editor`}
      {...formItemLayout}
      onFinish={onFinish}
      initialValues={defaultValue}
    >
      {config.map((item, i) => {
        return (
          <React.Fragment key={i}>
            {item.type === 'Number' && (
              <Form.Item label={item.name} name={item.key}>
                <InputNumber max={item.range && item.range[1]} />
              </Form.Item>
            )}
            {item.type === 'Text' && (
              <Form.Item label={item.name} name={item.key}>
                <Input />
              </Form.Item>
            )}
            {item.type === 'TextArea' && (
              <Form.Item label={item.name} name={item.key}>
                <TextArea rows={4} />
              </Form.Item>
            )}
            {item.type === 'DataList' && (
              <Form.Item label={item.name} name={item.key}>
                <DataList />
              </Form.Item>
            )}
            {item.type === 'Color' && (
              <Form.Item label={item.name} name={item.key}>
                <Color />
              </Form.Item>
            )}
            {item.type === 'MutiText' && (
              <Form.Item label={item.name} name={item.key}>
                <MutiText />
              </Form.Item>
            )}
            {item.type === 'Select' && (
              <Form.Item label={item.name} name={item.key}>
                <Select placeholder="请选择">
                  {item.range.map((v: any, i: number) => {
                    return (
                      <Option value={v.key} key={i}>
                        {v.text}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
            )}
            {item.type === 'Radio' && (
              <Form.Item label={item.name} name={item.key}>
                <Radio.Group>
                  {item.range.map((v: any, i: number) => {
                    return (
                      <Radio value={v.key} key={i}>
                        {v.text}
                      </Radio>
                    );
                  })}
                </Radio.Group>
              </Form.Item>
            )}
            {item.type === 'Switch' && (
              <Form.Item label={item.name} name={item.key} valuePropName="checked">
                <Switch />
              </Form.Item>
            )}
            {item.type === 'Upload' && (
              <Form.Item
                label={item.name}
                name={item.key}
                valuePropName="fileList"
                getValueFromEvent={normFile}
              >
                <Upload cropRate={item.cropRate} isCrop={item.isCrop} />
              </Form.Item>
            )}
            {item.type === 'CardPicker' && (
              <Form.Item label={item.name} name={item.key} valuePropName="type">
                <CardPicker icons={item.icons} type={defaultValue['type']} />
              </Form.Item>
            )}
            {item.type === 'Table' && (
              <Form.Item label={item.name} name={item.key} valuePropName="data">
                <Table data={item.data} />
              </Form.Item>
            )}
            {item.type === 'FormItems' && (
              <Form.Item label={item.name} name={item.key} valuePropName="formList">
                <FormItems data={item.data} />
              </Form.Item>
            )}
          </React.Fragment>
        );
      })}
      <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
        <Button type="primary" htmlType="submit">
          保存
        </Button>
        <Button danger style={{ marginLeft: '20px' }} onClick={handleDel}>
          删除
        </Button>
      </Form.Item>
    </Form>
  );
};

export default memo(FormEditor);
