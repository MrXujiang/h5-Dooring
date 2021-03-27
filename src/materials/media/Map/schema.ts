import {
  ITextConfigType,
  ITextAreaConfigType,
  IPosConfigType,
  TTextDefaultType,
  TPosDefaultType,
  TTextAreaDefaultType,
} from '@/components/FormComponents/types';

export type TMapEditData = Array<ITextConfigType | ITextAreaConfigType | IPosConfigType>;
export interface IMapConfig {
  ak: TTextDefaultType;
  position: TPosDefaultType;
  location: TTextAreaDefaultType;
}

export interface IMapSchema {
  editData: TMapEditData;
  config: IMapConfig;
}

const AMap: IMapSchema = {
  editData: [
    {
      key: 'ak',
      name: '百度地图AK',
      type: 'Text',
    },
    {
      key: 'position',
      name: '经纬度',
      type: 'Pos',
      placeObj: {
        text: '使用百度拾取坐标系统获取坐标',
        link: 'http://api.map.baidu.com/lbsapi/getpoint/index.html',
      },
    },
    {
      key: 'location',
      name: '地址',
      type: 'TextArea',
    },
  ],
  config: {
    ak: '你的百度地图ak',
    position: [121.444017, 31.237787],
    location: '上海市',
  },
};

export default AMap;
