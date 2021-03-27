import {
  IColorConfigType,
  INumberConfigType,
  ITextConfigType,
  TColorDefaultType,
  TNumberDefaultType,
  TTextDefaultType,
  IRichTextConfigType,
  TRichTextDefaultType,
} from '@/components/FormComponents/types';

export type TButtonEditData = Array<
  ITextConfigType | IColorConfigType | INumberConfigType | IRichTextConfigType
>;

export interface IButtonConfig {
  round: TNumberDefaultType;
  borderWidth: TNumberDefaultType;
  padding: TNumberDefaultType;
  borderColor: TColorDefaultType;
  content: TRichTextDefaultType;
}

export interface IButtonSchema {
  editData: TButtonEditData;
  config: IButtonConfig;
}
const Button: IButtonSchema = {
  editData: [
    {
      key: 'round',
      name: '边框圆角',
      type: 'Number',
    },
    {
      key: 'borderWidth',
      name: '边框宽度',
      type: 'Number',
    },
    {
      key: 'borderColor',
      name: '边框颜色',
      type: 'Color',
    },
    {
      key: 'padding',
      name: '内边距',
      type: 'Number',
    },
    {
      key: 'content',
      name: '内容',
      type: 'RichText',
    },
  ],
  config: {
    round: 0,
    borderWidth: 0,
    borderColor: 'rgba(255,255,255,1)',
    padding: 0,
    content: '',
  },
};
export default Button;
