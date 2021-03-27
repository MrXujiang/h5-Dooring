import {
  ICardPickerConfigType,
  IColorConfigType,
  ITextConfigType,
  INumberConfigType,
  ISwitchConfigType,
  TCardPickerDefaultType,
  TColorDefaultType,
  TNumberDefaultType,
  TSwitchDefaultType,
  TTextDefaultType,
} from '@/components/FormComponents/types';

export type TIconEditData = Array<
  | IColorConfigType
  | INumberConfigType
  | ISwitchConfigType
  | ICardPickerConfigType<IconTypes>
  | ITextConfigType
>;
export interface IIconConfig {
  color: TColorDefaultType;
  size: TNumberDefaultType;
  text: TTextDefaultType;
  fontSize: TNumberDefaultType;
  fontColor: TColorDefaultType;
  spin: TSwitchDefaultType;
  link: TTextDefaultType;
  type: TCardPickerDefaultType<IconTypes>;
}

export interface IIconSchema {
  editData: TIconEditData;
  config: IIconConfig;
}

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

const Icon: IIconSchema = {
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
      key: 'text',
      name: '文本',
      type: 'Text',
    },
    {
      key: 'fontSize',
      name: '文本大小',
      type: 'Number',
    },
    {
      key: 'fontColor',
      name: '文本颜色',
      type: 'Color',
    },
    {
      key: 'link',
      name: '跳转链接',
      type: 'Text',
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
    color: 'rgba(74,144,226,1)',
    size: 36,
    text: '图标',
    fontSize: 14,
    fontColor: 'rgba(0,0,0,1)',
    link: '',
    spin: false,
    type: 'CarTwoTone',
  },
};

export default Icon;
