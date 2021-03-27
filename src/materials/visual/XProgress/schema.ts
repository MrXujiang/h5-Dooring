import {
  INumberConfigType,
  IRadioConfigType,
  ISelectConfigType,
  TNumberDefaultType,
  TRadioDefaultType,
  TSelectDefaultType,
} from '@/components/FormComponents/types';
export type TXProgressSelectKeyType = 'success' | 'warning' | 'danger';
export type TXProgressRadiotKeyType = 'circle' | 'line' | 'semi-circle';
export type TXProgressEditData = Array<
  | ISelectConfigType<TXProgressSelectKeyType>
  | IRadioConfigType<TXProgressRadiotKeyType>
  | INumberConfigType
>;
export interface IXProgressConfig {
  theme: TSelectDefaultType<TXProgressSelectKeyType>;
  shape: TRadioDefaultType<TXProgressRadiotKeyType>;
  size: TNumberDefaultType;
  percent: TNumberDefaultType;
  strokeWidth: TNumberDefaultType;
}

export interface IXProgressSchema {
  editData: TXProgressEditData;
  config: IXProgressConfig;
}

const XProgress: IXProgressSchema = {
  editData: [
    {
      key: 'theme',
      name: '主题',
      type: 'Select',
      range: [
        {
          key: 'success',
          text: '成功',
        },
        {
          key: 'warning',
          text: '警告',
        },
        {
          key: 'danger',
          text: '危险',
        },
      ],
    },
    {
      key: 'shape',
      name: '形状',
      type: 'Radio',
      range: [
        {
          key: 'circle',
          text: '圆形',
        },
        {
          key: 'line',
          text: '线形',
        },
        {
          key: 'semi-circle',
          text: '半圆形',
        },
      ],
    },
    {
      key: 'size',
      name: '大小',
      type: 'Number',
    },
    {
      key: 'percent',
      name: '进度值',
      type: 'Number',
      range: [0, 100],
    },
    {
      key: 'strokeWidth',
      name: '线条粗细',
      type: 'Number',
    },
  ],
  config: {
    theme: 'success',
    shape: 'circle',
    size: 200,
    percent: 30,
    strokeWidth: 10,
  },
};

export default XProgress;
