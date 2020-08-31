export default {
  Carousel: {
    editData: [
      {
        key: 'direction',
        name: '方向',
        type: 'Radio',
        range: [
          {
            key: 'top',
            text: '从上到下',
          },
          {
            key: 'left',
            text: '从左到右',
          },
        ],
      },
      {
        key: 'swipeable',
        name: '是否可拖拽',
        type: 'Switch',
      },
      {
        key: 'autoPlay',
        name: '是否自动播放',
        type: 'Switch',
      },
      {
        key: 'imgList',
        name: '图片列表',
        type: 'DataList',
      },
    ],
    config: {
      direction: 'left',
      swipeable: false,
      autoPlay: false,
      imgList: [
        {
          id: 1,
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
          id: 2,
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
      tplImg: 'http://io.nainor.com/uploads/carousal_17442e1420f.png',
    },
  },
  Text: {
    editData: [
      {
        key: 'text',
        name: '文字',
        type: 'Text',
      },
      {
        key: 'color',
        name: '标题颜色',
        type: 'Color',
      },
      {
        key: 'fontSize',
        name: '字体大小',
        type: 'Number',
      },
      {
        key: 'align',
        name: '对齐方式',
        type: 'Select',
        range: [
          {
            key: 'left',
            text: '左对齐',
          },
          {
            key: 'center',
            text: '居中对齐',
          },
          {
            key: 'right',
            text: '右对齐',
          },
        ],
      },
      {
        key: 'lineHeight',
        name: '行高',
        type: 'Number',
      },
    ],
    config: {
      text: '我是文本',
      color: 'rgba(60,60,60,1)',
      fontSize: 18,
      align: 'center',
      lineHeight: 2,
    },
  },
  Tab: {
    editData: [
      {
        key: 'tabs',
        name: '项目类别',
        type: 'MutiText',
      },
      {
        key: 'activeColor',
        name: '激活颜色',
        type: 'Color',
      },
      {
        key: 'color',
        name: '文字颜色',
        type: 'Color',
      },
      {
        key: 'fontSize',
        name: '文字大小',
        type: 'Number',
      },
      {
        key: 'imgSize',
        name: '图片大小',
        type: 'Number',
      },
      {
        key: 'sourceData',
        name: '数据源',
        type: 'DataList',
      },
    ],
    config: {
      tabs: ['类别一', '类别二'],
      color: 'rgba(153,153,153,1)',
      activeColor: 'rgba(0,102,204,1)',
      fontSize: 16,
      imgSize: 100,
      sourceData: [
        {
          id: 1,
          title: '趣谈小课1',
          desc: '致力于打造优质小课程',
          link: 'xxxxx',
          type: 0,
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
          id: 2,
          title: '趣谈小课2',
          desc: '致力于打造优质小课程',
          link: 'xxxxx',
          type: 0,
          imgUrl: [
            {
              uid: '001',
              name: 'image.png',
              status: 'done',
              url: 'http://io.nainor.com/uploads/2_1740c7033a9.png',
            },
          ],
        },
        {
          id: 3,
          title: '趣谈小课3',
          desc: '致力于打造优质小课程',
          link: 'xxxxx',
          type: 1,
          imgUrl: [
            {
              uid: '001',
              name: 'image.png',
              status: 'done',
              url: 'http://io.nainor.com/uploads/1_1740c6fbcd9.png',
            },
          ],
        },
      ],
    },
  },
  Notice: {
    editData: [
      {
        key: 'text',
        name: '文本',
        type: 'Text',
      },
      // {
      //   "key": "link",
      //   "name": "链接",
      //   "type": "Text"
      // },
      {
        key: 'speed',
        name: '滚动速度',
        type: 'Number',
      },
      {
        key: 'theme',
        name: '主题',
        type: 'Select',
        range: [
          {
            key: 'default',
            text: '默认',
          },
          {
            key: 'warning',
            text: '警告',
          },
          {
            key: 'primary',
            text: '主要',
          },
          {
            key: 'success',
            text: '成功',
          },
          {
            key: 'danger',
            text: '危险',
          },
        ],
      },
      {
        key: 'isClose',
        name: '是否可关闭',
        type: 'Switch',
      },
    ],
    config: {
      text: '通知栏: 趣谈前端上线啦',
      link: '',
      speed: 50,
      theme: 'warning',
      isClose: false,
    },
  },
  Qrcode: {
    editData: [
      {
        key: 'qrcode',
        name: '二维码',
        type: 'Upload',
      },
      {
        key: 'text',
        name: '文字',
        type: 'Text',
      },
      {
        key: 'color',
        name: '文字颜色',
        type: 'Color',
      },
      {
        key: 'fontSize',
        name: '文字大小',
        type: 'Number',
      },
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
  },
  Footer: {
    editData: [
      {
        key: 'bgColor',
        name: '背景色',
        type: 'Color',
      },
      {
        key: 'height',
        name: '高度',
        type: 'Number',
      },
      {
        key: 'text',
        name: '文字',
        type: 'Text',
      },
      {
        key: 'fontSize',
        name: '字体大小',
        type: 'Number',
      },
      {
        key: 'color',
        name: '文字颜色',
        type: 'Color',
      },
      {
        key: 'align',
        name: '对齐方式',
        type: 'Select',
        range: [
          {
            key: 'left',
            text: '左对齐',
          },
          {
            key: 'center',
            text: '居中对齐',
          },
          {
            key: 'right',
            text: '右对齐',
          },
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
  },
  Image: {
    editData: [
      {
        key: 'imgUrl',
        name: '上传',
        type: 'Upload',
      },
      {
        key: 'round',
        name: '圆角',
        type: 'Number',
      },
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
  },
  Header: {
    editData: [
      {
        key: 'bgColor',
        name: '背景色',
        type: 'Color',
      },
      {
        key: 'height',
        name: '高度',
        type: 'Number',
      },
      {
        key: 'logo',
        name: 'logo',
        type: 'Upload',
      },
      {
        key: 'logoText',
        name: 'logo文字',
        type: 'Text',
      },
      {
        key: 'color',
        name: '文字颜色',
        type: 'Color',
      },
      {
        key: 'fontSize',
        name: '文字大小',
        type: 'Number',
      },
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
  },
  List: {
    editData: [
      {
        key: 'sourceData',
        name: '数据源',
        type: 'DataList',
      },
      {
        key: 'round',
        name: '圆角',
        type: 'Number',
      },
      {
        key: 'imgSize',
        name: '图片大小',
        type: 'Select',
        range: [
          {
            key: 60,
            text: '60 x 60',
          },
          {
            key: 80,
            text: '80 x 80',
          },
          {
            key: 100,
            text: '100 x 100',
          },
          {
            key: 120,
            text: '120 x 120',
          },
          {
            key: 150,
            text: '150 x 150',
          },
        ],
      },
      {
        key: 'fontSize',
        name: '文字大小',
        type: 'Number',
      },
      {
        key: 'color',
        name: '文字颜色',
        type: 'Color',
      },
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
      imgSize: 80,
      fontSize: 16,
      color: 'rgba(153,153,153,1)',
    },
  },
  Video: {
    editData: [
      {
        key: 'poster',
        name: '视频封面',
        type: 'Upload',
      },
      {
        key: 'url',
        name: '视频链接',
        type: 'Text',
      },
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
  },
  XProgress: {
    editData: [
      {
        key: 'theme',
        name: '主题',
        type: 'Select',
        range: [
          {
            key: 'success',
            text: '成功',
          },
          {
            key: 'warning',
            text: '警告',
          },
          {
            key: 'danger',
            text: '危险',
          },
        ],
      },
      {
        key: 'shape',
        name: '形状',
        type: 'Radio',
        range: [
          {
            key: 'circle',
            text: '圆形',
          },
          {
            key: 'line',
            text: '线形',
          },
          {
            key: 'semi-circle',
            text: '半圆形',
          },
        ],
      },
      {
        key: 'size',
        name: '大小',
        type: 'Number',
      },
      {
        key: 'percent',
        name: '进度值',
        type: 'Number',
        range: [0, 100],
      },
      {
        key: 'strokeWidth',
        name: '线条粗细',
        type: 'Number',
      },
    ],
    config: {
      theme: 'success',
      shape: 'circle',
      size: 200,
      percent: 30,
      strokeWidth: 10,
    },
  },
};
