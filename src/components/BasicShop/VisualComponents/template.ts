import Chart from './Chart/template';
import Line from './Line/template';
import Pie from './Pie/template';
import Area from './Area/template';
import XProgress from './XProgress/template';

const visualTemplate = [Chart, Line, Pie, Area, XProgress];

const VisualTemplate = visualTemplate.map(v => {
  return { ...v, category: 'visual' };
});
export default VisualTemplate;
