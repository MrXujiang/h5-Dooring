import React, { memo, useState } from "react";
import styles from "./index.less";
import { IButtonConfig } from "./schema";
import logo from "@/assets/richText.png";

interface IProps extends IButtonConfig {
  isTpl: boolean;
}

const sanitizeHtml = (html = "") => {
  if (typeof document === "undefined") {
    return html;
  }
  const div = document.createElement("div");
  div.innerHTML = html;
  div
    .querySelectorAll("script,iframe,object,embed,link,style,meta")
    .forEach((node) => node.remove());
  div.querySelectorAll("*").forEach((node) => {
    Array.from(node.attributes).forEach((attr) => {
      const name = attr.name.toLowerCase();
      const value = attr.value.trim().toLowerCase();
      if (name.indexOf("on") === 0 || value.indexOf("javascript:") === 0) {
        node.removeAttribute(attr.name);
      }
    });
  });
  return div.innerHTML;
};

const XButton = memo((props: IProps) => {
  const { isTpl, borderColor, borderWidth, round, padding, content } = props;

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
      <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(content) }}></div>
    </div>
  );
});
export default XButton;
