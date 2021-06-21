(window.webpackJsonp = window.webpackJsonp || []).push([
  [46, 73],
  {
    p6l7: function(n, a, e) {
      'use strict';
      e.r(a),
        e.d(a, 'baseConfig', function() {
          return t;
        }),
        e.d(a, 'baseDefault', function() {
          return o;
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
        o = {
          baseTop: 0,
          baseLeft: 0,
          baseRadius: 0,
          baseRotate: 0,
          baseScale: 100,
          baseHeight: 100,
          baseWidth: 100,
        };
    },
    pzaE: function(n, a, e) {
      'use strict';
      e.r(a);
      var t = e('k1fw'),
        o = e('p6l7'),
        m = {
          editData: [
            ...o.baseConfig,
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
                  url: 'http://49.234.61.19/uploads/3_1740be8a482.png',
                },
              ],
              logoText: '页头Header',
              fontSize: 20,
              color: 'rgba(255,255,255,1)',
              height: 50,
            },
            o.baseDefault,
          ),
        };
      a.default = m;
    },
  },
]);

//# sourceMappingURL=46.js.map
