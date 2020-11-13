(window.webpackJsonp = window.webpackJsonp || []).push([
  [64, 138],
  {
    RGNM: function(i, a, e) {
      'use strict';
      e.r(a),
        e.d(a, 'baseConfig', function() {
          return n;
        }),
        e.d(a, 'baseDefault', function() {
          return t;
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
        t = {
          baseTop: 0,
          baseLeft: 0,
          baseRadius: 0,
          baseRotate: 0,
          baseScale: 100,
          baseHeight: 100,
          baseWidth: 100,
        };
    },
    e8Ny: function(i, a, e) {
      'use strict';
      e.r(a);
      var n = e('k1fw'),
        t = e('RGNM'),
        o = {
          editData: [
            ...t.baseConfig,
            {
              key: 'direction',
              name: '方向',
              type: 'Radio',
              range: [
                { key: 'down', text: '从上到下' },
                { key: 'left', text: '从左到右' },
              ],
            },
            { key: 'swipeable', name: '是否可拖拽', type: 'Switch' },
            { key: 'autoPlay', name: '是否自动播放', type: 'Switch' },
            { key: 'imgList', name: '图片列表', type: 'DataList' },
          ],
          config: Object(n.a)(
            {
              direction: 'left',
              swipeable: !1,
              autoPlay: !1,
              imgList: [
                {
                  id: '1',
                  title: '趣谈小课1',
                  desc: '致力于打造优质小课程',
                  link: 'xxxxx',
                  imgUrl: [
                    {
                      uid: '001',
                      name: 'image.png',
                      status: 'done',
                      url: 'http://io.nainor.com/uploads/1_1740bd7c3dc.png',
                    },
                  ],
                },
                {
                  id: '2',
                  title: '趣谈小课1',
                  desc: '致力于打造优质小课程',
                  link: 'xxxxx',
                  imgUrl: [
                    {
                      uid: '001',
                      name: 'image.png',
                      status: 'done',
                      url: 'http://io.nainor.com/uploads/2_1740bd8d525.png',
                    },
                  ],
                },
              ],
            },
            t.baseDefault,
          ),
        };
      a.default = o;
    },
  },
]);

//# sourceMappingURL=64.js.map
