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

export type TTextSelectKeyType = 'left' | 'right' | 'center';
export type TTextEditData = Array<
  ITextConfigType | IColorConfigType | INumberConfigType | ISelectConfigType<TTextSelectKeyType>
>;
export interface ITextConfig {
  text: TTextDefaultType;
  color: TColorDefaultType;
  fontSize: TNumberDefaultType;
  align: TSelectDefaultType<TTextSelectKeyType>;
  lineHeight: TNumberDefaultType;
}

export interface ITextSchema {
  editData: TTextEditData;
  config: ITextConfig;
}
const Text: ITextSchema = {
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
};
export default Text;
