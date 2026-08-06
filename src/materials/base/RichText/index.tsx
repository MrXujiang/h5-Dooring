import React, { memo, useState } from "react";
import styles from "./index.less";
import { IButtonConfig } from "./schema";
import logo from "@/assets/richText.png";

interface IProps extends IButtonConfig {
  isTpl: boolean;
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

const XButton = memo((props: IProps) => {
  const { isTpl, borderColor, borderWidth, round, padding, content } = props;
  const safeContent = sanitizeHtml(content);

  return isTpl ? (
    <div>
      <img style={{ width: "100%" }} src={logo} alt=""></img>
    </div>
  ) : (
    <div
      className={styles.richTextWrap}
      style={{
        border: `${borderWidth}px solid ${borderColor}`,
        borderRadius: round + "px",
        padding: padding + "px"
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: safeContent }}></div>
    </div>
  );
});
export default XButton;
