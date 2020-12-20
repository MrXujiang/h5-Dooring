import Video from './Video/template';
import Audio from './Audio/template';
import Map from './Map/template';

const mediaTemplate = [Video, Audio, Map];

const MediaTemplate = mediaTemplate.map(v => {
  return { ...v, category: 'media' };
});

export default MediaTemplate;
