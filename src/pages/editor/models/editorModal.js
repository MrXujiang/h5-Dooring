// import * as mesService from '../services/editorService'
// import { router } from 'umi'

export default {
  namespace: 'editorModal',
  state: {
    pointData: [],
    curPoint: null,
  },
  reducers: {
    addPointData(state, { payload }) {
      return { 
        ...state, 
        pointData: [...state.pointData, payload], 
        curPoint: payload
      }
    },
    modPointData(state, { payload }) {
      const { id } = payload
      const pointData = state.pointData.map(item => {
        if(item.id === id) {
          return payload
        }
        return { ...item }

      })
      return { 
        ...state, 
        pointData,
        curPoint: payload
      }
    },
    delPointData(state, { payload }) {
      const { id } = payload
      const pointData = state.pointData.filter(item => item.id !== id)
      return {
        ...state, 
        pointData,
        curPoint: null
      }
    }
  },
  effects: {
    
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        // Subscription 语义是订阅，用于订阅一个数据源，然后根据条件 dispatch 需要的 action。数据源可以是当前的时间、
        // 服务器的 websocket 连接、keyboard 输入、geolocation 变化、history 路由变化等等
        if (pathname !== '/dataModel/view') {
          dispatch({ type: 'initDetail', data: {} })
        }
      })
    }
  }
}
