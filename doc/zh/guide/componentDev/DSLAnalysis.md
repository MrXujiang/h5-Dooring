# DSL设计

DSL层主要约定了Dooring组件的数据协议，包括组件的可编辑属性、编辑类型、初始值等，之所以定义一致的协议层，主要是方便后期的组件扩展，配置后移，有助于不同后端语言开发和数据存储，接下来我们看看header组件的schema。

1.editData 可编辑的属性类型DSL

2.config 可编辑组件的默认属性

```js
const Header: IHeaderSchema = {
  editData: [
    {
      key: 'bgColor',
      name: '背景色',
      type: 'Color',
    },
    {
      key: 'height',
      name: '高度',
      type: 'Number',
    },
    {
      key: 'logo',
      name: 'logo',
      type: 'Upload',
      isCrop: true,
      cropRate: 1000 / 618,
    },
    {
      key: 'logoText',
      name: 'logo文字',
      type: 'Text',
    },
    {
      key: 'color',
      name: '文字颜色',
      type: 'Color',
    },
    {
      key: 'fontSize',
      name: '文字大小',
      type: 'Number',
    }
  ],
  config: {
    bgColor: 'rgba(245,245,245,1)',
    logo: [
      {
        uid: '001',
        name: 'image.png',
        status: 'done',
        url: `${serverUrl}/uploads/3_1740be8a482.png`,
      },
    ],
    logoText: '页头Header',
    fontSize: 20,
    color: 'rgba(47,84,235,1)',
    height: 50
  },
};
```

由以上代码可知，我们可以在editData属性中给组件添加可编辑的属性，比如背景图，然后再component中接受属性从而设置样式。

在config属性中，我们可以设置组件默认属性值，和editData中每一项的key一一对应。
