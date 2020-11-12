/*
 * @Description:
 * @Version: 2.0
 * @Autor: dragon
 * @Date: 2020-09-24 10:11:24
 * @LastEditors: dragon
 * @LastEditTime: 2020-10-08 16:12:26
 */
import { uuid } from '@/utils/tool';
const pointData = localStorage.getItem('userData') || '[]';

function overSave(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}

export default {
  namespace: 'editorModal',
  state: {
    pointData: JSON.parse(pointData),
    curPoint: null,
  },
  reducers: {
    addPointData(state, { payload }) {
      let pointData = [...state.pointData, payload];
      overSave('userData', pointData);
      return {
        ...state,
        pointData,
        curPoint: payload,
      };
    },
    modPointData(state, { payload }) {
      const { id } = payload;
      const pointData = state.pointData.map(item => {
        if (item.id === id) {
          return payload;
        }
        return { ...item };
      });
      overSave('userData', pointData);
      return {
        ...state,
        pointData,
        curPoint: payload,
      };
    },
    importTplData(state, { payload }) {
      overSave('userData', payload);
      return {
        ...state,
        pointData: payload,
        curPoint: null,
      };
    },
    copyPointData(state, { payload }) {
      const { id } = payload;
      const pointData = [];
      state.pointData.forEach(item => {
        pointData.push({ ...item });
        if (item.id === id) {
          pointData.push({ ...item, id: uuid(6, 10) });
        }
      });
      overSave('userData', pointData);

      return {
        ...state,
        pointData,
      };
    },
    delPointData(state, { payload }) {
      const { id } = payload;
      const pointData = state.pointData.filter(item => item.id !== id);
      overSave('userData', pointData);
      return {
        ...state,
        pointData,
        curPoint: null,
      };
    },
    clearAll(state) {
      overSave('userData', []);
      return {
        ...state,
        pointData: [],
        curPoint: null,
      };
    },
  },
  effects: {},
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {});
    },
  },
};
