import {
  ITextConfigType,
  INumberConfigType,
  TTextDefaultType,
  TNumberDefaultType,
} from '@/components/FormComponents/types';

export type TAudioEditData = Array<INumberConfigType | ITextConfigType>;
export interface IAudioConfig {
  height: TNumberDefaultType;
  url: TTextDefaultType;
}

export interface IAudioSchema {
  editData: TAudioEditData;
  config: IAudioConfig;
}

const Audio: IAudioSchema = {
  editData: [
    {
      key: 'height',
      name: '音频高度',
      type: 'Number',
    },
    {
      key: 'url',
      name: '音频链接',
      type: 'Text',
    },
  ],
  config: {
    height: 32,
    url: 'http://io.nainor.com/audio.mp3',
  },
};

export default Audio;
