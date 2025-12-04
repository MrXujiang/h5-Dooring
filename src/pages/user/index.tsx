import React, { useMemo, useState, useCallback, useEffect } from "react";
import { Button, message, Table, Space, Tag, Input, Modal, Form, Select } from "antd";
import { SearchOutlined, PlusOutlined, EditOutlined, DeleteOutlined, SaveOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import styles from "./index.module.less";

const { Search } = Input;
const { Option } = Select;

interface UserData {
  id: string;
  username: string;
  email: string;
  phone: string;
  status: "active" | "inactive" | "suspended";
  createTime: string;
  lastLoginTime: string;
}

const defaultUsers: UserData[] = [
  {
    id: "1",
    username: "admin",
    email: "admin@example.com",
    phone: "13800138000",
    status: "active",
    createTime: "2024-01-01 10:00:00",
    lastLoginTime: "2024-01-15 14:30:00",
  },
  {
    id: "2",
    username: "user001",
    email: "user001@example.com",
    phone: "13800138001",
    status: "active",
    createTime: "2024-01-02 11:00:00",
    lastLoginTime: "2024-01-14 09:20:00",
  },
  {
    id: "3",
    username: "user002",
    email: "user002@example.com",
    phone: "13800138002",
    status: "inactive",
    createTime: "2024-01-03 12:00:00",
    lastLoginTime: "2024-01-10 16:45:00",
  },
];

export default function UserPage() {
  const [users, setUsers] = useState<UserData[]>(defaultUsers);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState<UserData | null>(null);
  const [form] = Form.useForm();

  // 过滤用户列表
  const filteredUsers = useMemo(() => {
    if (!searchText) return users;
    return users.filter(
      (user) =>
        user.username.toLowerCase().includes(searchText.toLowerCase()) ||
        user.email.toLowerCase().includes(searchText.toLowerCase()) ||
        user.phone.includes(searchText)
    );
  }, [users, searchText]);

  // 表格列定义
  const columns: ColumnsType<UserData> = useMemo(
    () => [
      {
        title: "用户名",
        dataIndex: "username",
        key: "username",
        width: 150,
      },
      {
        title: "邮箱",
        dataIndex: "email",
        key: "email",
        width: 200,
      },
      {
        title: "手机号",
        dataIndex: "phone",
        key: "phone",
        width: 150,
      },
      {
        title: "状态",
        dataIndex: "status",
        key: "status",
        width: 120,
        render: (status: string) => {
          const statusMap = {
            active: { color: "green", text: "活跃" },
            inactive: { color: "default", text: "未激活" },
            suspended: { color: "red", text: "已暂停" },
          };
          const statusInfo = statusMap[status as keyof typeof statusMap] || statusMap.inactive;
          return <Tag color={statusInfo.color}>{statusInfo.text}</Tag>;
        },
      },
      {
        title: "创建时间",
        dataIndex: "createTime",
        key: "createTime",
        width: 180,
      },
      {
        title: "最后登录",
        dataIndex: "lastLoginTime",
        key: "lastLoginTime",
        width: 180,
      },
      {
        title: "操作",
        key: "action",
        width: 200,
        fixed: "right",
        render: (_, record) => (
          <Space size="middle">
            <Button
              type="link"
              icon={<EditOutlined />}
              onClick={() => handleEdit(record)}
            >
              编辑
            </Button>
            <Button
              type="link"
              danger
              icon={<DeleteOutlined />}
              onClick={() => handleDelete(record.id)}
            >
              删除
            </Button>
          </Space>
        ),
      },
    ],
    []
  );

  // 编辑用户
  const handleEdit = useCallback((user: UserData) => {
    setEditingUser(user);
    form.setFieldsValue(user);
    setIsModalVisible(true);
  }, [form]);

  // 删除用户
  const handleDelete = useCallback((id: string) => {
    Modal.confirm({
      title: "确认删除",
      content: "确定要删除这个用户吗？",
      onOk: () => {
        setUsers((prev) => prev.filter((user) => user.id !== id));
        message.success("删除成功");
      },
    });
  }, []);

  // 保存用户
  const handleSave = useCallback(async () => {
    try {
      const values = await form.validateFields();
      if (editingUser) {
        // 更新用户
        setUsers((prev) =>
          prev.map((user) =>
            user.id === editingUser.id ? { ...user, ...values } : user
          )
        );
        message.success("更新成功");
      } else {
        // 新增用户
        const newUser: UserData = {
          id: Date.now().toString(),
          ...values,
          createTime: new Date().toLocaleString("zh-CN"),
          lastLoginTime: "-",
        };
        setUsers((prev) => [...prev, newUser]);
        message.success("创建成功");
      }
      setIsModalVisible(false);
      setEditingUser(null);
      form.resetFields();
    } catch (error) {
      console.error("表单验证失败:", error);
    }
  }, [editingUser, form]);

  // 取消编辑
  const handleCancel = useCallback(() => {
    setIsModalVisible(false);
    setEditingUser(null);
    form.resetFields();
  }, [form]);

  // 批量删除
  const handleBatchDelete = useCallback(() => {
    if (selectedRowKeys.length === 0) {
      message.warning("请选择要删除的用户");
      return;
    }
    Modal.confirm({
      title: "确认删除",
      content: `确定要删除选中的 ${selectedRowKeys.length} 个用户吗？`,
      onOk: () => {
        setUsers((prev) => prev.filter((user) => !selectedRowKeys.includes(user.id)));
        setSelectedRowKeys([]);
        message.success("删除成功");
      },
    });
  }, [selectedRowKeys]);

  // 行选择配置
  const rowSelection = {
    selectedRowKeys,
    onChange: (keys: React.Key[]) => {
      setSelectedRowKeys(keys);
    },
  };

  return (
    <div className={styles.wrap}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.titleArea}>
          <h2 className={styles.title}>用户管理</h2>
          <p className={styles.description}>可管理所有用户的账号信息</p>
        </div>
        <div className={styles.operationBar}>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => {
              setEditingUser(null);
              form.resetFields();
              setIsModalVisible(true);
            }}
            style={{ marginRight: "10px" }}
          >
            新增用户
          </Button>
          <Button
            danger
            onClick={handleBatchDelete}
            disabled={selectedRowKeys.length === 0}
          >
            批量删除
          </Button>
        </div>
      </div>

      {/* 搜索栏 */}
      <div className={styles.searchBar}>
        <Search
          placeholder="搜索用户名、邮箱或手机号"
          allowClear
          enterButton={<SearchOutlined />}
          size="large"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ width: 400 }}
        />
      </div>

      {/* 表格区域 */}
      <div className={styles.tableWrap}>
        <Table
          columns={columns}
          dataSource={filteredUsers}
          rowKey="id"
          loading={loading}
          rowSelection={rowSelection}
          scroll={{ x: 1200 }}
          pagination={{
            total: filteredUsers.length,
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total) => `共 ${total} 条`,
          }}
        />
      </div>

      {/* 编辑/新增弹窗 */}
      <Modal
        title={editingUser ? "编辑用户" : "新增用户"}
        open={isModalVisible}
        onOk={handleSave}
        onCancel={handleCancel}
        okText="保存"
        cancelText="取消"
        width={600}
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            status: "active",
          }}
        >
          <Form.Item
            name="username"
            label="用户名"
            rules={[{ required: true, message: "请输入用户名" }]}
          >
            <Input placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item
            name="email"
            label="邮箱"
            rules={[
              { required: true, message: "请输入邮箱" },
              { type: "email", message: "请输入有效的邮箱地址" },
            ]}
          >
            <Input placeholder="请输入邮箱" />
          </Form.Item>
          <Form.Item
            name="phone"
            label="手机号"
            rules={[
              { required: true, message: "请输入手机号" },
              { pattern: /^1[3-9]\d{9}$/, message: "请输入有效的手机号" },
            ]}
          >
            <Input placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item
            name="status"
            label="状态"
            rules={[{ required: true, message: "请选择状态" }]}
          >
            <Select placeholder="请选择状态">
              <Option value="active">活跃</Option>
              <Option value="inactive">未激活</Option>
              <Option value="suspended">已暂停</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

