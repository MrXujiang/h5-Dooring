import React, { useMemo, useState, useCallback, useRef, useEffect } from 'react';
import { Controlled as CodeMirrorControlled } from 'react-codemirror2';
import { Button, message } from 'antd';
import { saveAs } from 'file-saver';
import Logo from '@/assets/logo.png';
import { isDev, useGetRect } from 'utils/tool';
import { SaveOutlined, DownloadOutlined, RocketOutlined } from '@ant-design/icons';
import { useHotkeys } from 'react-hotkeys-hook';

// 导入样式
import { 
  wrapStyle, 
  headerStyle, 
  logoAreaStyle, 
  logoStyle, 
  logoImgStyle, 
  logoTextStyle, 
  operationBarStyle, 
  contentWrapStyle, 
  codeWrapStyle, 
  previewWrapStyle, 
  iframeStyle 
} from './styles';

// 导入CodeMirror样式和模式
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';

// 定义服务器URL
const serverUrl = isDev ? 'http://localhost:3000' : 'http://localhost:3000';

// 默认HTML内容
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
</html>`;

/**
 * H5-Dooring在线代码编辑器组件
 */
export default function CodeEditor() {
  // 状态管理
  const [htmlContent, setHtmlContent] = useState<string>(defaultHtml);
  const [cursorPosition, setCursorPosition] = useState<{ line: number; ch: number }>({ line: 1, ch: 1 });
  const [isUpdated, setIsUpdated] = useState<boolean>(false);
  const editorRef = useRef<CodeMirror.Editor | null>(null);

  // 获取窗口尺寸
  const rect = useGetRect();

  // 计算高度
  const contentHeight = useMemo(() => {
    const baseHeight = rect.height - 42 - 1; // 减去顶部高度和滚动条防溢出
    return Math.max(baseHeight, 694); // 最小高度为 694
  }, [rect.height]);

  const phoneHeight = 694; // 固定高度，避免大屏幕问题
  const iframeHeight = phoneHeight - 30 - 24; // 上边距 30，上下 padding 各 12

  /**
   * 保存页面到服务器
   * @param content - 可选的HTML内容，如果未提供则使用当前内容
   */
  const savePage = useCallback(async (content?: string) => {
    try {
      const contentToSave = content ?? htmlContent;
      const response = await fetch(`${serverUrl}/dooring/render`, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/html;charset=utf-8',
        },
        body: contentToSave,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      message.success('已保存');
      setIsUpdated(prev => !prev); // 触发重新渲染
    } catch (error) {
      console.error('保存失败:', error);
      message.error('保存失败，请稍后重试');
    }
  }, [htmlContent]);

  /**
   * 下载HTML文件
   */
  const downloadHtml = useCallback(() => {
    try {
      const file = new File([htmlContent], `${Date.now()}.html`, {
        type: 'text/html;charset=utf-8',
      });
      saveAs(file);
      message.success('HTML文件下载成功');
    } catch (error) {
      console.error('下载HTML失败:', error);
      message.error('下载HTML失败，请稍后重试');
    }
  }, [htmlContent]);

  /**
   * 下载CSS文件（从HTML内容中提取CSS）
   */
  const downloadCss = useCallback(() => {
    try {
      // 从HTML中提取CSS内容
      const styleMatch = htmlContent.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
      const cssContent = styleMatch ? styleMatch[1] : '';
      
      const file = new File([cssContent], `${Date.now()}.css`, {
        type: 'text/css;charset=utf-8',
      });
      saveAs(file);
      message.success('CSS文件下载成功');
    } catch (error) {
      console.error('下载CSS失败:', error);
      message.error('下载CSS失败，请稍后重试');
    }
  }, [htmlContent]);

  /**
   * 一键部署功能
   */
  const deployWebsite = useCallback(() => {
    try {
      // 这里应该是实际的部署逻辑
      message.success('部署功能开发中...');
    } catch (error) {
      console.error('部署失败:', error);
      message.error('部署失败，请稍后重试');
    }
  }, []);

  // 快捷键保存
  useHotkeys(
    'ctrl+s',
    (event) => {
      savePage();
      event.preventDefault();
    },
    [savePage]
  );

  /**
   * 处理代码变化
   */
  const handleCodeChange = useCallback(
    (_editor: CodeMirror.Editor, _data: CodeMirror.EditorChange, value: string) => {
      setHtmlContent(value);
    },
    []
  );

  /**
   * 处理光标位置变化
   */
  const handleCursorChange = useCallback(
    (_editor: CodeMirror.Editor, position: CodeMirror.Position) => {
      setCursorPosition(position);
    },
    []
  );

  /**
   * 处理编辑器按键事件
   */
  const handleEditorKeyDown = useCallback(
    (editor: CodeMirror.Editor, event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 's') {
        savePage(editor.getValue());
        event.preventDefault();
      }
    },
    [savePage]
  );

  /**
   * 处理编辑器挂载
   */
  const handleEditorDidMount = useCallback((editor: CodeMirror.Editor) => {
    editorRef.current = editor;
  }, []);

  // CodeMirror 编辑器配置
  const codeMirrorOptions = useMemo(() => ({
    mode: 'xml',
    theme: 'material',
    lineNumbers: true,
    lineWrapping: true,
    autoCloseBrackets: true,
    matchBrackets: true,
    indentUnit: 2,
    tabSize: 2,
    indentWithTabs: false,
  }), []);

  return (
    <div style={wrapStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <div style={logoAreaStyle}>
          <div style={logoStyle} title="Dooring">
            <a href="http://h5.dooring.cn" target="_blank" rel="noopener noreferrer">
              <img src={Logo} alt="Dooring-强大的h5编辑器" style={logoImgStyle} />
            </a>
          </div>
          <div style={logoTextStyle}>| 在线代码编辑器</div>
        </div>
        <div style={operationBarStyle}>
          <Button 
            type="primary" 
            icon={<SaveOutlined />}
            title="保存（ctrl+s）" 
            onClick={savePage} 
            style={{ marginRight: '10px' }}
          >
            保存
          </Button>
          <Button 
            type="primary" 
            icon={<DownloadOutlined />}
            onClick={downloadHtml} 
            style={{ marginRight: '10px' }}
          >
            下载HTML
          </Button>
          <Button 
            type="default" 
            icon={<DownloadOutlined />}
            onClick={downloadCss} 
            style={{ marginRight: '10px' }}
          >
            下载CSS
          </Button>
          <Button 
            type="primary" 
            danger 
            icon={<RocketOutlined />}
            onClick={deployWebsite}
          >
            一键部署
          </Button>
        </div>
      </div>

      {/* 内容区域 */}
      <div style={contentWrapStyle(contentHeight)}>
        {/* 代码编辑器 */}
        <div style={codeWrapStyle(contentHeight)}>
          <CodeMirrorControlled
            value={htmlContent}
            options={codeMirrorOptions}
            onBeforeChange={handleCodeChange}
            onCursor={handleCursorChange}
            onKeyDown={handleEditorKeyDown}
            onReady={handleEditorDidMount}
          />
        </div>

        {/* 预览区域 */}
        <div style={previewWrapStyle(phoneHeight)}>
          <iframe
            title="H5预览"
            src={`${serverUrl}/html?flag=${isUpdated}`}
            style={iframeStyle(iframeHeight)}
            sandbox="allow-same-origin allow-scripts"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

// 声明CodeMirror全局类型
declare global {
  namespace CodeMirror {
    interface Editor {
      getValue(): string;
    }
    interface EditorChange {
      from: Position;
      to: Position;
      text: string[];
      removed: string[];
      origin: string | undefined;
    }
    interface Position {
      line: number;
      ch: number;
    }
  }
}
