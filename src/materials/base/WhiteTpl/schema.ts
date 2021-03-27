import {
  IColorConfigType,
  INumberConfigType,
  ITextConfigType,
  TColorDefaultType,
  TNumberDefaultType,
  TTextDefaultType,
} from '@/components/FormComponents/types';

export type TWhiteTplEditData = Array<IColorConfigType | INumberConfigType | ITextConfigType>;
export interface IWhiteTplConfig {
  bgColor: TColorDefaultType;
  text: TTextDefaultType;
  fontSize: TNumberDefaultType;
  color: TColorDefaultType;
  height: TNumberDefaultType;
}

export interface IWhiteTplSchema {
  editData: TWhiteTplEditData;
  config: IWhiteTplConfig;
}

const WhiteTpl: IWhiteTplSchema = {
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
    bgColor: 'rgba(255,255,255,1)',
    text: '',
    fontSize: 16,
    color: 'rgba(210,210,210,1)',
    height: 30,
  },
};

export default WhiteTpl;
