import {
  IColorConfigType,
  IFormItemsConfigType,
  INumberConfigType,
  ITextConfigType,
  TColorDefaultType,
  TFormItemsDefaultType,
  TNumberDefaultType,
  TSelectDefaultType,
  ISelectConfigType,
  TTextDefaultType,
} from '@/components/FormComponents/types';

export type TTextWeightSelectKeyType = '300' | '400' | '500' | '600';

export type TFormEditData = Array<
  | ITextConfigType
  | INumberConfigType
  | IColorConfigType
  | ITextConfigType
  | IFormItemsConfigType
  | ISelectConfigType<TTextWeightSelectKeyType>
>;
export interface IFormConfig {
  title: TTextDefaultType;
  fontSize: TNumberDefaultType;
  titColor: TColorDefaultType;
  titWeight: TSelectDefaultType<TTextWeightSelectKeyType>;
  bgColor: TColorDefaultType;
  btnColor: TColorDefaultType;
  btnTextColor: TColorDefaultType;
  api: TTextDefaultType;
  formControls: TFormItemsDefaultType;
}

export interface IFormSchema {
  editData: TFormEditData;
  config: IFormConfig;
}

const Form: IFormSchema = {
  editData: [
    {
      key: 'title',
      name: '标题',
      type: 'Text',
    },
    {
      key: 'fontSize',
      name: '标题大小',
      type: 'Number',
    },
    {
      key: 'titColor',
      name: '标题颜色',
      type: 'Color',
    },
    {
      key: 'titWeight',
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
      key: 'bgColor',
      name: '背景色',
      type: 'Color',
    },
    {
      key: 'btnColor',
      name: '按钮颜色',
      type: 'Color',
    },
    {
      key: 'btnTextColor',
      name: '按钮文本颜色',
      type: 'Color',
    },
    {
      key: 'api',
      name: '表单Api地址',
      type: 'Text',
    },
    {
      key: 'formControls',
      name: '表单控件',
      type: 'FormItems',
    },
  ],
  config: {
    title: '表单定制组件',
    fontSize: 18,
    titColor: 'rgba(60,60,60,1)',
    titWeight: '400',
    bgColor: 'rgba(255,255,255,1)',
    btnColor: 'rgba(20,54,226,100)',
    btnTextColor: 'rgba(255,255,255,1)',
    api: '',
    formControls: [
      {
        id: '1',
        type: 'Text',
        label: '姓名',
        placeholder: '请输入姓名',
      },
      {
        id: '2',
        type: 'Number',
        label: '年龄',
        placeholder: ' 请输入年龄',
      },
      {
        id: '4',
        type: 'MySelect',
        label: '爱好',
        options: [
          { label: '篮球', value: '1' },
          { label: '乒乓球', value: '2' },
          { label: '健身', value: '3' },
        ],
      },
    ],
  },
};
export default Form;
