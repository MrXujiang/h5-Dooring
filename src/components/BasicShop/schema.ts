import BasicSchema from './BasicComponents/schema';
import MediaSchema from './MediaComponents/schema';
import VisualSchema from './VisualComponents/schema';

const schema = {
  ...BasicSchema,
  ...MediaSchema,
  ...VisualSchema,
};

export default schema;
