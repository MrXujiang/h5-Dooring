import React, { useMemo } from 'react';
import { Controlled } from 'react-codemirror2';
import { useState } from 'react';
import { Button, message } from 'antd';
import { saveAs } from 'file-saver';
import Logo from '@/assets/logo.png';
import styles from './index.less';
import { isDev, useGetRect } from 'utils/tool';
import { SaveOutlined } from '@ant-design/icons';
import { useHotkeys } from 'react-hotkeys-hook';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

const serverUrl = isDev ? 'http://localhost:3000' : 'http://localhost:3000';

let html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
      html,body {
        margin: 0;
        padding: 0;
      }
      #root {
        padding-top: 200px;
        text-align: center;
      }
      p {
        padding: 0 10px;
        color: #06c;
        line-height: 1.8;
        font-size: 12px;
      }
    </style>
  </head>
  <body>
    <div id="root">
      <img src="http://io.nainor.com/uploads/logo_1747374040f.png" />
      <p>
        (H5编辑器)H5-Dooring是一款功能强大，开源免费的H5可视化页面配置解决方案，
        致力于提供一套简单方便、专业可靠、无限可能的H5落地页最佳实践。
      </p>
    </div>
  </body>
</html>
`;

export default function() {
  const [isUpdate, setUpdate] = useState(false);
  const [cursor, setCursor] = useState<CodeMirror.Position>({ line: 1, ch: 1 });
  const [data, setData] = useState<{ data: string }>({ data: html });
  const handleChange = (
    _editor: CodeMirror.Editor,
    _data: CodeMirror.EditorChange,
    value: string,
  ) => {
    setData({ data: value });
  };
  const fetchPage = useMemo(() => {
    return (v?: string) => {
      let res = v ?? data.data;
      fetch(`${serverUrl}/dooring/render`, { method: 'POST', body: res }).then(() => {
        html = res;
        message.success('已保存');
        setUpdate(prev => !prev);
      });
    };
  }, [data]);
  const downLoadHtml = () => {
    var file = new File([data.data], `${Date.now()}.html`, { type: 'text/html;charset=utf-8' });
    saveAs(file);
  };

  const onCursorChange = (_editor: CodeMirror.Editor, data1: CodeMirror.Position) => {
    const { line, ch } = data1;
    setCursor({ line, ch });
  };

  useHotkeys<HTMLDivElement>(
    'ctrl+s',
    event => {
      fetchPage();
      event.preventDefault();
    },
    [data],
  );

  const editHotKey = useMemo(() => {
    return (editor: CodeMirror.Editor, event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 's') {
        fetchPage(editor.getValue());
        event.preventDefault();
      }
    };
  }, [fetchPage]);

  const CodeMirrorRender = useMemo(() => {
    return (
      <Controlled
        className={styles.codeWrap}
        value={data.data}
        options={{
          mode: 'xml',
          theme: 'material',
          lineNumbers: true,
        }}
        onBeforeChange={handleChange}
        cursor={cursor}
        onCursor={onCursorChange}
        onKeyDown={editHotKey}
      />
    );
  }, [cursor, data.data, editHotKey]);

  const rect = useGetRect();
  const height = useMemo(() => {
    let res = rect.height - 42 - 1; //-1防止差值产生滚动条
    return res < 694 ? 694 : res;
  }, [rect.height]);

  const phoneHeight = useMemo(() => {
    //let res = rect.height - 42 - 30 - 1; //30是其上边距
    //return res < 694 ? 694 : res;
    return 694; //大屏幕过长，维持高度，需要变高另外处理
  }, []);
  const iframeHeight = useMemo(() => {
    return phoneHeight - 30 - 12 - 12; //上边距30 上下padding 12
  }, [phoneHeight]);

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div className={styles.logoArea}>
          <div className={styles.logo} title="Dooring">
            <a href="http://h5.dooring.cn">
              <img src={Logo} alt="Dooring-强大的h5编辑器" />
            </a>
          </div>
          <div className={styles.logoText}>| 在线代码编辑器</div>
        </div>
        <div className={styles.operationBar}>
          <Button
            type="primary"
            title="保存（ctrl+s）"
            onClick={() => fetchPage()}
            style={{ marginRight: '10px' }}
          >
            <SaveOutlined />
          </Button>
          <Button type="primary" onClick={downLoadHtml} style={{ marginRight: '10px' }}>
            下载页面
          </Button>
          <Button danger onClick={downLoadHtml}>
            一键部署
          </Button>
        </div>
      </div>
      <div className={styles.contentWrap} style={{ height: `${height}px`, position: 'relative' }}>
        <div className={styles.codeWrap} style={{ height: `${height}px`, position: 'relative' }}>
          {CodeMirrorRender}
        </div>

        <div className={styles.previewWrap} style={{ height: `${phoneHeight}px` }}>
          <iframe
            title="preview"
            src={`${serverUrl}/html?flag=${isUpdate}`}
            style={{
              width: '100%',
              height: `${iframeHeight}px`,
              margin: 0,
              padding: 0,
              border: 'none',
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
