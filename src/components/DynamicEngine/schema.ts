//_______basic___________

import { TemplateKeyType } from './template';
import { MediaTplKeyType } from './mediaTpl';
import { GraphTplKeyType } from './graphTpl';

export type BasicSchemaType =
  | 'Radio'
  | 'Switch'
  | 'DataList'
  | 'Text'
  | 'LongText'
  | 'TextArea'
  | 'Color'
  | 'Number'
  | 'Select'
  | 'MutiText'
  | 'Upload'
  | 'CardPicker';
export type BasicTemplateItem<T> = {
  type: T;
  h: number;
};
export type BasicTheme = 'warning' | 'success' | 'danger';

export type AllTemplateType = TemplateKeyType | MediaTplKeyType | GraphTplKeyType;

export type SchemaImplement = {
  [key in AllTemplateType]: SchemaBasicImplement;
};

export interface SchemaBasicImplement {
  editData: Array<any>;
  config: Object;
}

export interface BasicRangeType<T> {
  key: T;
  text: string;
}
export type BasicDataImgUrl = {
  uid: string;
  name: string;
  status: string;
  url: string;
};

export type BasicDataSource = {
  id: string;
  title: string;
  desc: string;
  link: string;
  imgUrl: BasicDataImgUrl[];
};

//____________________carousel___________

export type CarouselConfigType = {
  direction: CarouselConfigKeyType;
  swipeable: boolean;
  autoPlay: boolean;
  imgList: Array<CarouselImgType>;
  tplImg: string;
};
export type CraouselKeyType = keyof CarouselConfigType;

export type CarouselConfigKeyType = 'down' | 'left';

export interface CarouselEditItem<T extends CraouselKeyType> {
  key: T;
  name: string;
  type: BasicSchemaType;
  range?: T extends 'direction' ? Array<BasicRangeType<CarouselConfigKeyType>> : never;
}

export type CarouselImgTypeItem = BasicDataImgUrl;

export type CarouselImgType = BasicDataSource;
export interface CarouselSchema extends SchemaBasicImplement {
  editData: Array<CarouselEditItem<CraouselKeyType>>;
  config: CarouselConfigType;
}
//__________________________________________
//________________Text________________________
export type TextConfigType = {
  text: string;
  color: string;
  fontSize: number;
  align: TextAlignRangeType;
  lineHeight: number;
};
export type TextKeyType = keyof TextConfigType;
export type TextAlignRangeType = 'left' | 'center' | 'right';
export type TextRangeItem = BasicRangeType<TextAlignRangeType>;

export interface TextEditItem<T extends TextKeyType> {
  key: T;
  name: string;
  type: BasicSchemaType;
  range?: T extends 'align' ? Array<TextRangeItem> : never;
}

export interface TextSchema extends SchemaBasicImplement {
  editData: Array<TextEditItem<TextKeyType>>;
  config: TextConfigType;
}
//__________________________________________
//________________LongText________________________
export type LongTextConfigType = {
  text: string;
  fontSize: number;
  color: string;
  indent: number;
  lineHeight: number;
  textAlign: TextAlignRangeType;
};

export type LongTextKeyType = keyof LongTextConfigType;

export type LongTextRageItem = {
  key: string;
  text: string;
};

export interface LongTextEditItem<T extends LongTextKeyType> {
  key: T;
  name: string;
  type: BasicSchemaType;
  range?: Array<LongTextRageItem | number>;
  step?: number;
}

export interface LongTextSchema extends SchemaBasicImplement {
  editData: Array<LongTextEditItem<LongTextKeyType>>;
  config: LongTextConfigType;
}

//__________________________________________
//________________TAB________________________
export type TabConfigType = {
  tabs: Array<string>;
  color: string;
  activeColor: string;
  fontSize: number;
  imgSize: number;
  sourceData: Array<TabConfigSourceData>;
};

export type TabKeyType = keyof TabConfigType;

export interface TabConfigSourceData extends BasicDataSource {
  type: number;
}

export type TabEditItem<T extends TabKeyType> = {
  key: T;
  name: string;
  type: BasicSchemaType;
  isCrop?: boolean;
  cropRate?: number;
};

export interface TabSchema extends SchemaBasicImplement {
  editData: Array<TabEditItem<TabKeyType>>;
  config: TabConfigType;
}
//__________________________________________
//________________Notice________________________

export type NoticeConfigType = {
  text: string;
  link: string;
  speed: number;
  theme: NoticeEditDataThemeKey;
  isClose: boolean;
};
export type NoticeKeyType = keyof NoticeConfigType;
export type NoticeThemeRageItem = {
  key: NoticeEditDataThemeKey;
  text: string;
};
export type NoticeEditDataThemeKey = BasicTheme | 'primary' | 'default';
export type NoticeEditItem<T extends NoticeKeyType> = {
  key: T;
  name: string;
  type: BasicSchemaType;
  range?: Array<NoticeThemeRageItem>;
};
export interface NoticeSchema extends SchemaBasicImplement {
  editData: Array<NoticeEditItem<NoticeKeyType>>;
  config: NoticeConfigType;
}

//__________________________________________
//________________QRcode________________________
export type QRCodeConfigType = {
  qrcode: Array<BasicDataImgUrl>;
  text: string;
  color: string;
  fontSize: number;
};

export type QRCodeKeyType = keyof QRCodeConfigType;

export type QRCodeEditItem<T extends QRCodeKeyType> = {
  key: T;
  name: string;
  type: BasicSchemaType;
  isCrop?: boolean;
  cropRate?: number;
};

export interface QRCodeSchema extends SchemaBasicImplement {
  editData: Array<QRCodeEditItem<QRCodeKeyType>>;
  config: QRCodeConfigType;
}

//__________________________________________
//________________Footer________________________

export type FooterConfigType = {
  bgColor: string;
  text: string;
  color: string;
  align: TextAlignRangeType;
  fontSize: number;
  height: number;
};

export type FooterKeyType = keyof FooterConfigType;

export type FooterEditItem<T extends FooterKeyType> = {
  key: T;
  name: string;
  type: BasicSchemaType;
  range?: Array<TextRangeItem>;
};

export interface FooterSchema extends SchemaBasicImplement {
  editData: Array<FooterEditItem<FooterKeyType>>;
  config: FooterConfigType;
}

//__________________________________________
//________________IMGAGE________________________

export type ImageConfigType = {
  imgUrl: BasicDataImgUrl[];
  round: number;
};

export type ImageKeyType = keyof ImageConfigType;

export type ImageEditItem<T extends ImageKeyType> = {
  key: T;
  name: string;
  type: BasicSchemaType;
  isCrop?: boolean;
};

export interface ImageSchema extends SchemaBasicImplement {
  editData: Array<ImageEditItem<ImageKeyType>>;
  config: ImageConfigType;
}

//__________________________________________
//________________header________________________

export type HeaderConfigType = {
  bgColor: string;
  logo: BasicDataImgUrl[];
  logoText: string;
  fontSize: number;
  color: string;
  height: number;
};

export type HeaderKeyType = keyof HeaderConfigType;

export type HeaderEditItem<T extends HeaderKeyType> = {
  key: T;
  name: string;
  type: BasicSchemaType;
  isCrop?: boolean;
  cropRate?: number;
};

export interface HeaderSchema extends SchemaBasicImplement {
  editData: Array<HeaderEditItem<HeaderKeyType>>;
  config: HeaderConfigType;
}

//__________________________________________
//________________list________________________
export type ListConfigType = {
  sourceData: BasicDataSource[];
  round: number;
  imgSize: number;
  fontSize: number;
  color: string;
};

export type ListKeyType = keyof ListConfigType;

export type ListEditItem<T extends ListKeyType> = {
  key: T;
  name: string;
  type: BasicSchemaType;
  range?: Array<BasicRangeType<number>>;
};

export interface ListSchema extends SchemaBasicImplement {
  editData: Array<ListEditItem<ListKeyType>>;
  config: ListConfigType;
}
//__________________________________________
//________________Icon________________________

export type IconTypes =
  | 'AccountBookTwoTone'
  | 'AlertTwoTone'
  | 'ApiTwoTone'
  | 'AppstoreTwoTone'
  | 'AudioTwoTone'
  | 'BankTwoTone'
  | 'BellTwoTone'
  | 'BookTwoTone'
  | 'BugTwoTone'
  | 'BuildTwoTone'
  | 'BulbTwoTone'
  | 'CalculatorTwoTone'
  | 'CalendarTwoTone'
  | 'CameraTwoTone'
  | 'CarTwoTone'
  | 'CarryOutTwoTone'
  | 'CiCircleTwoTone'
  | 'CloudTwoTone'
  | 'CodeTwoTone'
  | 'CrownTwoTone'
  | 'CustomerServiceTwoTone'
  | 'DollarCircleTwoTone'
  | 'EnvironmentTwoTone'
  | 'ExperimentTwoTone'
  | 'FireTwoTone'
  | 'GiftTwoTone'
  | 'InsuranceTwoTone'
  | 'LikeTwoTone'
  | 'LockTwoTone'
  | 'MailTwoTone'
  | 'MessageTwoTone'
  | 'PhoneTwoTone'
  | 'PictureTwoTone'
  | 'PlaySquareTwoTone'
  | 'RedEnvelopeTwoTone'
  | 'ShopTwoTone'
  | 'TrademarkCircleTwoTone'
  | 'StarTwoTone'
  | 'SafetyCertificateTwoTone'
  | 'SettingTwoTone'
  | 'RocketTwoTone';

export type IconConfigType = {
  color: string;
  size: number;
  spin: boolean;
  type: IconTypes;
};

export type IconKeyType = keyof IconConfigType;

export type IconEditItem<T extends IconKeyType> = {
  key: T;
  name: string;
  type: BasicSchemaType;
  icons?: Array<IconTypes>;
};

export interface IconSchema extends SchemaBasicImplement {
  editData: Array<IconEditItem<IconKeyType>>;
  config: IconConfigType;
}

//__________________________________________
//________________VEDEO_______________________

export type VideoConfigType = {
  poster: Array<BasicDataImgUrl>;
  url: string;
};

export type VideoKeyType = keyof VideoConfigType;

export type VideoEditItem<T extends VideoKeyType> = {
  key: T;
  name: string;
  type: BasicSchemaType;
};

export interface VideoSchema extends SchemaBasicImplement {
  editData: Array<VideoEditItem<VideoKeyType>>;
  config: VideoConfigType;
}

//__________________________________________
//________________xprogress________________________

export type XProgressShapeType = 'circle' | 'line' | 'semi-circle';
export type XProgressConfigType = {
  theme: BasicTheme;
  shape: XProgressShapeType;
  size: number;
  percent: number;
  strokeWidth: number;
};

export type XProgressKeyType = keyof XProgressConfigType;

export type XProgressEditItem<T extends XProgressKeyType> = {
  key: T;
  name: string;
  type: BasicSchemaType;
  range?: BasicRangeType<string>[] | number[];
};

export interface XProgressSchema extends SchemaBasicImplement {
  editData: Array<XProgressEditItem<XProgressKeyType>>;
  config: XProgressConfigType;
}

//__________________________________________
//________________SCHEMA________________________

export interface SchemaType extends SchemaImplement {
  Carousel: CarouselSchema;
  Text: TextSchema;
  LongText: LongTextSchema;
  Tab: TabSchema;
  Notice: NoticeSchema;
  Qrcode: QRCodeSchema;
  Footer: FooterSchema;
  Image: ImageSchema;
  Header: HeaderSchema;
  List: ListSchema;
  Icon: IconSchema;
  Video: VideoSchema;
  XProgress: XProgressSchema;
}

const schema: SchemaType = {
  Carousel: {
    editData: [
      {
        key: 'direction',
        name: '方向',
        type: 'Radio',
        range: [
          {
            key: 'down',
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
  LongText: {
    editData: [
      {
        key: 'text',
        name: '文字',
        type: 'TextArea',
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
        key: 'indent',
        name: '首行缩进',
        type: 'Number',
        range: [0, 100],
      },
      {
        key: 'textAlign',
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
        step: 0.1,
      },
    ],
    config: {
      text: '我是长文本有一段故事，dooring可视化编辑器无限可能，赶快来体验吧，骚年们，奥利给~',
      color: 'rgba(60,60,60,1)',
      fontSize: 14,
      indent: 20,
      lineHeight: 1.8,
      textAlign: 'left',
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
        isCrop: true,
        cropRate: 1,
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
              url: 'http://io.nainor.com/uploads/1_1740c6fbcd9.png',
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
              url: 'http://io.nainor.com/uploads/2_1740c7033a9.png',
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
        isCrop: true,
        cropRate: 1,
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
        isCrop: false,
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
        isCrop: true,
        cropRate: 1000 / 618,
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
  Icon: {
    editData: [
      {
        key: 'color',
        name: '颜色',
        type: 'Color',
      },
      {
        key: 'size',
        name: '大小',
        type: 'Number',
      },
      {
        key: 'spin',
        name: '旋转动画',
        type: 'Switch',
      },
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
      color: '',
      size: 36,
      spin: false,
      type: 'CarTwoTone',
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

export default schema;
