import {
  IColorConfigType,
  INumberConfigType,
  ISelectConfigType,
  ITextConfigType,
  TColorDefaultType,
  TNumberDefaultType,
  TSelectDefaultType,
  TTextDefaultType,
} from '@/components/FormComponents/types';
import { baseConfig, baseDefault, ICommonBaseType } from '../../common';

export type TfooterSelectKeyType = 'left' | 'center' | 'right';

export type TFooterEditData = Array<
  IColorConfigType | INumberConfigType | ITextConfigType | ISelectConfigType<TfooterSelectKeyType>
>;
export interface IFooterConfig extends ICommonBaseType {
  bgColor: TColorDefaultType;
  text: TTextDefaultType;
  color: TColorDefaultType;
  align: TSelectDefaultType<TfooterSelectKeyType>;
  fontSize: TNumberDefaultType;
  height: TNumberDefaultType;
}

export interface IFooterSchema {
  editData: TFooterEditData;
  config: IFooterConfig;
}

const Footer: IFooterSchema = {
  editData: [
    ...baseConfig,
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
    ...baseDefault,
  },
};
export default Footer;
