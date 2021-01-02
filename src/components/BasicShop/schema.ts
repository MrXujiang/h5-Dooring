import BasicSchema from './BasicComponents/schema';
import MediaSchema from './MediaComponents/schema';
import VisualSchema from './VisualComponents/schema';
import shopSchema from './ShopComponents/schema';

const schema = {
  ...BasicSchema,
  ...MediaSchema,
  ...VisualSchema,
  ...shopSchema,
};

export default schema;
