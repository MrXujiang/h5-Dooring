import {
  IColorConfigType,
  INumberConfigType,
  ITableConfigType,
  ITextConfigType,
  TColorDefaultType,
  TNumberDefaultType,
  TTableDefaultType,
  TTextDefaultType,
} from '@/components/FormComponents/types';

export type TChartEditData = Array<
  ITextConfigType | INumberConfigType | IColorConfigType | ITableConfigType
>;
export interface IChartConfig {
  title: TTextDefaultType;
  size: TNumberDefaultType;
  color: TColorDefaultType;
  paddingTop: TNumberDefaultType;
  data: TTableDefaultType;
}

export interface IChartSchema {
  editData: TChartEditData;
  config: IChartConfig;
}

const Chart: IChartSchema = {
  editData: [
    {
      key: 'title',
      name: '标题',
      type: 'Text',
    },
    {
      key: 'size',
      name: '标题大小',
      type: 'Number',
    },
    {
      key: 'color',
      name: '标题颜色',
      type: 'Color',
    },
    {
      key: 'paddingTop',
      name: '上边距',
      type: 'Number',
    },
    {
      key: 'data',
      name: '数据源',
      type: 'Table',
    },
  ],
  config: {
    title: '饼图',
    size: 14,
    color: 'rgba(0,0,0,1)',
    paddingTop: 10,
    data: [
      {
        name: 'A',
        value: 20,
      },
      {
        name: 'B',
        value: 60,
      },
      {
        name: 'C',
        value: 20,
      },
      {
        name: 'D',
        value: 80,
      },
    ],
  },
};

export default Chart;
