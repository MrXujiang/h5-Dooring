// @ts-nocheck
import React from 'react';
import Provider from './Provider';

export function rootContainer(container: React.ReactNode) {
  return React.createElement(
    // 这里的 plugin-initial-state 不能从 constant 里取，里面有 path 依赖
    // 但 webpack-5 没有 node 补丁（包括 path）
    Provider,
    null,
    container,
  );
}
