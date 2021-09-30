import ZhuanLan from './ZhuanLan/template';
import Tab from './Tab/template';
import List from './List/template';
import Coupons from './Coupons/template';
import CardLabel from './CardLabel/template';

const basicTemplate = [ZhuanLan, List, Tab, Coupons, CardLabel];
const ShopTemplate = basicTemplate.map(v => {
  return { ...v, category: 'shop' };
});

export default ShopTemplate;
