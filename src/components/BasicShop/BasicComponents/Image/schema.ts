const Image = {
  editData: [
    {
      key: 'imgUrl',
      name: '上传',
      type: 'Upload',
      isCrop: false,
    },
    {
      key: 'round',
      name: '圆角',
      type: 'Number',
    },
  ],
  config: {
    imgUrl: [
      {
        uid: '001',
        name: 'image.png',
        status: 'done',
        url: 'http://io.nainor.com/uploads/4_1740bf4535c.png',
      },
    ],
    round: 0,
  },
};

export default Image;
