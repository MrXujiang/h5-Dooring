import Chart from './Chart/template';
import XProgress from './XProgress/template';

const visualTemplate = [Chart, XProgress];

const VisualTemplate = visualTemplate.map(v => {
  return { ...v, category: 'visual' };
});
export default VisualTemplate;
