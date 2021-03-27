import BasicSchema from './base/schema';
import MediaSchema from './media/schema';
import VisualSchema from './visual/schema';
import shopSchema from './ShopComponents/schema';

const schema = {
  ...BasicSchema,
  ...MediaSchema,
  ...VisualSchema,
  ...shopSchema,
};

export default schema;
