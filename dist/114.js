(window.webpackJsonp = window.webpackJsonp || []).push([
  [114],
  {
    'Ywj+': function(n, e, t) {
      'use strict';
      t.r(e);
      var a = {
        editData: [
          { key: 'text', name: '文本', type: 'Text' },
          { key: 'speed', name: '滚动速度', type: 'Number' },
          {
            key: 'theme',
            name: '主题',
            type: 'Select',
            range: [
              { key: 'default', text: '默认' },
              { key: 'warning', text: '警告' },
              { key: 'primary', text: '主要' },
              { key: 'success', text: '成功' },
              { key: 'danger', text: '危险' },
            ],
          },
          { key: 'isClose', name: '是否可关闭', type: 'Switch' },
        ],
        config: { text: '通知栏: 趣谈前端上线啦', speed: 50, theme: 'warning', isClose: !1 },
      };
      e.default = a;
    },
  },
]);

//# sourceMappingURL=114.js.map
