import { Form, Input, Button, Popover } from 'antd';
import React from 'react';
import req from '@/utils/req';
import CodeImg from '@/assets/code.png';
import { history } from 'umi';
import styles from './index.less';

interface FormValues {
  n: string;
  co: string;
}

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 6, span: 16 },
};

const content = (
  <>
    <div style={{ textAlign: 'center' }}>
      <img style={{ width: '180px' }} src={CodeImg} alt="趣谈前端-徐小夕" />
    </div>
    <p style={{ width: '240px' }}>扫描上方二维码，关注【趣谈前端】公众号，回复"登录码" 即可获取</p>
  </>
);

const Login = () => {
  const onFinish = (values: FormValues) => {
    const { n, co } = values;
    req.post('/vip/check', { n, co }).then((res: any) => {
      localStorage.setItem('nickname', res.n);
      localStorage.setItem('h5', JSON.stringify(res.h5));
      history.push('/');
    });
  };

  return (
    <div className={styles.loginWrap}>
      <Form
        {...layout}
        name="login"
        className={styles.formWrap}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <div className={styles.tit}>
          Dooring开放平台
          <span style={{ marginLeft: '20px', fontSize: '18px', color: '#06c' }}>登录</span>
        </div>
        <Form.Item label="用户名" name="n" rules={[{ required: true, message: '请输入用户名!' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="密码" name="co" rules={[{ required: true, message: '请输入密码!' }]}>
          <Input.Password />
        </Form.Item>

        <div style={{ margin: '-16px 0 12px 116px' }}>
          <Popover placement="topLeft" content={content} trigger="click">
            <Button type="link">如何获取登录码？</Button>
          </Popover>
        </div>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" block>
            登录
          </Button>
        </Form.Item>
        <div className={styles.safeWrap}>
          登录后即代表您已经遵循
          <Button type="link">《Dooring平台使用安全声明》</Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
