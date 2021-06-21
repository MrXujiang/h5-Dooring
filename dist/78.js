(window.webpackJsonp = window.webpackJsonp || []).push([
  [78],
  {
    lAyZ: function(o, t, a) {
      'use strict';
      a.r(t);
      var e = {
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
      t.default = e;
    },
  },
]);

//# sourceMappingURL=78.js.map
