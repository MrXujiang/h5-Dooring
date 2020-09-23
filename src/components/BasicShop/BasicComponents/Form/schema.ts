import {
  IColorConfigType,
  IFormItemsConfigType,
  INumberConfigType,
  ITextConfigType,
  TColorDefaultType,
  TFormItemsDefaultType,
  TNumberDefaultType,
  TTextDefaultType,
} from '@/components/PanelComponents/FormEditor/types';
import { baseConfig, baseDefault, ICommonBaseType } from '../../common';

export type TFormEditData = Array<
  ITextConfigType | INumberConfigType | IColorConfigType | ITextConfigType | IFormItemsConfigType
>;
export interface IFormConfig extends ICommonBaseType {
  title: TTextDefaultType;
  fontSize: TNumberDefaultType;
  titColor: TColorDefaultType;
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
    ...baseConfig,
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
    bgColor: 'rgba(255,255,255,1)',
    btnColor: 'rgba(129,173,173,1)',
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
          { label: '选项一', value: '1' },
          { label: '选项二', value: '2' },
          { label: '选项三', value: '3' },
        ],
      },
    ],
    ...baseDefault,
  },
};
export default Form;
