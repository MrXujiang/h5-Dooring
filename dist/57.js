(window.webpackJsonp = window.webpackJsonp || []).push([
  [57, 128, 130, 132, 134, 136],
  {
    '1YRe': function(n, e, a) {
      'use strict';
      a.r(e);
      var t = {
        editData: [
          { key: 'title', name: '标题', type: 'Text' },
          { key: 'size', name: '标题大小', type: 'Number' },
          { key: 'color', name: '标题颜色', type: 'Color' },
          { key: 'paddingTop', name: '上边距', type: 'Number' },
          { key: 'data', name: '数据源', type: 'Table' },
        ],
        config: {
          title: '面积图',
          size: 14,
          color: 'rgba(0,0,0,1)',
          paddingTop: 10,
          data: [
            { name: 'A', value: 20 },
            { name: 'B', value: 60 },
            { name: 'C', value: 20 },
            { name: 'D', value: 80 },
          ],
        },
      };
      e.default = t;
    },
    EEmK: function(n, e, a) {
      'use strict';
      a.r(e);
      var t = {
        editData: [
          {
            key: 'theme',
            name: '主题',
            type: 'Select',
            range: [
              { key: 'success', text: '成功' },
              { key: 'warning', text: '警告' },
              { key: 'danger', text: '危险' },
            ],
          },
          {
            key: 'shape',
            name: '形状',
            type: 'Radio',
            range: [
              { key: 'circle', text: '圆形' },
              { key: 'line', text: '线形' },
              { key: 'semi-circle', text: '半圆形' },
            ],
          },
          { key: 'size', name: '大小', type: 'Number' },
          { key: 'percent', name: '进度值', type: 'Number', range: [0, 100] },
          { key: 'strokeWidth', name: '线条粗细', type: 'Number' },
        ],
        config: { theme: 'success', shape: 'circle', size: 200, percent: 30, strokeWidth: 10 },
      };
      e.default = t;
    },
    FSN0: function(n, e, a) {
      'use strict';
      a.r(e);
      var t = {
        editData: [
          { key: 'title', name: '标题', type: 'Text' },
          { key: 'size', name: '标题大小', type: 'Number' },
          { key: 'color', name: '标题颜色', type: 'Color' },
          { key: 'paddingTop', name: '上边距', type: 'Number' },
          { key: 'data', name: '数据源', type: 'Table' },
        ],
        config: {
          title: '柱状图',
          size: 14,
          color: 'rgba(0,0,0,1)',
          paddingTop: 10,
          data: [
            { name: 'A', value: 20 },
            { name: 'B', value: 60 },
            { name: 'C', value: 20 },
          ],
        },
      };
      e.default = t;
    },
    ForS: function(n, e, a) {
      'use strict';
      a.r(e);
      var t = {
        editData: [
          { key: 'title', name: '标题', type: 'Text' },
          { key: 'size', name: '标题大小', type: 'Number' },
          { key: 'color', name: '标题颜色', type: 'Color' },
          { key: 'paddingTop', name: '上边距', type: 'Number' },
          { key: 'data', name: '数据源', type: 'Table' },
        ],
        config: {
          title: '饼图',
          size: 14,
          color: 'rgba(0,0,0,1)',
          paddingTop: 10,
          data: [
            { name: 'A', value: 20 },
            { name: 'B', value: 60 },
            { name: 'C', value: 20 },
            { name: 'D', value: 80 },
          ],
        },
      };
      e.default = t;
    },
    ae55: function(n, e, a) {
      'use strict';
      a.r(e);
      var t = a('FSN0'),
        m = a('zm62'),
        r = a('ForS'),
        o = a('1YRe'),
        l = a('EEmK'),
        y = {
          Chart: t.default,
          Line: m.default,
          Pie: r.default,
          Area: o.default,
          XProgress: l.default,
        };
      e.default = y;
    },
    zm62: function(n, e, a) {
      'use strict';
      a.r(e);
      var t = {
        editData: [
          { key: 'title', name: '标题', type: 'Text' },
          { key: 'size', name: '标题大小', type: 'Number' },
          { key: 'color', name: '标题颜色', type: 'Color' },
          { key: 'paddingTop', name: '上边距', type: 'Number' },
          { key: 'data', name: '数据源', type: 'Table' },
        ],
        config: {
          title: '折线图',
          size: 14,
          color: 'rgba(0,0,0,1)',
          paddingTop: 10,
          data: [
            { name: 'A', value: 20 },
            { name: 'B', value: 60 },
            { name: 'C', value: 20 },
            { name: 'D', value: 80 },
          ],
        },
      };
      e.default = t;
    },
  },
]);

//# sourceMappingURL=57.js.map
