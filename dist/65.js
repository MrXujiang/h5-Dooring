(window.webpackJsonp = window.webpackJsonp || []).push([
  [65, 138],
  {
    Eyt2: function(n, t, e) {
      'use strict';
      e.r(t);
      var o = e('k1fw'),
        a = e('RGNM'),
        r = {
          editData: [
            ...a.baseConfig,
            { key: 'bgColor', name: '背景色', type: 'Color' },
            { key: 'height', name: '高度', type: 'Number' },
            { key: 'text', name: '文字', type: 'Text' },
            { key: 'fontSize', name: '字体大小', type: 'Number' },
            { key: 'color', name: '文字颜色', type: 'Color' },
            {
              key: 'align',
              name: '对齐方式',
              type: 'Select',
              range: [
                { key: 'left', text: '左对齐' },
                { key: 'center', text: '居中对齐' },
                { key: 'right', text: '右对齐' },
              ],
            },
          ],
          config: Object(o.a)(
            {
              bgColor: 'rgba(0,0,0,1)',
              text: '页脚Footer',
              color: 'rgba(255,255,255,1)',
              align: 'center',
              fontSize: 16,
              height: 48,
            },
            a.baseDefault,
          ),
        };
      t.default = r;
    },
    RGNM: function(n, t, e) {
      'use strict';
      e.r(t),
        e.d(t, 'baseConfig', function() {
          return o;
        }),
        e.d(t, 'baseDefault', function() {
          return a;
        });
      var o = [
          { key: 'baseTop', name: '纵向位移', type: 'Number' },
          { key: 'baseLeft', name: '横向位移', type: 'Number' },
          { key: 'baseRadius', name: '圆角', type: 'Number' },
          { key: 'baseRotate', name: '旋转', type: 'Number' },
          { key: 'baseScale', name: '缩放', type: 'Number' },
          { key: 'baseHeight', name: '容器高度%', type: 'Number' },
          { key: 'baseWidth', name: '容器宽度%', type: 'Number' },
        ],
        a = {
          baseTop: 0,
          baseLeft: 0,
          baseRadius: 0,
          baseRotate: 0,
          baseScale: 100,
          baseHeight: 100,
          baseWidth: 100,
        };
    },
  },
]);

//# sourceMappingURL=65.js.map
