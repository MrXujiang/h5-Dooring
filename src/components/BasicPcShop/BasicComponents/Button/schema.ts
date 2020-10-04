import {
  IColorConfigType,
  INumberConfigType,
  ISelectConfigType,
  ITextConfigType,
  TColorDefaultType,
  TNumberDefaultType,
  TSelectDefaultType,
  TTextDefaultType,
} from '@/components/PanelComponents/FormEditor/types';

export type TButtonSelectKeyType = 'left' | 'center' | 'right';

export type TButtonEditData = Array<
  IColorConfigType | INumberConfigType | ITextConfigType | ISelectConfigType<TButtonSelectKeyType>
>;
export interface IButtonConfig {
  bgColor: TColorDefaultType;
  text: TTextDefaultType;
  color: TColorDefaultType;
  align: TSelectDefaultType<TButtonSelectKeyType>;
  fontSize: TNumberDefaultType;
  height: TNumberDefaultType;
  type: any;
}

export interface IButtonSchema {
  editData: TButtonEditData;
  config: IButtonConfig;
}

const Button: IButtonSchema = {
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
    text: '按钮 button 按钮 button 按钮 button',
    color: 'rgba(255,255,255,1)',
    align: 'center',
    fontSize: 16,
    height: 48,
    type: 'primary',
  },
};
export default Button;
