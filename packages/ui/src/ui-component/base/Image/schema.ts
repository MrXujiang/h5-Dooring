import {
  INumberConfigType,
  IUploadConfigType,
  TNumberDefaultType,
  TUploadDefaultType,
  IColorConfigType,
  TColorDefaultType,
  ISelectConfigType,
  TSelectDefaultType,
  IPosConfigType,
  TPosDefaultType,
  TTextDefaultType,
  ITextConfigType,
} from '@/components/FormComponents/types';
import { baseConfig, baseDefault, ICommonBaseType } from '../../common';

export type TTextSelectKeyType = 'left' | 'right' | 'center';
export type TTextWeightSelectKeyType = '300' | '400' | '500' | '600';

export type TImageEditData = Array<
  | IUploadConfigType
  | INumberConfigType
  | IPosConfigType
  | ISelectConfigType<TTextSelectKeyType | TTextWeightSelectKeyType>
  | IColorConfigType
  | ITextConfigType
>;

export interface IImageConfig extends ICommonBaseType {
  translate: TPosDefaultType;
  align: TSelectDefaultType<TTextSelectKeyType>;
  titText: TTextDefaultType;
  titColor: TColorDefaultType;
  titFontSize: TNumberDefaultType;
  titFontWeight: TSelectDefaultType<TTextWeightSelectKeyType>;
  subTitText: TTextDefaultType;
  subTitColor: TColorDefaultType;
  subTitFontSize: TNumberDefaultType;
  subTitFontWeight: TSelectDefaultType<TTextWeightSelectKeyType>;
  imgUrl: TUploadDefaultType;
  round: TNumberDefaultType;
}

export interface IImageSchema {
  editData: TImageEditData;
  config: IImageConfig;
}

const Image: IImageSchema = {
  editData: [
    ...baseConfig,
    {
      key: 'translate',
      name: '文字偏移',
      type: 'Pos',
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
      key: 'titText',
      name: '标题文字',
      type: 'Text',
    },
    {
      key: 'titFontSize',
      name: '标题大小',
      type: 'Number',
    },
    {
      key: 'titColor',
      name: '标题颜色',
      type: 'Color',
    },
    {
      key: 'titFontWeight',
      name: '标题粗细',
      type: 'Select',
      range: [
        {
          key: '300',
          text: '300 x 300',
        },
        {
          key: '400',
          text: '400 x 400',
        },
        {
          key: '500',
          text: '500 x 500',
        },
        {
          key: '600',
          text: '600 x 600',
        },
      ],
    },
    {
      key: 'subTitText',
      name: '副标题文字',
      type: 'Text',
    },
    {
      key: 'subTitFontSize',
      name: '副标题大小',
      type: 'Number',
    },
    {
      key: 'subTitColor',
      name: '副标题颜色',
      type: 'Color',
    },
    {
      key: 'subTitFontWeight',
      name: '副标题粗细',
      type: 'Select',
      range: [
        {
          key: '300',
          text: '300 x 300',
        },
        {
          key: '400',
          text: '400 x 400',
        },
        {
          key: '500',
          text: '500 x 500',
        },
        {
          key: '600',
          text: '600 x 600',
        },
      ],
    },
    {
      key: 'imgUrl',
      name: '上传图片',
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
    ...baseDefault,
  },
};

export default Image;
