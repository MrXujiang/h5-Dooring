import React, { useContext, useState, useEffect, useRef, memo, RefObject } from 'react';
import { Table, Input, Button, Popconfirm, Form, Modal, Upload } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { uuid } from '@/utils/tool';
import XLSX from 'xlsx';
// 下方样式主要为全局样式，暂时不可删
import styles from './index.less';

const EditableContext = React.createContext<any>(null);

interface Item {
  key: string;
  name: string;
  age: string;
  address: string;
}

interface EditableRowProps {
  index: number;
}

const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

interface EditableCellProps {
  title: React.ReactNode;
  editable: boolean;
  children: React.ReactNode;
  dataIndex: string;
  record: any;
  handleSave: (record: Item) => void;
}

const EditableCell: React.FC<EditableCellProps> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const form = useContext(EditableContext);

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({ [dataIndex]: record[dataIndex] });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} 是必填的.`,
          },
        ]}
      >
        <Input
          ref={(inputRef as unknown) as () => RefObject<HTMLInputElement>}
          onPressEnter={save}
          onBlur={save}
        />
      </Form.Item>
    ) : (
      <div className="editable-cell-value-wrap" style={{ paddingRight: 24 }} onClick={toggleEdit}>
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

class EditableTable extends React.Component<any, any> {
  columns: (
    | { title: string; dataIndex: string; width: string; editable: boolean; render?: undefined }
    | {
        title: string;
        dataIndex: string;
        render: (text: string, record: any) => JSX.Element | null;
        width?: undefined;
        editable?: undefined;
      }
  )[];

  constructor(props: any) {
    super(props);
    this.columns = [
      {
        title: '名字',
        dataIndex: 'name',
        width: '180px',
        editable: true,
      },
      {
        title: '值',
        dataIndex: 'value',
        width: '120px',
        editable: true,
      },
      {
        title: '操作',
        dataIndex: 'operation',
        render: (text: string, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
              <Button type="link">删除</Button>
            </Popconfirm>
          ) : null,
      },
    ];

    const dataSource =
      props.data && props.data.map((item: any, i: number) => ({ key: i + '', ...item }));

    this.state = {
      dataSource: dataSource,
      visible: false,
    };
  }

  handleDelete = (key: string) => {
    const dataSource = [...this.state.dataSource];
    const newDataSource = dataSource.filter(item => item.key !== key);
    this.setState({ dataSource: newDataSource });
    this.props.onChange && this.props.onChange(newDataSource);
  };

  handleAdd = () => {
    const { dataSource } = this.state;
    const uid = uuid(8, 10);
    const newData = {
      key: uid,
      name: `dooring ${dataSource.length + 1}`,
      value: 32,
    };
    const newDataSource = [...dataSource, newData];
    this.setState({
      dataSource: newDataSource,
    });
    this.props.onChange && this.props.onChange(newDataSource);
  };

  handleSave = (row: any) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    this.setState({ dataSource: newData });
    this.props.onChange && this.props.onChange(newData);
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    const columns: ColumnsType<any> = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    const _this = this;
    const props = {
      name: 'file',
      // action: '',
      showUploadList: false,
      beforeUpload(file: File, fileList: Array<File>) {
        // 解析并提取excel数据
        let reader = new FileReader();
        reader.onload = function(e: any) {
          let data = e.target.result;
          let workbook = XLSX.read(data, { type: 'binary' });
          let sheetNames = workbook.SheetNames; // 工作表名称集合
          let draftArr: any = {};
          sheetNames.forEach(name => {
            let worksheet = workbook.Sheets[name]; // 只能通过工作表名称来获取指定工作表
            for (let key in worksheet) {
              // v是读取单元格的原始值
              if (key[0] !== '!') {
                if (draftArr[key[0]]) {
                  draftArr[key[0]].push(worksheet[key].v);
                } else {
                  draftArr[key[0]] = [worksheet[key].v];
                }
              }
            }
          });
          let sourceData = Object.values(draftArr).map((item: any, i) => ({
            key: i + '',
            name: item[0],
            value: item[1],
          }));
          _this.setState({
            dataSource: sourceData,
          });
          _this.props.onChange && _this.props.onChange(sourceData);
        };
        reader.readAsBinaryString(file);
        return true;
      },
    };
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          编辑数据源
        </Button>
        <Modal
          title="编辑数据源"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="确定"
          cancelText="取消"
        >
          <Button
            onClick={this.handleAdd}
            type="primary"
            style={{ marginBottom: 16, marginRight: 16 }}
          >
            添加行
          </Button>
          <Upload {...props}>
            <Button type="primary" ghost>
              导入Excel
            </Button>
          </Upload>
          <Table
            components={components}
            rowClassName={() => 'editable-row'}
            bordered
            dataSource={dataSource}
            columns={columns}
            pagination={{ pageSize: 50 }}
            scroll={{ y: 240 }}
          />
        </Modal>
      </div>
    );
  }
}

export default memo(EditableTable);
