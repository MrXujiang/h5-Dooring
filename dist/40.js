(window.webpackJsonp = window.webpackJsonp || []).push([
  [40, 82, 84, 86, 88, 90],
  {
    '4ZOe': function(n, t, e) {
      'use strict';
      e.r(t);
      var a = {
        editData: [
          { key: 'bgColor', name: '背景颜色', type: 'Color' },
          { key: 'money', name: '优惠金额', type: 'Number' },
          { key: 'ifText', name: '优惠条件', type: 'Text' },
          { key: 'dealTime', name: '有效期', type: 'TextArea' },
          { key: 'desc', name: '提示信息', type: 'TextArea' },
          { key: 'link', name: '跳转链接', type: 'Text' },
        ],
        config: {
          bgColor: 'rgba(228,162,22,1)',
          money: 50,
          link: 'http://h5.dooring.cn',
          ifText: '满199元使用',
          dealTime: '2020.02.12-02.16',
          desc: '有家店铺',
        },
      };
      t.default = a;
    },
    FZxa: function(n, t, e) {
      'use strict';
      e.r(t);
      var a = e('qAmz'),
        o = e('KU83'),
        r = e('LP5j'),
        i = e('4ZOe'),
        m = e('VnAK'),
        l = {
          ZhuanLan: a.default,
          Tab: o.default,
          List: r.default,
          Coupons: i.default,
          CardLabel: m.default,
        };
      t.default = l;
    },
    KU83: function(n, t, e) {
      'use strict';
      e.r(t);
      var a = {
        editData: [
          { key: 'tabs', name: '项目类别', type: 'MutiText' },
          { key: 'activeColor', name: '激活颜色', type: 'Color' },
          { key: 'color', name: '文字颜色', type: 'Color' },
          { key: 'fontSize', name: '文字大小', type: 'Number' },
          { key: 'imgSize', name: '图片大小', type: 'Number' },
          { key: 'sourceData', name: '数据源', type: 'DataList' },
        ],
        config: {
          tabs: ['类别一', '类别二'],
          color: 'rgba(153,153,153,1)',
          activeColor: 'rgba(0,102,204,1)',
          fontSize: 16,
          imgSize: 100,
          sourceData: [
            {
              id: '1',
              title: '趣谈小课1',
              desc: '致力于打造优质小课程',
              price: '',
              link: 'xxxxx',
              type: 0,
              imgUrl: [
                {
                  uid: '001',
                  name: 'image.png',
                  status: 'done',
                  url: 'http://cdn.dooring.cn/dr/logo.ff7fc6bb.png',
                },
              ],
            },
            {
              id: '2',
              title: '趣谈小课2',
              desc: '致力于打造优质小课程',
              price: '',
              link: 'xxxxx',
              type: 0,
              imgUrl: [
                {
                  uid: '001',
                  name: 'image.png',
                  status: 'done',
                  url: 'http://cdn.dooring.cn/dr/logo.ff7fc6bb.png',
                },
              ],
            },
            {
              id: '3',
              title: '趣谈小课3',
              desc: '致力于打造优质小课程',
              price: '',
              link: 'xxxxx',
              type: 1,
              imgUrl: [
                {
                  uid: '001',
                  name: 'image.png',
                  status: 'done',
                  url: 'http://cdn.dooring.cn/dr/logo.ff7fc6bb.png',
                },
              ],
            },
          ],
        },
      };
      t.default = a;
    },
    LP5j: function(n, t, e) {
      'use strict';
      e.r(t);
      var a = e('RKZ9'),
        o = {
          editData: [
            { key: 'sourceData', name: '数据源', type: 'DataList', cropRate: 1 },
            { key: 'isSearch', name: '是否搜索', type: 'Switch' },
            { key: 'padding', name: '列表项间距', type: 'Number' },
            { key: 'round', name: '圆角', type: 'Number' },
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
          config: {
            sourceData: [
              {
                id: '1',
                title: '趣谈小课',
                desc: '致力于打造优质小课程',
                price: '免费',
                link: 'xxxxx',
                imgUrl: [
                  {
                    uid: '001',
                    name: 'image.png',
                    status: 'done',
                    url: ''.concat(a.f, '/uploads/1_1740c6fbcd9.png'),
                  },
                ],
              },
              {
                id: '2',
                title: '趣谈小课',
                desc: '致力于打造优质小课程',
                price: '免费',
                link: 'xxxxx',
                imgUrl: [
                  {
                    uid: '002',
                    name: 'image.png',
                    status: 'done',
                    url: ''.concat(a.f, '/uploads/1_1740c6fbcd9.png'),
                  },
                ],
              },
            ],
            isSearch: !1,
            padding: 16,
            round: 0,
            imgSize: '80',
            fontSize: 16,
            color: 'rgba(153,153,153,1)',
          },
        };
      t.default = o;
    },
    VnAK: function(n, t, e) {
      'use strict';
      e.r(t);
      var a = e('RKZ9'),
        o = {
          editData: [
            { key: 'imgUrl', name: '图片', type: 'Upload' },
            { key: 'title', name: '标题', type: 'Text' },
            { key: 'titColor', name: '标题颜色', type: 'Color' },
            { key: 'desc', name: '描述', type: 'Text' },
            { key: 'round', name: '圆角', type: 'Number' },
            { key: 'bgColor', name: '背景色', type: 'Color' },
            { key: 'frontColor', name: '前景色', type: 'Color' },
            { key: 'link', name: '跳转链接', type: 'Text' },
          ],
          config: {
            imgUrl: [
              {
                uid: '001',
                name: 'image.png',
                status: 'done',
                url: ''.concat(a.f, '/uploads/1_1740c6fbcd9.png'),
              },
            ],
            bgColor: 'rgba(168,11,212,1)',
            round: 4,
            link: 'http://h5.dooring.cn',
            title: '贵宾专享',
            titColor: 'rgba(255,255,255,1)',
            desc: '满199减100',
            frontColor: 'rgba(240,123,123,1)',
          },
        };
      t.default = o;
    },
    qAmz: function(n, t, e) {
      'use strict';
      e.r(t);
      var a = {
        editData: [
          { key: 'title', name: '标题', type: 'Text' },
          { key: 'titColor', name: '标题颜色', type: 'Color' },
          { key: 'titFontSize', name: '标题大小', type: 'Number' },
          { key: 'desc', name: '描述', type: 'TextArea' },
          { key: 'imgUrl', name: '专栏图片', type: 'Upload', isCrop: !0, cropRate: 1 },
          { key: 'bgColor', name: '背景色', type: 'Color' },
          { key: 'padding', name: '内容边距', type: 'Number' },
          { key: 'radius', name: '圆角', type: 'Number' },
          { key: 'linkText', name: '按钮文本', type: 'Text' },
          { key: 'linkBg', name: '按钮背景色', type: 'Color' },
          { key: 'link', name: '按钮跳转链接', type: 'Text' },
          { key: 'content', name: '详细介绍', type: 'RichText' },
        ],
        config: {
          imgUrl: [
            {
              uid: '001',
              name: 'image.png',
              status: 'done',
              url: 'http://cdn.dooring.cn/dr/qtqd_code.png',
            },
          ],
          title: '趣谈前端',
          desc: '一个有点意思的技术社区~',
          titColor: 'rgba(0,0,0,1)',
          titFontSize: 18,
          bgColor: 'rgba(255,255,255,1)',
          padding: 16,
          radius: 6,
          link: '',
          linkText: '订阅',
          linkBg: 'rgba(22,40,212,1)',
          content: '趣谈前端 - 可视化专栏',
        },
      };
      t.default = a;
    },
  },
]);

//# sourceMappingURL=40.js.map
