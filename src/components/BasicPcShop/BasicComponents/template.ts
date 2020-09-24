import Footer from './Footer/template';
import Header from './Header/template';
import Icon from './Icon/template';
import Image from './Image/template';
import List from './List/template';
import LongText from './LongText/template';
import Qrcode from './Qrcode/template';
import Text from './Text/template';

const basicTemplate = [
  Footer,
  Header,
  Icon,
  Image,
  List,
  LongText,
  Qrcode,
  Text,
];
const BasicTemplate = basicTemplate.map(v => {
  return { ...v, category: 'base' };
});

export default BasicTemplate;
