(window.webpackJsonp = window.webpackJsonp || []).push([
  [68, 138],
  {
    'Ps1+': function(o, t, e) {
      'use strict';
      e.r(t);
      var n = e('k1fw'),
        a = e('RGNM'),
        i = {
          editData: [
            ...a.baseConfig,
            { key: 'sourceData', name: '数据源', type: 'DataList', cropRate: 1 },
            { key: 'round', name: '图片圆角', type: 'Number' },
            {
              key: 'imgSize',
              name: '图片大小',
              type: 'Select',
              range: [
                { key: '60', text: '60 x 60' },
                { key: '80', text: '80 x 80' },
                { key: '100', text: '100 x 100' },
                { key: '120', text: '120 x 120' },
                { key: '150', text: '150 x 150' },
              ],
            },
            { key: 'fontSize', name: '文字大小', type: 'Number' },
            { key: 'color', name: '文字颜色', type: 'Color' },
          ],
          config: Object(n.a)(
            {
              sourceData: [
                {
                  id: '1',
                  title: '趣谈小课',
                  desc: '致力于打造优质小课程',
                  link: 'xxxxx',
                  imgUrl: [
                    {
                      uid: '001',
                      name: 'image.png',
                      status: 'done',
                      url: 'http://io.nainor.com/uploads/1_1740c6fbcd9.png',
                    },
                  ],
                },
                {
                  id: '2',
                  title: '趣谈小课',
                  desc: '致力于打造优质小课程',
                  link: 'xxxxx',
                  imgUrl: [
                    {
                      uid: '002',
                      name: 'image.png',
                      status: 'done',
                      url: 'http://io.nainor.com/uploads/1_1740c6fbcd9.png',
                    },
                  ],
                },
              ],
              round: 0,
              imgSize: '80',
              fontSize: 16,
              color: 'rgba(153,153,153,1)',
            },
            a.baseDefault,
          ),
        };
      t.default = i;
    },
    RGNM: function(o, t, e) {
      'use strict';
      e.r(t),
        e.d(t, 'baseConfig', function() {
          return n;
        }),
        e.d(t, 'baseDefault', function() {
          return a;
        });
      var n = [
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

//# sourceMappingURL=68.js.map
