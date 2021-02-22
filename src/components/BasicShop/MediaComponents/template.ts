import Video from './Video/template';
import Audio from './Audio/template';
import Map from './Map/template';
import Calendar from './Calendar/template';

const mediaTemplate = [Video, Audio, Map, Calendar];

const MediaTemplate = mediaTemplate.map(v => {
  return { ...v, category: 'media' };
});

export default MediaTemplate;
