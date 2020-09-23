import Video from './Video/template';

const mediaTemplate = [Video];

const MediaTemplate = mediaTemplate.map(v => {
  return { ...v, category: 'media' };
});

export default MediaTemplate;
