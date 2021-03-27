import {
  ITextConfigType,
  IUploadConfigType,
  TTextDefaultType,
  TUploadDefaultType,
} from '@/components/FormComponents/types';

export type TVideoEditData = Array<IUploadConfigType | ITextConfigType>;
export interface IVideoConfig {
  poster: TUploadDefaultType;
  url: TTextDefaultType;
}

export interface IVideoSchema {
  editData: TVideoEditData;
  config: IVideoConfig;
}

const Video: IVideoSchema = {
  editData: [
    {
      key: 'poster',
      name: '视频封面',
      type: 'Upload',
    },
    {
      key: 'url',
      name: '视频链接',
      type: 'Text',
    },
  ],
  config: {
    poster: [
      {
        uid: '001',
        name: 'image.png',
        status: 'done',
        url: 'http://49.234.61.19/uploads/1_1740c6fbcd9.png',
      },
    ],
    url: '',
  },
};

export default Video;
