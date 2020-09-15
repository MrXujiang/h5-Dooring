import { BasicTemplateItem } from './schema';

export type GraphTplKeyType = 'XProgress' | 'Chart';
export type GraphTplType = Array<BasicTemplateItem<GraphTplKeyType>>;

const graphTpl: GraphTplType = [
  {
    type: 'XProgress',
    h: 102,
  },
  {
    type: 'Chart',
    h: 102,
  },
];

export default graphTpl;
