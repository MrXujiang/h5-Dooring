//_______basic___________

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
  | 'Table'
  | 'CardPicker';
export type BasicTemplateItem<T> = {
  type: T;
  h: number;
};
export type BasicTheme = 'warning' | 'success' | 'danger';
type TemplateKeyType =
  | 'Text'
  | 'LongText'
  | 'Carousel'
  | 'Tab'
  | 'Notice'
  | 'Qrcode'
  | 'Icon'
  | 'Image'
  | 'Header'
  | 'List'
  | 'Footer';
type MediaTplKeyType = 'Video';
type GraphTplKeyType = 'XProgress' | 'Chart';
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
//________________xchart________________________

export type XChartDataItem = {
  name: string;
  value: string | number;
};

export type XChartEditItem = {
  key: string;
  name: string;
  type: BasicSchemaType;
  range?: BasicRangeType<string>[] | number[];
};

export type XChartConfigType = {
  title: string;
  size: number;
  color: string;
  paddingTop: number;
  data: Array<XChartDataItem>;
};

export interface XChartSchema extends SchemaBasicImplement {
  editData: Array<XChartEditItem>;
  config: XChartConfigType;
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
  Chart: XChartSchema;
}
