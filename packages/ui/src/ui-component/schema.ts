import BasicSchema from './base/schema';
import MediaSchema from './media/schema';
import VisualSchema from './visual/schema';
import ShopSchema from './shop/schema';

const schema = {
  ...BasicSchema,
  ...MediaSchema,
  ...VisualSchema,
  ...ShopSchema,
};

export default schema;
