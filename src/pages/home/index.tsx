import React from "react";
import { message, Dropdown, Button } from "antd";
import { history } from "umi";
import {
  MobileOutlined,
  ConsoleSqlOutlined,
  CodeOutlined,
  RobotOutlined,
  FileImageOutlined
} from "@ant-design/icons";
import Zan from "@/components/Zan";
import styles from "./index.less";

const Home = () => {
  const handleGo = (type: string) => {
    if (type === "H5") {
      history.push("/editor?tid=123456");
    } else if (type === "Doc") {
      window.open("http://doc.dooring.vip");
    } else if (type === "mitu") {
      window.open("https://magic.dooring.vip");
    } else {
      history.push("/ide");
    }
  };
  const menu = (
    <div className={styles.menuWrap}>
      <div className={styles.menuItem} onClick={() => handleGo("H5")}>
        <MobileOutlined /> H5
      </div>
      <div className={styles.menuItem} onClick={() => handleGo("Doc")}>
        <ConsoleSqlOutlined /> 文档编辑{" "}
      </div>
      <div className={styles.menuItem} onClick={() => handleGo("online")}>
        <RobotOutlined /> 在线编程{" "}
      </div>
      <div className={styles.menuItem} onClick={() => handleGo("mitu")}>
        <FileImageOutlined /> 图片编辑{" "}
      </div>
    </div>
  );
  return (
    <div className={styles.homeWrap}>
      <div className={styles.leftArea}>
        <Dropdown overlay={menu} placement="bottomCenter" arrow visible>
          <Button type="primary" block size="large">
            新建页面
          </Button>
        </Dropdown>
        <div className={styles.bottomArea}>
          <div>
            <img
              src="http://cdn.dooring.cn/dr/R-C.gif"
              alt=""
              style={{ width: "180px", marginBottom: "20px" }}
            />
          </div>
          <div className={styles.groupWrap}>
            <div className={styles.groupItem}>
              dooring低代码交流群500人 <span>已满</span>
            </div>
            <div className={styles.groupItem} style={{ color: "#2F54EB" }}>
              如无法进群, 可加下方作者微信
              <Dropdown
                overlay={
                  <div className={styles.group}>
                    <img
                      src="https://cdn.dooring.cn/dr/dooring.jpeg"
                      style={{ width: "180px", marginBottom: "20px" }}
                      alt=""
                    />
                  </div>
                }
                placement="bottomCenter"
              >
                <span>点我</span>
              </Dropdown>
            </div>
            <h3>可视化低代码技术精粹</h3>
            <div style={{ textAlign: "center" }}>
              <img
                src="http://cdn.dooring.cn/dr%2Fcode1.png"
                style={{ width: "152px" }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contentArea}>
        <div className={styles.logoTip}>
          <div className={styles.logo}>
            <span className={styles.logoText} title="H5-Dooring可视化编辑器">
              H5-Dooring
            </span>
            可视化编辑器
          </div>
          <p
            style={{
              display: "inline-block",
              width: "520px",
              fontSize: "16px",
              lineHeight: "2"
            }}
          >
            H5-Dooring是一款功能强大，开源免费的H5可视化页面配置解决方案，
            致力于提供一套简单方便、专业可靠、无限可能的H5落地页最佳实践。
            技术栈以react为主， 后台采用nodejs开发。
          </p>
        </div>
        <div className={styles.operation}>
          <div className={styles.card} onClick={() => handleGo("H5")}>
            <MobileOutlined />
            <div>制作H5页面</div>
          </div>
          <div className={styles.card} onClick={() => handleGo("online")}>
            <CodeOutlined />
            <div>在线编程</div>
          </div>
          <div className={styles.card} onClick={() => handleGo("mitu")}>
            <ConsoleSqlOutlined />
            <div>制作图片海报</div>
          </div>
        </div>
        <footer className={styles.footer}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ marginTop: "30px" }}>
              <Zan />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{ width: "500px", marginLeft: "40px", marginTop: "32px" }}
            >
              <span style={{ marginRight: "24px" }}>更多产品: </span>
              <a
                href="https://v6.dooring.vip/beta"
                style={{ marginRight: "24px" }}
                target="_blank"
              >
                v6.dooring可视化大屏编辑器
              </a>
              <a
                href="http://h5.dooring.cn/qt"
                style={{ marginRight: "24px" }}
                target="_blank"
              >
                在线gif动图制作平台
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
