import { BasicTemplateItem } from './schema';

export type GraphTplKeyType = 'XProgress';
export type GraphTplType = Array<BasicTemplateItem<GraphTplKeyType>>;

const graphTpl: GraphTplType = [
  {
    type: 'XProgress',
    h: 102,
  },
];

export default graphTpl;
