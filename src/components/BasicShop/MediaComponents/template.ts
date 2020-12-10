import Video from './Video/template';
import Audio from './Audio/template';

const mediaTemplate = [Video, Audio];

const MediaTemplate = mediaTemplate.map(v => {
  return { ...v, category: 'media' };
});

export default MediaTemplate;
