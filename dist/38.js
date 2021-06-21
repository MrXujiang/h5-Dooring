(window.webpackJsonp = window.webpackJsonp || []).push([
  [38, 46, 47, 48, 49, 51, 55, 59, 61, 63, 65, 67, 69, 71, 73],
  {
    '5AQC': function(a, t, e) {
      'use strict';
      e.r(t);
      var o = {
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
      t.default = o;
    },
    '715R': function(a, t, e) {
      'use strict';
      e.r(t);
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
              url: 'http://49.234.61.19/uploads/code_173e1705e0c.png',
            },
          ],
          text: '二维码',
          color: 'rgba(153,153,153,1)',
          fontSize: 14,
        },
      };
      t.default = o;
    },
    'AY+0': function(a, t, e) {
      'use strict';
      e.r(t);
      var o = {
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
      t.default = o;
    },
    BiCt: function(a, t, e) {
      'use strict';
      e.r(t);
      var o = {
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
      t.default = o;
    },
    Ddbu: function(a, t, e) {
      'use strict';
      e.r(t);
      var o = e('OIHf'),
        n = e('UnIR'),
        r = e('pzaE'),
        i = e('5AQC'),
        l = e('BiCt'),
        m = e('XNG7'),
        y = e('a9Kj'),
        u = e('ds45'),
        d = e('AY+0'),
        p = e('715R'),
        s = e('eR8F'),
        g = e('GrwR'),
        T = e('TNQH'),
        c = {
          Carousel: o.default,
          Form: n.default,
          Header: r.default,
          Icon: i.default,
          Image: m.default,
          List: y.default,
          LongText: u.default,
          WhiteTpl: l.default,
          Notice: d.default,
          Qrcode: p.default,
          Tab: s.default,
          Text: g.default,
          RichText: T.default,
        };
      t.default = c;
    },
    GrwR: function(a, t, e) {
      'use strict';
      e.r(t);
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
      t.default = o;
    },
    OIHf: function(a, t, e) {
      'use strict';
      e.r(t);
      var o = {
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
      t.default = o;
    },
    TNQH: function(a, t, e) {
      'use strict';
      e.r(t);
      var o = {
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
      t.default = o;
    },
    UnIR: function(a, t, e) {
      'use strict';
      e.r(t);
      var o = {
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
      t.default = o;
    },
    XNG7: function(a, t, e) {
      'use strict';
      e.r(t);
      var o = e('k1fw'),
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
          config: Object(o.a)(
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
    a9Kj: function(a, t, e) {
      'use strict';
      e.r(t);
      var o = e('k1fw'),
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
          config: Object(o.a)(
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
    ds45: function(a, t, e) {
      'use strict';
      e.r(t);
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
      t.default = o;
    },
    eR8F: function(a, t, e) {
      'use strict';
      e.r(t);
      var o = {
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
      t.default = o;
    },
    p6l7: function(a, t, e) {
      'use strict';
      e.r(t),
        e.d(t, 'baseConfig', function() {
          return o;
        }),
        e.d(t, 'baseDefault', function() {
          return n;
        });
      var o = [
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
    pzaE: function(a, t, e) {
      'use strict';
      e.r(t);
      var o = e('k1fw'),
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
          config: Object(o.a)(
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
  },
]);

//# sourceMappingURL=38.js.map
