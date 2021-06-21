(window.webpackJsonp = window.webpackJsonp || []).push([
  [44, 74, 76, 78, 80],
  {
    '6KkG': function(o, e, a) {
      'use strict';
      a.r(e);
      var t = {
        editData: [
          { key: 'height', name: '音频高度', type: 'Number' },
          { key: 'url', name: '音频链接', type: 'Text' },
        ],
        config: { height: 32, url: 'http://io.nainor.com/audio.mp3' },
      };
      e.default = t;
    },
    B0aN: function(o, e, a) {
      'use strict';
      a.r(e);
      var t = a('ef+k'),
        n = a('6KkG'),
        r = a('XMNe'),
        d = a('lAyZ'),
        l = { Video: t.default, Audio: n.default, Calendar: r.default, Map: d.default };
      e.default = l;
    },
    XMNe: function(o, e, a) {
      'use strict';
      a.r(e);
      var t = {
        editData: [
          { key: 'time', name: '日历时间', type: 'Text', placeholder: '格式如2020-01或2020-11' },
          {
            key: 'range',
            name: '日历选中范围',
            type: 'Text',
            placeholder: '格式如01-12(几号到几号)',
          },
          { key: 'color', name: '文本颜色', type: 'Color' },
          { key: 'selectedColor', name: '选中颜色', type: 'Color' },
          { key: 'round', name: '圆角', type: 'Number' },
        ],
        config: {
          time: '2020-12',
          range: '05-08',
          color: 'rgba(0,0,0,1)',
          selectedColor: 'rgba(22,40,212,1)',
          round: 0,
        },
      };
      e.default = t;
    },
    'ef+k': function(o, e, a) {
      'use strict';
      a.r(e);
      var t = {
        editData: [
          { key: 'poster', name: '视频封面', type: 'Upload' },
          { key: 'url', name: '视频链接', type: 'Text' },
        ],
        config: {
          poster: [
            {
              uid: '001',
              name: 'image.png',
              status: 'done',
              url: 'http://49.234.61.19/uploads/1_1740c6fbcd9.png',
            },
          ],
          url: '',
        },
      };
      e.default = t;
    },
    lAyZ: function(o, e, a) {
      'use strict';
      a.r(e);
      var t = {
        editData: [
          { key: 'ak', name: '百度地图AK', type: 'Text' },
          {
            key: 'position',
            name: '经纬度',
            type: 'Pos',
            placeObj: {
              text: '使用百度拾取坐标系统获取坐标',
              link: 'http://api.map.baidu.com/lbsapi/getpoint/index.html',
            },
          },
          { key: 'location', name: '地址', type: 'TextArea' },
        ],
        config: { ak: '你的百度地图ak', position: [121.444017, 31.237787], location: '上海市' },
      };
      e.default = t;
    },
  },
]);

//# sourceMappingURL=44.js.map
