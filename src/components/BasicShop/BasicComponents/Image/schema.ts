import {
  INumberConfigType,
  IUploadConfigType,
  TNumberDefaultType,
  TUploadDefaultType,
} from '@/components/PanelComponents/FormEditor/types';

export type TImageEditData = Array<IUploadConfigType | INumberConfigType>;
export interface IImageConfig {
  imgUrl: TUploadDefaultType;
  round: TNumberDefaultType;
}

export interface IImageSchema {
  editData: TImageEditData;
  config: IImageConfig;
}

const Image: IImageSchema = {
  editData: [
    {
      key: 'imgUrl',
      name: '上传',
      type: 'Upload',
      isCrop: false,
    },
    {
      key: 'round',
      name: '圆角',
      type: 'Number',
    },
  ],
  config: {
    imgUrl: [
      {
        uid: '001',
        name: 'image.png',
        status: 'done',
        url: 'http://io.nainor.com/uploads/4_1740bf4535c.png',
      },
    ],
    round: 0,
  },
};

export default Image;
