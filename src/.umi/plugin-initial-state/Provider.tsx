// @ts-nocheck

import React, { useRef, useEffect } from 'react';
import { useModel } from '../plugin-model/useModel';
if (typeof useModel !== 'function') {
  throw new Error('[plugin-initial-state]: useModel is not a function, @umijs/plugin-model is required.')
}

interface Props {
  children: React.ReactNode;
}
export default (props: Props) => {
  const { children } = props;
  const appLoaded = useRef(false);
  const { loading = false } = useModel('@@initialState') || {};
  useEffect(()=>{
    if(!loading){
      appLoaded.current = true
    }
  }, [loading])
  // initial state loading 时，阻塞渲染
  if (loading && !appLoaded.current) {
    return null;
  }
  return children;
};
