import {
  IColorConfigType,
  IDataListConfigType,
  IMutiTextConfigType,
  INumberConfigType,
  TColorDefaultType,
  TDataListDefaultType,
  TMutiTextDefaultType,
  TNumberDefaultType,
} from '@/components/FormComponents/types';

export type TTabEditData = Array<
  IMutiTextConfigType | IColorConfigType | INumberConfigType | IDataListConfigType
>;
export interface ITabConfig {
  tabs: TMutiTextDefaultType;
  color: TColorDefaultType;
  activeColor: TColorDefaultType;
  fontSize: TNumberDefaultType;
  imgSize: TNumberDefaultType;
  sourceData: TDataListDefaultType;
}

export interface ITabSchema {
  editData: TTabEditData;
  config: ITabConfig;
}

const Tab: ITabSchema = {
  editData: [
    {
      key: 'tabs',
      name: '项目类别',
      type: 'MutiText',
    },
    {
      key: 'activeColor',
      name: '激活颜色',
      type: 'Color',
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
    {
      key: 'imgSize',
      name: '图片大小',
      type: 'Number',
    },
    {
      key: 'sourceData',
      name: '数据源',
      type: 'DataList',
    },
  ],
  config: {
    tabs: ['类别一', '类别二'],
    color: 'rgba(153,153,153,1)',
    activeColor: 'rgba(0,102,204,1)',
    fontSize: 16,
    imgSize: 100,
    sourceData: [
      {
        id: '1',
        title: '趣谈小课1',
        desc: '致力于打造优质小课程',
        link: 'xxxxx',
        type: 0,
        imgUrl: [
          {
            uid: '001',
            name: 'image.png',
            status: 'done',
            url: 'http://49.234.61.19/uploads/1_1740c6fbcd9.png',
          },
        ],
      },
      {
        id: '2',
        title: '趣谈小课2',
        desc: '致力于打造优质小课程',
        link: 'xxxxx',
        type: 0,
        imgUrl: [
          {
            uid: '001',
            name: 'image.png',
            status: 'done',
            url: 'http://49.234.61.19/uploads/2_1740c7033a9.png',
          },
        ],
      },
      {
        id: '3',
        title: '趣谈小课3',
        desc: '致力于打造优质小课程',
        link: 'xxxxx',
        type: 1,
        imgUrl: [
          {
            uid: '001',
            name: 'image.png',
            status: 'done',
            url: 'http://49.234.61.19/uploads/1_1740c6fbcd9.png',
          },
        ],
      },
    ],
  },
};

export default Tab;
