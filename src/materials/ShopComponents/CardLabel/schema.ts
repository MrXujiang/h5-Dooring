import {
  IColorConfigType,
  INumberConfigType,
  ITextConfigType,
  ITextAreaConfigType,
  IUploadConfigType,
  IRichTextConfigType,
  TColorDefaultType,
  TNumberDefaultType,
  TTextDefaultType,
  TUploadDefaultType,
} from '@/components/FormComponents/types';

import { serverUrl } from '@/utils/tool';

export type TZLEditData = Array<
  | IUploadConfigType
  | ITextConfigType
  | IColorConfigType
  | INumberConfigType
  | ITextAreaConfigType
  | IRichTextConfigType
>;
export interface IZLConfig {
  imgUrl: TUploadDefaultType;
  title: TTextDefaultType;
  titColor: TColorDefaultType;
  desc: TTextDefaultType;
  round: TNumberDefaultType;
  bgColor: TColorDefaultType;
  frontColor: TColorDefaultType;
  link: TTextDefaultType;
}

export interface ICardSchema {
  editData: TZLEditData;
  config: IZLConfig;
}

const CardLabel: ICardSchema = {
  editData: [
    {
      key: 'imgUrl',
      name: '图片',
      type: 'Upload',
    },
    {
      key: 'title',
      name: '标题',
      type: 'Text',
    },
    {
      key: 'titColor',
      name: '标题颜色',
      type: 'Color',
    },
    {
      key: 'desc',
      name: '描述',
      type: 'Text',
    },
    {
      key: 'round',
      name: '圆角',
      type: 'Number',
    },
    {
      key: 'bgColor',
      name: '背景色',
      type: 'Color',
    },
    {
      key: 'frontColor',
      name: '前景色',
      type: 'Color',
    },
    {
      key: 'link',
      name: '跳转链接',
      type: 'Text',
    },
  ],
  config: {
    imgUrl: [
      {
        uid: '001',
        name: 'image.png',
        status: 'done',
        url: `${serverUrl}/uploads/1_1740c6fbcd9.png`,
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

export default CardLabel;
