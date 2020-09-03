import { BasicTemplateItem } from './schema';

export type MediaTplKeyType = 'Video';
export type MediaTplType = Array<BasicTemplateItem<MediaTplKeyType>>;

const mediaTpl: MediaTplType = [
  {
    type: 'Video',
    h: 107,
  },
];

export default mediaTpl;
