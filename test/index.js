import { UnControlled as CodeMirror } from 'react-codemirror2';
import { useState, useEffect } from 'react';
import { Button } from 'antd';
import { saveAs } from 'file-saver';
import styles from './index.css';

require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

let timer = null;

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
  const [cursor, setCursor] = useState({ line: 1, cn: 1 });

  const handleChange = (editor, data, value) => {
    // codeStr = value
    fetchPage(value);
  };

  const fetchPage = v => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fetch('http://localhost:80/dooring/render', { method: 'POST', body: v }).then(res => {
        html = v;
        setUpdate(prev => !prev);
      });
    }, 1000);
  };

  const downLoadHtml = () => {
    var file = new File([html], `${Date.now()}.html`, { type: 'text/html;charset=utf-8' });
    saveAs(file);
  };

  const onCursorChange = (editor, data) => {
    const { line, ch } = data;
    setCursor({ line, ch });
  };

  useEffect(() => {
    fetch('http://localhost:80/dooring/render', { method: 'POST', body: html }).then(res => {
      setUpdate(prev => !prev);
    });
  }, []);
  return (
    <div className={styles.wrap}>
      <div className={styles.codeWrap}>
        <CodeMirror
          className={styles.codeWrap}
          value={html}
          options={{
            mode: 'xml',
            theme: 'material',
            lineNumbers: true,
          }}
          onChange={handleChange}
          cursor={cursor}
          onCursor={onCursorChange}
        />
        <div className={styles.operationBar}>
          <Button type="primary" onClick={downLoadHtml} style={{ marginRight: '10px' }}>
            下载页面
          </Button>
          <Button danger onClick={downLoadHtml}>
            一键部署
          </Button>
        </div>
      </div>

      <div className={styles.previewWrap}>
        <iframe
          src={`http://localhost:80/html?flag=${isUpdate}`}
          style={{ width: '100%', height: '100%', margin: 0, padding: 0, border: 'none' }}
        ></iframe>
      </div>
    </div>
  );
}
