(window.webpackJsonp = window.webpackJsonp || []).push([
  [
    37,
    38,
    40,
    42,
    44,
    46,
    47,
    48,
    49,
    51,
    55,
    59,
    61,
    63,
    65,
    67,
    69,
    71,
    73,
    74,
    76,
    78,
    80,
    82,
    84,
    86,
    88,
    90,
    92,
    94,
    96,
    98,
    100,
  ],
  {
    '4ZOe': function(o, t, e) {
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
    '5AQC': function(o, t, e) {
      'use strict';
      e.r(t);
      var a = {
        editData: [
          { key: 'color', name: '颜色', type: 'Color' },
          { key: 'size', name: '大小', type: 'Number' },
          { key: 'text', name: '文本', type: 'Text' },
          { key: 'fontSize', name: '文本大小', type: 'Number' },
          { key: 'fontColor', name: '文本颜色', type: 'Color' },
          { key: 'link', name: '跳转链接', type: 'Text' },
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
        config: {
          color: 'rgba(74,144,226,1)',
          size: 36,
          text: '图标',
          fontSize: 14,
          fontColor: 'rgba(0,0,0,1)',
          link: '',
          spin: !1,
          type: 'CarTwoTone',
        },
      };
      t.default = a;
    },
    '6KkG': function(o, t, e) {
      'use strict';
      e.r(t);
      var a = {
        editData: [
          { key: 'height', name: '音频高度', type: 'Number' },
          { key: 'url', name: '音频链接', type: 'Text' },
        ],
        config: { height: 32, url: 'http://io.nainor.com/audio.mp3' },
      };
      t.default = a;
    },
    '6sgD': function(o, t, e) {
      'use strict';
      e.r(t);
      var a = e('IG0b'),
        n = e('k5di'),
        r = e('IEL8'),
        i = e('BPcr'),
        m = e('hoyZ'),
        l = {
          Chart: a.default,
          Line: n.default,
          Pie: r.default,
          Area: i.default,
          XProgress: m.default,
        };
      t.default = l;
    },
    '715R': function(o, t, e) {
      'use strict';
      e.r(t);
      var a = {
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
              url: 'http://49.234.61.19/uploads/code_173e1705e0c.png',
            },
          ],
          text: '二维码',
          color: 'rgba(153,153,153,1)',
          fontSize: 14,
        },
      };
      t.default = a;
    },
    'AY+0': function(o, t, e) {
      'use strict';
      e.r(t);
      var a = {
        editData: [
          { key: 'text', name: '文本', type: 'Text' },
          { key: 'speed', name: '滚动速度', type: 'Number' },
          {
            key: 'theme',
            name: '主题',
            type: 'Select',
            range: [
              { key: 'default', text: '默认' },
              { key: 'warning', text: '警告' },
              { key: 'primary', text: '主要' },
              { key: 'success', text: '成功' },
              { key: 'danger', text: '危险' },
            ],
          },
          { key: 'isClose', name: '是否可关闭', type: 'Switch' },
        ],
        config: { text: '通知栏: 趣谈前端上线啦', speed: 50, theme: 'warning', isClose: !1 },
      };
      t.default = a;
    },
    B0aN: function(o, t, e) {
      'use strict';
      e.r(t);
      var a = e('ef+k'),
        n = e('6KkG'),
        r = e('XMNe'),
        i = e('lAyZ'),
        m = { Video: a.default, Audio: n.default, Calendar: r.default, Map: i.default };
      t.default = m;
    },
    BPcr: function(o, t, e) {
      'use strict';
      e.r(t);
      var a = {
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
      t.default = a;
    },
    BiCt: function(o, t, e) {
      'use strict';
      e.r(t);
      var a = {
        editData: [
          { key: 'bgColor', name: '背景色', type: 'Color' },
          { key: 'height', name: '高度', type: 'Number' },
          { key: 'text', name: '文字', type: 'Text' },
          { key: 'color', name: '文字颜色', type: 'Color' },
          { key: 'fontSize', name: '文字大小', type: 'Number' },
        ],
        config: {
          bgColor: 'rgba(255,255,255,1)',
          text: '',
          fontSize: 16,
          color: 'rgba(210,210,210,1)',
          height: 30,
        },
      };
      t.default = a;
    },
    Ddbu: function(o, t, e) {
      'use strict';
      e.r(t);
      var a = e('OIHf'),
        n = e('UnIR'),
        r = e('pzaE'),
        i = e('5AQC'),
        m = e('BiCt'),
        l = e('XNG7'),
        y = e('a9Kj'),
        d = e('ds45'),
        u = e('AY+0'),
        p = e('715R'),
        s = e('eR8F'),
        c = e('GrwR'),
        g = e('TNQH'),
        f = {
          Carousel: a.default,
          Form: n.default,
          Header: r.default,
          Icon: i.default,
          Image: l.default,
          List: y.default,
          LongText: d.default,
          WhiteTpl: m.default,
          Notice: u.default,
          Qrcode: p.default,
          Tab: s.default,
          Text: c.default,
          RichText: g.default,
        };
      t.default = f;
    },
    FZxa: function(o, t, e) {
      'use strict';
      e.r(t);
      var a = e('qAmz'),
        n = e('KU83'),
        r = e('LP5j'),
        i = e('4ZOe'),
        m = e('VnAK'),
        l = {
          ZhuanLan: a.default,
          Tab: n.default,
          List: r.default,
          Coupons: i.default,
          CardLabel: m.default,
        };
      t.default = l;
    },
    GrwR: function(o, t, e) {
      'use strict';
      e.r(t);
      var a = {
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
      t.default = a;
    },
    IEL8: function(o, t, e) {
      'use strict';
      e.r(t);
      var a = {
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
      t.default = a;
    },
    IG0b: function(o, t, e) {
      'use strict';
      e.r(t);
      var a = {
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
      t.default = a;
    },
    KU83: function(o, t, e) {
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
    LP5j: function(o, t, e) {
      'use strict';
      e.r(t);
      var a = e('RKZ9'),
        n = {
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
      t.default = n;
    },
    OIHf: function(o, t, e) {
      'use strict';
      e.r(t);
      var a = {
        editData: [
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
          { key: 'round', name: '圆角', type: 'Number' },
          { key: 'autoPlay', name: '是否自动播放', type: 'Switch' },
          { key: 'imgList', name: '图片列表', type: 'DataList' },
        ],
        config: {
          direction: 'left',
          swipeable: !1,
          round: 0,
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
                  url: 'http://h5.dooring.cn/uploads/1_1740bd7c3dc.png',
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
                  url: 'http://h5.dooring.cn/uploads/1_1740bd7c3dc.png',
                },
              ],
            },
          ],
          tplImg: 'http://h5.dooring.cn/uploads/1_1740bd7c3dc.png',
        },
      };
      t.default = a;
    },
    'QN/O': function(o, t, e) {
      'use strict';
      e.r(t);
      var a = e('k1fw'),
        n = e('Ddbu'),
        r = e('B0aN'),
        i = e('6sgD'),
        m = e('FZxa'),
        l = Object(a.a)(
          Object(a.a)(Object(a.a)(Object(a.a)({}, n.default), r.default), i.default),
          m.default,
        );
      t.default = l;
    },
    TNQH: function(o, t, e) {
      'use strict';
      e.r(t);
      var a = {
        editData: [
          { key: 'round', name: '边框圆角', type: 'Number' },
          { key: 'borderWidth', name: '边框宽度', type: 'Number' },
          { key: 'borderColor', name: '边框颜色', type: 'Color' },
          { key: 'padding', name: '内边距', type: 'Number' },
          { key: 'content', name: '内容', type: 'RichText' },
        ],
        config: {
          round: 0,
          borderWidth: 0,
          borderColor: 'rgba(255,255,255,1)',
          padding: 0,
          content: '',
        },
      };
      t.default = a;
    },
    UnIR: function(o, t, e) {
      'use strict';
      e.r(t);
      var a = {
        editData: [
          { key: 'title', name: '标题', type: 'Text' },
          { key: 'fontSize', name: '标题大小', type: 'Number' },
          { key: 'titColor', name: '标题颜色', type: 'Color' },
          {
            key: 'titWeight',
            name: '标题粗细',
            type: 'Select',
            range: [
              { key: '300', text: '300 x 300' },
              { key: '400', text: '400 x 400' },
              { key: '500', text: '500 x 500' },
              { key: '600', text: '600 x 600' },
            ],
          },
          { key: 'bgColor', name: '背景色', type: 'Color' },
          { key: 'btnColor', name: '按钮颜色', type: 'Color' },
          { key: 'btnTextColor', name: '按钮文本颜色', type: 'Color' },
          { key: 'api', name: '表单Api地址', type: 'Text' },
          { key: 'formControls', name: '表单控件', type: 'FormItems' },
        ],
        config: {
          title: '表单定制组件',
          fontSize: 18,
          titColor: 'rgba(60,60,60,1)',
          titWeight: '400',
          bgColor: 'rgba(255,255,255,1)',
          btnColor: 'rgba(20,54,226,100)',
          btnTextColor: 'rgba(255,255,255,1)',
          api: '',
          formControls: [
            { id: '1', type: 'Text', label: '姓名', placeholder: '请输入姓名' },
            { id: '2', type: 'Number', label: '年龄', placeholder: ' 请输入年龄' },
            {
              id: '4',
              type: 'MySelect',
              label: '爱好',
              options: [
                { label: '篮球', value: '1' },
                { label: '乒乓球', value: '2' },
                { label: '健身', value: '3' },
              ],
            },
          ],
        },
      };
      t.default = a;
    },
    VnAK: function(o, t, e) {
      'use strict';
      e.r(t);
      var a = e('RKZ9'),
        n = {
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
      t.default = n;
    },
    XMNe: function(o, t, e) {
      'use strict';
      e.r(t);
      var a = {
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
      t.default = a;
    },
    XNG7: function(o, t, e) {
      'use strict';
      e.r(t);
      var a = e('k1fw'),
        n = e('p6l7'),
        r = {
          editData: [
            ...n.baseConfig,
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
          config: Object(a.a)(
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
            n.baseDefault,
          ),
        };
      t.default = r;
    },
    a9Kj: function(o, t, e) {
      'use strict';
      e.r(t);
      var a = e('k1fw'),
        n = e('p6l7'),
        r = {
          editData: [
            ...n.baseConfig,
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
          config: Object(a.a)(
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
                      url: 'http://49.234.61.19/uploads/1_1740c6fbcd9.png',
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
                      url: 'http://49.234.61.19/uploads/1_1740c6fbcd9.png',
                    },
                  ],
                },
              ],
              round: 0,
              imgSize: '80',
              fontSize: 16,
              color: 'rgba(153,153,153,1)',
            },
            n.baseDefault,
          ),
        };
      t.default = r;
    },
    ds45: function(o, t, e) {
      'use strict';
      e.r(t);
      var a = {
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
          { key: 'bgColor', name: '背景颜色', type: 'Color' },
          { key: 'padding', name: '填充间距', type: 'Number' },
          { key: 'radius', name: '背景圆角', type: 'Number' },
        ],
        config: {
          text: '我是长文本有一段故事，dooring可视化编辑器无限可能，赶快来体验吧，骚年们，奥利给~',
          color: 'rgba(60,60,60,1)',
          fontSize: 14,
          indent: 20,
          lineHeight: 1.8,
          textAlign: 'left',
          bgColor: 'rgba(255,255,255,0)',
          padding: 0,
          radius: 0,
        },
      };
      t.default = a;
    },
    eR8F: function(o, t, e) {
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
              link: 'xxxxx',
              type: 0,
              imgUrl: [
                {
                  uid: '001',
                  name: 'image.png',
                  status: 'done',
                  url: 'http://49.234.61.19/uploads/1_1740c6fbcd9.png',
                },
              ],
            },
            {
              id: '2',
              title: '趣谈小课2',
              desc: '致力于打造优质小课程',
              link: 'xxxxx',
              type: 0,
              imgUrl: [
                {
                  uid: '001',
                  name: 'image.png',
                  status: 'done',
                  url: 'http://49.234.61.19/uploads/2_1740c7033a9.png',
                },
              ],
            },
            {
              id: '3',
              title: '趣谈小课3',
              desc: '致力于打造优质小课程',
              link: 'xxxxx',
              type: 1,
              imgUrl: [
                {
                  uid: '001',
                  name: 'image.png',
                  status: 'done',
                  url: 'http://49.234.61.19/uploads/1_1740c6fbcd9.png',
                },
              ],
            },
          ],
        },
      };
      t.default = a;
    },
    'ef+k': function(o, t, e) {
      'use strict';
      e.r(t);
      var a = {
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
      t.default = a;
    },
    hoyZ: function(o, t, e) {
      'use strict';
      e.r(t);
      var a = {
        editData: [
          {
            key: 'theme',
            name: '主题',
            type: 'Select',
            range: [
              { key: 'success', text: '成功' },
              { key: 'warning', text: '警告' },
              { key: 'danger', text: '危险' },
            ],
          },
          {
            key: 'shape',
            name: '形状',
            type: 'Radio',
            range: [
              { key: 'circle', text: '圆形' },
              { key: 'line', text: '线形' },
              { key: 'semi-circle', text: '半圆形' },
            ],
          },
          { key: 'size', name: '大小', type: 'Number' },
          { key: 'percent', name: '进度值', type: 'Number', range: [0, 100] },
          { key: 'strokeWidth', name: '线条粗细', type: 'Number' },
        ],
        config: { theme: 'success', shape: 'circle', size: 200, percent: 30, strokeWidth: 10 },
      };
      t.default = a;
    },
    k5di: function(o, t, e) {
      'use strict';
      e.r(t);
      var a = {
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
      t.default = a;
    },
    lAyZ: function(o, t, e) {
      'use strict';
      e.r(t);
      var a = {
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
      t.default = a;
    },
    p6l7: function(o, t, e) {
      'use strict';
      e.r(t),
        e.d(t, 'baseConfig', function() {
          return a;
        }),
        e.d(t, 'baseDefault', function() {
          return n;
        });
      var a = [
          { key: 'baseTop', name: '纵向位移', type: 'Number' },
          { key: 'baseLeft', name: '横向位移', type: 'Number' },
          { key: 'baseRadius', name: '圆角', type: 'Number' },
          { key: 'baseRotate', name: '旋转', type: 'Number' },
          { key: 'baseScale', name: '缩放', type: 'Number' },
          { key: 'baseHeight', name: '容器高度%', type: 'Number' },
          { key: 'baseWidth', name: '容器宽度%', type: 'Number' },
        ],
        n = {
          baseTop: 0,
          baseLeft: 0,
          baseRadius: 0,
          baseRotate: 0,
          baseScale: 100,
          baseHeight: 100,
          baseWidth: 100,
        };
    },
    pzaE: function(o, t, e) {
      'use strict';
      e.r(t);
      var a = e('k1fw'),
        n = e('p6l7'),
        r = {
          editData: [
            ...n.baseConfig,
            { key: 'bgColor', name: '背景色', type: 'Color' },
            { key: 'height', name: '高度', type: 'Number' },
            { key: 'logo', name: 'logo', type: 'Upload', isCrop: !0, cropRate: 1e3 / 618 },
            { key: 'logoText', name: 'logo文字', type: 'Text' },
            { key: 'color', name: '文字颜色', type: 'Color' },
            { key: 'fontSize', name: '文字大小', type: 'Number' },
          ],
          config: Object(a.a)(
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
            n.baseDefault,
          ),
        };
      t.default = r;
    },
    qAmz: function(o, t, e) {
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

//# sourceMappingURL=37.js.map
