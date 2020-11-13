(window.webpackJsonp = window.webpackJsonp || []).push([
  [52, 55, 59, 62, 71, 73, 75, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98],
  {
    '1CmB': function(a, e, t) {
      'use strict';
      t.r(e);
      var o = {
        editData: [
          { key: 'title', name: '标题', type: 'Text' },
          { key: 'size', name: '标题大小', type: 'Number' },
          { key: 'color', name: '标题颜色', type: 'Color' },
          { key: 'paddingTop', name: '上边距', type: 'Number' },
          { key: 'data', name: '数据源', type: 'Table' },
        ],
        config: {
          title: '饼图',
          size: 14,
          color: 'rgba(0,0,0,1)',
          paddingTop: 10,
          data: [
            { name: 'A', value: 20 },
            { name: 'B', value: 60 },
            { name: 'C', value: 20 },
            { name: 'D', value: 80 },
          ],
        },
      };
      e.default = o;
    },
    '66eW': function(a, e, t) {
      'use strict';
      t.r(e);
      var o = {
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
      e.default = o;
    },
    '9GLN': function(a, e, t) {
      'use strict';
      t.r(e);
      var o = {
        editData: [
          { key: 'title', name: '标题', type: 'Text' },
          { key: 'size', name: '标题大小', type: 'Number' },
          { key: 'color', name: '标题颜色', type: 'Color' },
          { key: 'paddingTop', name: '上边距', type: 'Number' },
          { key: 'data', name: '数据源', type: 'Table' },
        ],
        config: {
          title: '折线图',
          size: 14,
          color: 'rgba(0,0,0,1)',
          paddingTop: 10,
          data: [
            { name: 'A', value: 20 },
            { name: 'B', value: 60 },
            { name: 'C', value: 20 },
            { name: 'D', value: 80 },
          ],
        },
      };
      e.default = o;
    },
    '9o+G': function(a, e, t) {
      'use strict';
      t.r(e);
      var o = {
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
      e.default = o;
    },
    DyTX: function(a, e, t) {
      'use strict';
      t.r(e);
      var o = {
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
              url: 'http://io.nainor.com/uploads/1_1740c6fbcd9.png',
            },
          ],
          url: '',
        },
      };
      e.default = o;
    },
    Fzjr: function(a, e, t) {
      'use strict';
      t.r(e);
      var o = {
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
      e.default = o;
    },
    IiPq: function(a, e, t) {
      'use strict';
      t.r(e);
      var o = {
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
      e.default = o;
    },
    KsSx: function(a, e, t) {
      'use strict';
      t.r(e);
      var o = {
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
      e.default = o;
    },
    L8mV: function(a, e, t) {
      'use strict';
      t.r(e);
      var o = t('KsSx'),
        n = t('9o+G'),
        r = t('sq+N'),
        m = t('Mu/+'),
        l = t('WYFb'),
        i = t('vhDd'),
        u = t('Fzjr'),
        y = t('66eW'),
        d = t('IiPq'),
        T = {
          Footer: o.default,
          Header: n.default,
          Icon: r.default,
          Image: m.default,
          List: l.default,
          LongText: i.default,
          Qrcode: u.default,
          Text: y.default,
          Button: d.default,
        };
      e.default = T;
    },
    'Mr+K': function(a, e, t) {
      'use strict';
      t.r(e);
      var o = t('k1fw'),
        n = t('L8mV'),
        r = t('eVH9'),
        m = t('mRbG'),
        l = Object(o.a)(Object(o.a)(Object(o.a)({}, n.default), r.default), m.default);
      e.default = l;
    },
    'Mu/+': function(a, e, t) {
      'use strict';
      t.r(e);
      var o = {
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
      e.default = o;
    },
    WYFb: function(a, e, t) {
      'use strict';
      t.r(e);
      var o = {
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
      e.default = o;
    },
    e8zI: function(a, e, t) {
      'use strict';
      t.r(e);
      var o = {
        editData: [
          { key: 'title', name: '标题', type: 'Text' },
          { key: 'size', name: '标题大小', type: 'Number' },
          { key: 'color', name: '标题颜色', type: 'Color' },
          { key: 'paddingTop', name: '上边距', type: 'Number' },
          { key: 'data', name: '数据源', type: 'Table' },
        ],
        config: {
          title: '柱状图',
          size: 14,
          color: 'rgba(0,0,0,1)',
          paddingTop: 10,
          data: [
            { name: 'A', value: 20 },
            { name: 'B', value: 60 },
            { name: 'C', value: 20 },
          ],
        },
      };
      e.default = o;
    },
    eVH9: function(a, e, t) {
      'use strict';
      t.r(e);
      var o = t('DyTX'),
        n = { Video: o.default };
      e.default = n;
    },
    mRbG: function(a, e, t) {
      'use strict';
      t.r(e);
      var o = t('e8zI'),
        n = t('9GLN'),
        r = t('1CmB'),
        m = t('qVp6'),
        l = { Chart: o.default, Line: n.default, Pie: r.default, Area: m.default };
      e.default = l;
    },
    qVp6: function(a, e, t) {
      'use strict';
      t.r(e);
      var o = {
        editData: [
          { key: 'title', name: '标题', type: 'Text' },
          { key: 'size', name: '标题大小', type: 'Number' },
          { key: 'color', name: '标题颜色', type: 'Color' },
          { key: 'paddingTop', name: '上边距', type: 'Number' },
          { key: 'data', name: '数据源', type: 'Table' },
        ],
        config: {
          title: '面积图',
          size: 14,
          color: 'rgba(0,0,0,1)',
          paddingTop: 10,
          data: [
            { name: 'A', value: 20 },
            { name: 'B', value: 60 },
            { name: 'C', value: 20 },
            { name: 'D', value: 80 },
          ],
        },
      };
      e.default = o;
    },
    'sq+N': function(a, e, t) {
      'use strict';
      t.r(e);
      var o = {
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
      e.default = o;
    },
    vhDd: function(a, e, t) {
      'use strict';
      t.r(e);
      var o = {
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
      e.default = o;
    },
  },
]);

//# sourceMappingURL=52.js.map
