import React, { createContext, useCallback, useState } from 'react';
import { library, generateRespones, RenderList, useRegister } from 'chatbot-antd';
import { IRouteComponentProps } from 'umi';
import { Button } from 'antd';
import { CustomerServiceOutlined } from '@ant-design/icons';
import { stat } from 'fs/promises';

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
        <a href="https://github.com/yehuozhili">@yehuozhili</a>
        <a href="https://github.com/zhangjinlongll">@zhangjinlongll</a>
      </div>
    ),
    useReg: /(.*?)作者是谁(.*?)/,
  },
);

export type dooringContextType = 'h5' | 'pc';

export interface IdooringContextType {
  theme: dooringContextType;
  setTheme: Function;
}
export const dooringContext = createContext<IdooringContextType>({
  theme: 'h5',
  setTheme: () => {},
});

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
  // 注册
  const [render, setList] = useRegister(
    modalOpen,
    callb,
    {
      onOk: () => setModalOpen(false),
      onCancel: () => setModalOpen(false),
      title: 'h5-Dooring机器人客服',
      width: 400,
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
          <div style={{ fontSize: '12px' }}>
            &nbsp;&nbsp;3. dooring开源交流群(微信：Mr_xuxiaoxi)
          </div>
        </div>
      </div>
    </div>,
  );

  const [state, setState] = useState<dooringContextType>('h5');

  return (
    <dooringContext.Provider
      value={{
        theme: state,
        setTheme: setState,
      }}
    >
      <div style={{ height: '100%', width: '100%' }}>
        <div
          style={{
            position: 'fixed',
            right: `${modalOpen ? '-100%' : '10px'}`,
            bottom: '80px',
            transition: 'all 0.5s ease-in-out',
            zIndex: 2,
          }}
        >
          <Button type="primary" onClick={() => setModalOpen(!modalOpen)}>
            <CustomerServiceOutlined></CustomerServiceOutlined>
          </Button>
        </div>
        {render}
        {children}
      </div>
    </dooringContext.Provider>
  );
}
