<!--
 * @Date: 2021-01-17 14:27:28
 * @LastEditors: chentianshang
 * @LastEditTime: 2021-01-17 21:50:17
 * @FilePath: /github-h5-Dooring/doc/zh/guide/functionRealization/revocation.md
-->
# 撤销/重做

撤销重做我们主要使用了redux-undo这个库，配合Dva使用，具体使用方法参考如下操作：

```js
import { createLogger } from 'redux-logger';
import { message } from 'antd';
import undoable, { StateWithHistory } from 'redux-undo';
import { Reducer, AnyAction } from 'redux';

export const dva = {
  config: {
    onAction: createLogger(),
    onError(e: Error) {
      message.error(e.message, 3);
    },
    onReducer: (reducer: Reducer<any, AnyAction>) => {
      let undoReducer = undoable(reducer);
      return function(state: StateWithHistory<any>, action: AnyAction) {
        let newState = undoReducer(state, action);
        let router = newState.present.router ? newState.present.router : newState.present.routing;
        return { ...newState, router: router };
      };
    },
  },
};
```

以上我们就实现了全局配置redux-undo，在撤销重做按钮中我们就可以触发对应的方法来实现撤销重做的功能，其次我们还使用了redux-logger来实现redux的日志输出。
