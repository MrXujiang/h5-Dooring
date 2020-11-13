(window.webpackJsonp = window.webpackJsonp || []).push([
  [66, 138],
  {
    '94Fo': function(n, o, e) {
      'use strict';
      e.r(o);
      var t = e('k1fw'),
        a = e('RGNM'),
        m = {
          editData: [
            ...a.baseConfig,
            { key: 'bgColor', name: '背景色', type: 'Color' },
            { key: 'height', name: '高度', type: 'Number' },
            { key: 'logo', name: 'logo', type: 'Upload', isCrop: !0, cropRate: 1e3 / 618 },
            { key: 'logoText', name: 'logo文字', type: 'Text' },
            { key: 'color', name: '文字颜色', type: 'Color' },
            { key: 'fontSize', name: '文字大小', type: 'Number' },
          ],
          config: Object(t.a)(
            {
              bgColor: 'rgba(0,0,0,1)',
              logo: [
                {
                  uid: '001',
                  name: 'image.png',
                  status: 'done',
                  url: 'http://io.nainor.com/uploads/3_1740be8a482.png',
                },
              ],
              logoText: '页头Header',
              fontSize: 20,
              color: 'rgba(255,255,255,1)',
              height: 50,
            },
            a.baseDefault,
          ),
        };
      o.default = m;
    },
    RGNM: function(n, o, e) {
      'use strict';
      e.r(o),
        e.d(o, 'baseConfig', function() {
          return t;
        }),
        e.d(o, 'baseDefault', function() {
          return a;
        });
      var t = [
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

//# sourceMappingURL=66.js.map
