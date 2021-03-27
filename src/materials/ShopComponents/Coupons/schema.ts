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
  TTextAreaDefaultType,
  TRichTextDefaultType,
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
  bgColor: TColorDefaultType;
  money: TNumberDefaultType;
  link: TTextDefaultType;
  ifText: TTextDefaultType;
  dealTime: TTextAreaDefaultType;
  desc: TTextAreaDefaultType;
}

export interface ICardSchema {
  editData: TZLEditData;
  config: IZLConfig;
}

const ZhuanLan: ICardSchema = {
  editData: [
    {
      key: 'bgColor',
      name: '背景颜色',
      type: 'Color',
    },
    {
      key: 'money',
      name: '优惠金额',
      type: 'Number',
    },
    {
      key: 'ifText',
      name: '优惠条件',
      type: 'Text',
    },
    {
      key: 'dealTime',
      name: '有效期',
      type: 'TextArea',
    },
    {
      key: 'desc',
      name: '提示信息',
      type: 'TextArea',
    },
    {
      key: 'link',
      name: '跳转链接',
      type: 'Text',
    },
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

export default ZhuanLan;
