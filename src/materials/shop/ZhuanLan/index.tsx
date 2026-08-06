import React, { memo } from "react";
import { IZLConfig } from "./schema";
import logo from "@/assets/zhuanlan.png";
import styles from "./index.less";

interface IProps extends IZLConfig {
  isTpl?: boolean;
}

const sanitizeHtml = (html = "") => {
  const template = document.createElement("template");
  template.innerHTML = html;

  const allowedTags = new Set([
    "a",
    "abbr",
    "b",
    "blockquote",
    "br",
    "code",
    "div",
    "em",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "hr",
    "i",
    "img",
    "li",
    "ol",
    "p",
    "pre",
    "span",
    "strong",
    "u",
    "ul"
  ]);
  const allowedAttrs = new Set([
    "alt",
    "class",
    "href",
    "rel",
    "src",
    "style",
    "target",
    "title"
  ]);

  const clean = (node: Node) => {
    if (node.nodeType === 1) {
      const el = node as HTMLElement;
      const tag = el.tagName.toLowerCase();
      if (!allowedTags.has(tag)) {
        el.remove();
        return;
      }

      Array.from(el.attributes).forEach(attr => {
        const name = attr.name.toLowerCase();
        const value = attr.value.trim().toLowerCase();
        if (
          name.indexOf("on") === 0 ||
          !allowedAttrs.has(name) ||
          ((name === "href" || name === "src") &&
            (value.indexOf("javascript:") === 0 ||
              value.indexOf("data:") === 0 ||
              value.indexOf("vbscript:") === 0))
        ) {
          el.removeAttribute(attr.name);
        }
      });
    }

    Array.from(node.childNodes).forEach(clean);
  };

  Array.from(template.content.childNodes).forEach(clean);
  return template.innerHTML;
};

const ZL = memo((props: IProps) => {
  const {
    title,
    desc,
    imgUrl,
    link,
    linkText,
    linkBg,
    titColor,
    titFontSize,
    bgColor,
    padding,
    radius,
    content,
    isTpl
  } = props;
  const toLink = () => {
    if (link && window.location.href.indexOf("editor") < 0) {
      window.location.href = link;
    }
  };
  const safeContent = sanitizeHtml(content);
  return isTpl ? (
    <div>
      <img style={{ width: "100%" }} src={logo} alt=""></img>
    </div>
  ) : (
    <div
      style={{
        width: "calc(100% - 32px)",
        backgroundColor: bgColor,
        padding: padding + "px",
        borderRadius: radius + "px",
        margin: "16px auto",
        boxShadow: "0 0 6px rgba(0,0,0, .1)"
      }}
    >
      <div className={styles.topArea}>
        <div className={styles.tx}>
          <img src={imgUrl && imgUrl[0].url} alt="dooring" />
        </div>
        <div className={styles.textArea}>
          <div
            className={styles.title}
            style={{ fontSize: titFontSize + "px", color: titColor }}
          >
            {title}
          </div>
          <div
            className={styles.desc}
            style={{
              fontSize: Math.ceil(titFontSize * 0.7) + "px",
              color: titColor
            }}
          >
            {desc}
          </div>
        </div>
        <div className={styles.btnArea}>
          <span
            className={styles.btn}
            style={{ backgroundColor: linkBg }}
            onClick={toLink}
          >
            {" "}
            {linkText}{" "}
          </span>
        </div>
      </div>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: safeContent }}
      ></div>
    </div>
  );
});

export default ZL;
