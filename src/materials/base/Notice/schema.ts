import {
  INumberConfigType,
  ISelectConfigType,
  ISwitchConfigType,
  ITextConfigType,
  TNumberDefaultType,
  TSelectDefaultType,
  TSwitchDefaultType,
  TTextDefaultType,
} from '@/components/FormComponents/types';

export type TNoticeSelectKeyType = 'default' | 'warning' | 'primary' | 'success' | 'danger';
export type TNoticeEditData = Array<
  ITextConfigType | INumberConfigType | ISelectConfigType<TNoticeSelectKeyType> | ISwitchConfigType
>;
export interface INoticeConfig {
  text: TTextDefaultType;
  speed: TNumberDefaultType;
  theme: TSelectDefaultType<TNoticeSelectKeyType>;
  isClose: TSwitchDefaultType;
}

export interface INoticeSchema {
  editData: TNoticeEditData;
  config: INoticeConfig;
}

const Notice: INoticeSchema = {
  editData: [
    {
      key: 'text',
      name: '文本',
      type: 'Text',
    },
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
    speed: 50,
    theme: 'warning',
    isClose: false,
  },
};

export default Notice;
