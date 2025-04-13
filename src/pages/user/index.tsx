import React, { useMemo, useState, useCallback } from "react";
import { Controlled } from "react-codemirror2";
import { Button, message } from "antd";
import { saveAs } from "file-saver";
import Logo from "@/assets/logo.png";
import styles from "./index.less";
import { isDev, useGetRect } from "utils/tool";
import { SaveOutlined } from "@ant-design/icons";
import { useHotkeys } from "react-hotkeys-hook";
require("codemirror/mode/xml/xml");
require("codemirror/mode/javascript/javascript");

const serverUrl = isDev ? "http://localhost:3000" : "http://localhost:3000";

const defaultHtml = `<!DOCTYPE html>
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

export default function CodeEditor() {
  const [htmlContent, setHtmlContent] = useState(defaultHtml);
  const [cursorPosition, setCursorPosition] = useState({ line: 1, ch: 1 });
  const [isUpdated, setIsUpdated] = useState(false);

  const rect = useGetRect();

  // 计算高度
  const contentHeight = useMemo(() => {
    const baseHeight = rect.height - 42 - 1; // 减去顶部高度和滚动条防溢出
    return Math.max(baseHeight, 694); // 最小高度为 694
  }, [rect.height]);

  const phoneHeight = 694; // 固定高度，避免大屏幕问题
  const iframeHeight = phoneHeight - 30 - 24; // 上边距 30，上下 padding 各 12

  // 保存页面
  const savePage = useCallback(
    (content?: string) => {
      const contentToSave = content ?? htmlContent;
      fetch(`${serverUrl}/dooring/render`, {
        method: "POST",
        body: contentToSave,
      }).then(() => {
        message.success("已保存");
        setIsUpdated((prev) => !prev); // 触发重新渲染
      });
    },
    [htmlContent]
  );

  // 下载 HTML 文件
  const downloadHtml = useCallback(() => {
    const file = new File([htmlContent], `${Date.now()}.html`, {
      type: "text/html;charset=utf-8",
    });
    saveAs(file);
  }, [htmlContent]);

  // 快捷键保存
  useHotkeys(
    "ctrl+s",
    (event) => {
      savePage();
      event.preventDefault();
    },
    [savePage]
  );

  // CodeMirror 编辑器事件处理
  const handleCodeChange = (
    _editor: CodeMirror.Editor,
    _data: CodeMirror.EditorChange,
    value: string
  ) => {
    setHtmlContent(value);
  };

  const handleCursorChange = (
    _editor: CodeMirror.Editor,
    position: CodeMirror.Position
  ) => {
    setCursorPosition(position);
  };

  const handleEditorKeyDown = (editor: CodeMirror.Editor, event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === "s") {
      savePage(editor.getValue());
      event.preventDefault();
    }
  };

  // CodeMirror 渲染
  const codeMirrorRender = useMemo(() => (
    <Controlled
      className={styles.codeWrap}
      value={htmlContent}
      options={{
        mode: "xml",
        theme: "material",
        lineNumbers: true,
      }}
      onBeforeChange={handleCodeChange}
      onCursor={handleCursorChange}
      onKeyDown={handleEditorKeyDown}
    />
  ), [htmlContent]);

  return (
    <div className={styles.wrap}>
      {/* Header */}
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
          <Button type="primary" title="保存（ctrl+s）" onClick={savePage} style={{ marginRight: "10px" }}>
            <SaveOutlined />
          </Button>
          <Button type="primary" onClick={downloadHtml} style={{ marginRight: "10px" }}>
            下载页面
          </Button>
          <Button danger onClick={downloadHtml}>
            一键部署
          </Button>
        </div>
      </div>

      {/* 内容区域 */}
      <div className={styles.contentWrap} style={{ height: `${contentHeight}px`, position: "relative" }}>
        {/* 代码编辑器 */}
        <div className={styles.codeWrap} style={{ height: `${contentHeight}px`, position: "relative" }}>
          {codeMirrorRender}
        </div>

        {/* 预览区域 */}
        <div className={styles.previewWrap} style={{ height: `${phoneHeight}px` }}>
          <iframe
            title="preview"
            src={`${serverUrl}/html?flag=${isUpdated}`}
            style={{
              width: "100%",
              height: `${iframeHeight}px`,
              margin: 0,
              padding: 0,
              border: "none",
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}