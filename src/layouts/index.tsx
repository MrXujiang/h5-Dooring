import React, { useCallback, useState, useEffect } from 'react';
import { library, generateRespones, RenderList, useRegister } from 'chatbot-antd';
import { IRouteComponentProps, history } from 'umi';
import { Button, Modal } from 'antd';
import { CustomerServiceOutlined } from '@ant-design/icons';
import Draggable from 'react-draggable';
import Dooring from '@/assets/dooring.png';
import styles from './index.less';

library.push(
  //语料库，push进去，也可以不用
  {
    text: '我是机器人',
    reg: '你是谁',
  },
  {
    text: (
      <div>
        <a href="https://github.com/MrXujiang">@徐小夕</a>
        <a href="https://github.com/yehuozhili/learnsinglespa">@yehuozhili</a>
      </div>
    ),
    useReg: /(.*?)作者是谁(.*?)/,
  },
);

export default function Layout({ children }: IRouteComponentProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const callb = useCallback((v: RenderList) => {
    setTimeout(() => {
      //使用settimeout 更像机器人回话
      let returnValue = generateRespones(v);
      if (returnValue) {
        //排除null
        setList(prev => [...prev, { isUser: false, text: returnValue }]);
      }
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDeploy = () => {
    window.open('http://h5.dooring.cn/uploads/WechatIMG3_1758e9753e2.jpeg');
  };
  // 注册
  const [render, setList] = useRegister(
    modalOpen,
    callb,
    {
      onOk: () => setModalOpen(false),
      onCancel: () => setModalOpen(false),
      title: 'h5-Dooring机器人客服',
      width: 420,
    },
    {},
    <div>
      welcome!欢迎使用h5-Dooring，你有任何问题，都可以咨询我哦～
      <div style={{ paddingTop: '10px', marginTop: '10px', borderTop: '1px solid #f0f0f0' }}>
        <div>【dooring指南】</div>
        <div>
          <div>
            &nbsp;&nbsp;1.{' '}
            <a href="https://github.com/MrXujiang/h5-Dooring" target="_blank">
              H5-Dooring源码地址
            </a>
          </div>
          <div>
            &nbsp;&nbsp;2.{' '}
            <a href="https://github.com/MrXujiang/h5-Dooring/graphs/contributors" target="_blank">
              贡献者列表
            </a>
          </div>
          <div>
            &nbsp;&nbsp;3. 如果复制/删除组件不生效, 请先点击需要复制/删除组件, 再右键删除/复制
          </div>
          <div style={{ color: 'red' }}>
            &nbsp;&nbsp;4. 如果二维码组件无法扫码, 请适当调小中间图标尺寸
          </div>
          <div style={{ fontSize: '12px' }}>
            &nbsp;&nbsp;5. dooring开源交流群(微信：Mr_xuxiaoxi)
          </div>
          <div style={{ fontSize: '12px', marginTop: '10px' }}>
            &nbsp;&nbsp;
            <Button type="primary" onClick={handleDeploy}>
              私有化部署
            </Button>
          </div>
        </div>
      </div>
    </div>,
  );

  useEffect(() => {
    setInterval(() => {
      const timeout = +localStorage.getItem('tt');
      if (timeout && timeout < Date.now()) {
        localStorage.removeItem('tt');
        Modal.info({
          title: 'Dooring温馨提示',
          content: <div>您的登录已过期, 请点击确认按钮重新登录</div>,
          okText: '确认',
          onOk() {
            localStorage.removeItem('rp');
            localStorage.removeItem('nickname');
            history.push('/login');
          },
        });
      }
    }, 1000 * 15);
  }, []);

  const showVideo = () => {
    Modal.info({
      title: '秒懂H5-Dooring',
      width: 860,
      zIndex: 100000,
      content: (
        <div style={{ height: 380 }}>
          <iframe
            style={{ width: '100%', height: '100%' }}
            src="//player.bilibili.com/player.html?aid=204342673&bvid=BV1jh411k7xs&cid=301889522&page=1"
            scrolling="no"
            border="0"
            frameborder="no"
            framespacing="0"
            allowfullscreen="true"
          >
            {' '}
          </iframe>
        </div>
      ),
      okText: 'GET, 关闭',
      onOk() {},
    });
  };

  const hackCodeStyle =
    window.location.pathname.indexOf('preview') < 0
      ? { height: '100%' }
      : { height: '100%', overflow: 'auto' };
  return (
    <div style={hackCodeStyle}>
      <div
        style={{
          position: 'fixed',
          right: `${modalOpen ? '-100%' : '10px'}`,
          bottom: '16px',
          transition: 'all 0.5s ease-in-out',
          zIndex: 2,
        }}
      >
        <Button
          type="primary"
          style={{ padding: '0 6px' }}
          onClick={() => setModalOpen(!modalOpen)}
        >
          <CustomerServiceOutlined></CustomerServiceOutlined>
        </Button>
      </div>
      {render}
      {children}
      {window.location.pathname.indexOf('editor') > -1 && (
        <Draggable>
          <div className={styles.dragPay}>
            <div className={styles.crouseBtn}>搭建技巧(可拖动)</div>
            <div className={styles.mask} onClick={showVideo}>
              <img src={Dooring} alt="" />
            </div>
          </div>
        </Draggable>
      )}
    </div>
  );
}
