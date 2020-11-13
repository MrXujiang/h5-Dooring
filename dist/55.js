(window.webpackJsonp = window.webpackJsonp || []).push([
  [55, 71, 73, 75, 78, 80, 82, 84, 86, 88],
  {
    '66eW': function(n, e, o) {
      'use strict';
      o.r(e);
      var t = {
        editData: [
          { key: 'text', name: '文字', type: 'Text' },
          { key: 'color', name: '标题颜色', type: 'Color' },
          { key: 'fontSize', name: '字体大小', type: 'Number' },
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
          { key: 'lineHeight', name: '行高', type: 'Number' },
        ],
        config: {
          text: '我是文本',
          color: 'rgba(60,60,60,1)',
          fontSize: 18,
          align: 'center',
          lineHeight: 2,
        },
      };
      e.default = t;
    },
    '9o+G': function(n, e, o) {
      'use strict';
      o.r(e);
      var t = {
        editData: [
          { key: 'bgColor', name: '背景色', type: 'Color' },
          { key: 'height', name: '高度', type: 'Number' },
          { key: 'logo', name: 'logo', type: 'Upload', isCrop: !0, cropRate: 1e3 / 618 },
          { key: 'logoText', name: 'logo文字', type: 'Text' },
          { key: 'color', name: '文字颜色', type: 'Color' },
          { key: 'fontSize', name: '文字大小', type: 'Number' },
        ],
        config: {
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
      };
      e.default = t;
    },
    Fzjr: function(n, e, o) {
      'use strict';
      o.r(e);
      var t = {
        editData: [
          { key: 'qrcode', name: '二维码', type: 'Upload', isCrop: !0, cropRate: 1 },
          { key: 'text', name: '文字', type: 'Text' },
          { key: 'color', name: '文字颜色', type: 'Color' },
          { key: 'fontSize', name: '文字大小', type: 'Number' },
        ],
        config: {
          qrcode: [
            {
              uid: '001',
              name: 'image.png',
              status: 'done',
              url: 'http://io.nainor.com/uploads/code_173e1705e0c.png',
            },
          ],
          text: '二维码',
          color: 'rgba(153,153,153,1)',
          fontSize: 14,
        },
      };
      e.default = t;
    },
    IiPq: function(n, e, o) {
      'use strict';
      o.r(e);
      var t = {
        editData: [
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
        config: {
          bgColor: 'rgba(0,0,0,1)',
          text: '按钮 button 按钮 button 按钮 button',
          color: 'rgba(255,255,255,1)',
          align: 'center',
          fontSize: 16,
          height: 48,
          type: 'primary',
        },
      };
      e.default = t;
    },
    KsSx: function(n, e, o) {
      'use strict';
      o.r(e);
      var t = {
        editData: [
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
        config: {
          bgColor: 'rgba(0,0,0,1)',
          text: '页脚Footer',
          color: 'rgba(255,255,255,1)',
          align: 'center',
          fontSize: 16,
          height: 48,
        },
      };
      e.default = t;
    },
    L8mV: function(n, e, o) {
      'use strict';
      o.r(e);
      var t = o('KsSx'),
        a = o('9o+G'),
        r = o('sq+N'),
        i = o('Mu/+'),
        l = o('WYFb'),
        m = o('vhDd'),
        y = o('Fzjr'),
        u = o('66eW'),
        T = o('IiPq'),
        d = {
          Footer: t.default,
          Header: a.default,
          Icon: r.default,
          Image: i.default,
          List: l.default,
          LongText: m.default,
          Qrcode: y.default,
          Text: u.default,
          Button: T.default,
        };
      e.default = d;
    },
    'Mu/+': function(n, e, o) {
      'use strict';
      o.r(e);
      var t = {
        editData: [
          { key: 'imgUrl', name: '上传', type: 'Upload', isCrop: !1 },
          { key: 'round', name: '圆角', type: 'Number' },
        ],
        config: {
          imgUrl: [
            {
              uid: '001',
              name: 'image.png',
              status: 'done',
              url: 'http://io.nainor.com/uploads/4_1740bf4535c.png',
            },
          ],
          round: 0,
        },
      };
      e.default = t;
    },
    WYFb: function(n, e, o) {
      'use strict';
      o.r(e);
      var t = {
        editData: [
          { key: 'sourceData', name: '数据源', type: 'DataList' },
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
      };
      e.default = t;
    },
    'sq+N': function(n, e, o) {
      'use strict';
      o.r(e);
      var t = {
        editData: [
          { key: 'color', name: '颜色', type: 'Color' },
          { key: 'size', name: '大小', type: 'Number' },
          { key: 'spin', name: '旋转动画', type: 'Switch' },
          {
            key: 'type',
            name: '图标类型',
            type: 'CardPicker',
            icons: [
              'AccountBookTwoTone',
              'AlertTwoTone',
              'ApiTwoTone',
              'AppstoreTwoTone',
              'AudioTwoTone',
              'BankTwoTone',
              'BellTwoTone',
              'BookTwoTone',
              'BugTwoTone',
              'BuildTwoTone',
              'BulbTwoTone',
              'CalculatorTwoTone',
              'CalendarTwoTone',
              'CameraTwoTone',
              'CarTwoTone',
              'CarryOutTwoTone',
              'CiCircleTwoTone',
              'CloudTwoTone',
              'CodeTwoTone',
              'CrownTwoTone',
              'CustomerServiceTwoTone',
              'DollarCircleTwoTone',
              'EnvironmentTwoTone',
              'ExperimentTwoTone',
              'FireTwoTone',
              'GiftTwoTone',
              'InsuranceTwoTone',
              'LikeTwoTone',
              'LockTwoTone',
              'MailTwoTone',
              'MessageTwoTone',
              'PhoneTwoTone',
              'PictureTwoTone',
              'PlaySquareTwoTone',
              'RedEnvelopeTwoTone',
              'ShopTwoTone',
              'TrademarkCircleTwoTone',
              'StarTwoTone',
              'SafetyCertificateTwoTone',
              'SettingTwoTone',
              'RocketTwoTone',
            ],
          },
        ],
        config: { color: 'rgba(74,144,226,1)', size: 36, spin: !1, type: 'CarTwoTone' },
      };
      e.default = t;
    },
    vhDd: function(n, e, o) {
      'use strict';
      o.r(e);
      var t = {
        editData: [
          { key: 'text', name: '文字', type: 'TextArea' },
          { key: 'color', name: '标题颜色', type: 'Color' },
          { key: 'fontSize', name: '字体大小', type: 'Number' },
          { key: 'indent', name: '首行缩进', type: 'Number', range: [0, 100] },
          {
            key: 'textAlign',
            name: '对齐方式',
            type: 'Select',
            range: [
              { key: 'left', text: '左对齐' },
              { key: 'center', text: '居中对齐' },
              { key: 'right', text: '右对齐' },
            ],
          },
          { key: 'lineHeight', name: '行高', type: 'Number', step: 0.1 },
        ],
        config: {
          text: '我是长文本有一段故事，dooring可视化编辑器无限可能，赶快来体验吧，骚年们，奥利给~',
          color: 'rgba(60,60,60,1)',
          fontSize: 14,
          indent: 20,
          lineHeight: 1.8,
          textAlign: 'left',
        },
      };
      e.default = t;
    },
  },
]);

//# sourceMappingURL=55.js.map
