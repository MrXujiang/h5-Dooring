(window.webpackJsonp = window.webpackJsonp || []).push([
  [47, 73],
  {
    XNG7: function(o, t, e) {
      'use strict';
      e.r(t);
      var n = e('k1fw'),
        a = e('p6l7'),
        i = {
          editData: [
            ...a.baseConfig,
            { key: 'translate', name: '文字偏移', type: 'Pos' },
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
            { key: 'titText', name: '标题文字', type: 'Text' },
            { key: 'titFontSize', name: '标题大小', type: 'Number' },
            { key: 'titColor', name: '标题颜色', type: 'Color' },
            {
              key: 'titFontWeight',
              name: '标题粗细',
              type: 'Select',
              range: [
                { key: '300', text: '300 x 300' },
                { key: '400', text: '400 x 400' },
                { key: '500', text: '500 x 500' },
                { key: '600', text: '600 x 600' },
              ],
            },
            { key: 'subTitText', name: '副标题文字', type: 'Text' },
            { key: 'subTitFontSize', name: '副标题大小', type: 'Number' },
            { key: 'subTitColor', name: '副标题颜色', type: 'Color' },
            {
              key: 'subTitFontWeight',
              name: '副标题粗细',
              type: 'Select',
              range: [
                { key: '300', text: '300 x 300' },
                { key: '400', text: '400 x 400' },
                { key: '500', text: '500 x 500' },
                { key: '600', text: '600 x 600' },
              ],
            },
            { key: 'imgUrl', name: '上传图片', type: 'Upload', isCrop: !1 },
            { key: 'round', name: '圆角', type: 'Number' },
          ],
          config: Object(n.a)(
            {
              translate: [0, 0],
              align: 'center',
              titText: '',
              titFontSize: 20,
              titColor: 'rgba(0,0,0,1)',
              titFontWeight: '400',
              subTitText: '',
              subTitFontSize: 16,
              subTitColor: 'rgba(0,0,0,1)',
              subTitFontWeight: '400',
              imgUrl: [
                {
                  uid: '001',
                  name: 'image.png',
                  status: 'done',
                  url: 'http://49.234.61.19/uploads/bg_174e470dc22.png',
                },
              ],
              round: 0,
            },
            a.baseDefault,
          ),
        };
      t.default = i;
    },
    p6l7: function(o, t, e) {
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

//# sourceMappingURL=47.js.map
