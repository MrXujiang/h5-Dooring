import { createLogger } from 'redux-logger';
import { message } from 'antd';
import undoable, { StateWithHistory } from 'redux-undo';
import { Reducer, AnyAction } from 'redux';

export const dva = {
  config: {
    [process.env.NODE_ENV === 'development' ? 'onAction' : '']: createLogger(),
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
