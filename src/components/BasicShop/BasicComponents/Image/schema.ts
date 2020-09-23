import {
  INumberConfigType,
  IUploadConfigType,
  TNumberDefaultType,
  TUploadDefaultType,
} from '@/components/PanelComponents/FormEditor/types';
import { baseConfig, baseDefault, ICommonBaseType } from '../../common';

export type TImageEditData = Array<IUploadConfigType | INumberConfigType>;
export interface IImageConfig extends ICommonBaseType {
  imgUrl: TUploadDefaultType;
  round: TNumberDefaultType;
}

export interface IImageSchema {
  editData: TImageEditData;
  config: IImageConfig;
}

const Image: IImageSchema = {
  editData: [
    ...baseConfig,
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
    ...baseDefault,
  },
};

export default Image;
