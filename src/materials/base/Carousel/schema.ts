import {
  IDataListConfigType,
  IRadioConfigType,
  ISwitchConfigType,
  INumberConfigType,
  TDataListDefaultType,
  TRadioDefaultType,
  TSwitchDefaultType,
  TNumberDefaultType,
} from '@/components/FormComponents/types';

import { serverUrl } from '@/utils/tool';

export type CarouselDirectionKeyType = 'down' | 'left';

export type TCarouselEditData = Array<
  | IRadioConfigType<CarouselDirectionKeyType>
  | ISwitchConfigType
  | IDataListConfigType
  | INumberConfigType
>;
export interface ICarouselConfig {
  direction: TRadioDefaultType<CarouselDirectionKeyType>;
  swipeable: TSwitchDefaultType;
  autoPlay: TSwitchDefaultType;
  imgList: TDataListDefaultType;
  tplImg: string;
  round: TNumberDefaultType;
}

export interface ICarouselSchema {
  editData: TCarouselEditData;
  config: ICarouselConfig;
}

const Carousel: ICarouselSchema = {
  editData: [
    {
      key: 'direction',
      name: '方向',
      type: 'Radio',
      range: [
        {
          key: 'down',
          text: '从上到下',
        },
        {
          key: 'left',
          text: '从左到右',
        },
      ],
    },
    {
      key: 'swipeable',
      name: '是否可拖拽',
      type: 'Switch',
    },
    {
      key: 'round',
      name: '圆角',
      type: 'Number',
    },
    {
      key: 'autoPlay',
      name: '是否自动播放',
      type: 'Switch',
    },
    {
      key: 'imgList',
      name: '图片列表',
      type: 'DataList',
    },
  ],
  config: {
    direction: 'left',
    swipeable: false,
    round: 0,
    autoPlay: false,
    imgList: [
      {
        id: '1',
        title: '趣谈小课1',
        desc: '致力于打造优质小课程',
        link: 'xxxxx',
        imgUrl: [
          {
            uid: '001',
            name: 'image.png',
            status: 'done',
            url: `${serverUrl}/uploads/1_1740bd7c3dc.png`,
          },
        ],
      },
      {
        id: '2',
        title: '趣谈小课1',
        desc: '致力于打造优质小课程',
        link: 'xxxxx',
        imgUrl: [
          {
            uid: '001',
            name: 'image.png',
            status: 'done',
            url: `${serverUrl}/uploads/2_1740bd8d525.png`,
          },
        ],
      },
    ],
    tplImg: `${serverUrl}/uploads/carousal_17442e1420f.png`,
  },
};
export default Carousel;
