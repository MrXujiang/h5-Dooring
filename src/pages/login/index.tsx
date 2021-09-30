import { Form, Input, Button, Popover, message } from 'antd';
import React, { useState } from 'react';
import req from '@/utils/req';
import { history } from 'umi';
import { Vertify } from '@alex_xu/react-slider-vertify';
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
      <img
        style={{ width: '180px' }}
        src="http://cdn.dooring.cn/dr/qtqd_code.png"
        alt="趣谈前端-徐小夕"
      />
    </div>
    <p style={{ width: '240px' }}>扫描上方二维码，关注【趣谈前端】公众号，回复"登录码" 即可获取</p>
  </>
);

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [isVertify, setVertify] = useState(false);
  const onFinish = (values: FormValues) => {
    if (!isVertify) {
      setVisible(true);
      return;
    }
    const { n, co } = values;
    req
      .post('/vip/check', { n, co })
      .then((res: any) => {
        localStorage.setItem('nickname', res.n);
        localStorage.setItem('h5', JSON.stringify(res.h5));
        history.push('/');
      })
      .catch(err => {
        // 模拟, 需要上真实验证接口
        localStorage.setItem('nickname', 'test');
        localStorage.setItem('h5', JSON.stringify([]));
        history.push('/');
      });
  };

  const handleSuccess = () => {
    message.success('验证成功', 1, () => {
      setVisible(false);
      setVertify(true);
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

        <div style={{ margin: '-16px 0 12px 76px' }}>
          <Vertify width={330} height={160} visible={visible} l={36} onSuccess={handleSuccess} />
        </div>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" block>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
