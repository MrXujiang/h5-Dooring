import {
  IColorConfigType,
  INumberConfigType,
  ITextConfigType,
  IUploadConfigType,
  TColorDefaultType,
  TNumberDefaultType,
  TTextDefaultType,
  TUploadDefaultType,
} from '@/components/FormComponents/types';

export type TQrcodeEditData = Array<
  IUploadConfigType | ITextConfigType | IColorConfigType | INumberConfigType
>;
export interface IQrcodeConfig {
  qrcode: TUploadDefaultType;
  text: TTextDefaultType;
  color: TColorDefaultType;
  fontSize: TNumberDefaultType;
}

export interface IQrcodeSchema {
  editData: TQrcodeEditData;
  config: IQrcodeConfig;
}

const Qrcode: IQrcodeSchema = {
  editData: [
    {
      key: 'qrcode',
      name: '二维码',
      type: 'Upload',
      isCrop: true,
      cropRate: 1,
    },
    {
      key: 'text',
      name: '文字',
      type: 'Text',
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
  ],
  config: {
    qrcode: [
      {
        uid: '001',
        name: 'image.png',
        status: 'done',
        url: 'http://49.234.61.19/uploads/code_173e1705e0c.png',
      },
    ],
    text: '二维码',
    color: 'rgba(153,153,153,1)',
    fontSize: 14,
  },
};

export default Qrcode;
