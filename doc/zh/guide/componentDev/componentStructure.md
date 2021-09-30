<!--
 * @Date: 2021-01-17 12:25:33
 * @LastEditors: chentianshang
 * @LastEditTime: 2021-01-17 19:42:42
 * @FilePath: /github-h5-Dooring/doc/zh/guide/componentDev/componentStructure.md
-->
# 组件结构

dooring的组件设计包含以下3个部分组件：

  1、component 组件主体

  2、schema 组件的DSL，结构协议层

  3、template 定义了组件的类型、外观、从属关系，后期考虑纳入schema

接下来我会介绍一个基本的组件主体设计，以为template设计，在下一章会具体介绍schema部分。


## 组件设计

我们这里拿基本的header组件来举例，如下是header组件的代码：

```jsx
interface HeaderPropTypes extends IHeaderConfig {
  isTpl: boolean;
}

const Header = memo((props: HeaderPropTypes) => {
  const { bgColor, logo, logoText, fontSize, color } = props;
  return props.isTpl ? (
    <div>
      < img style={{width: '100%'}} src={logos} alt="" />
    </div>
  ) : (
    <header className={styles.header} style={{ backgroundColor: bgColor }}>
      <div className={styles.logo}>
        < img src={logo && logo[0].url} alt={logoText} />
      </div>
      <div className={styles.title} style={{ fontSize, color }}>
        {logoText}
      </div>
    </header>
  );
});
```

我们只需要按照上面的方式编写组件即可，props是DSL定义的数据层，用来控制组件的shape，也就是组件的表现。我们看看header对应的template。

## template设计

```js
const template = {
  type: 'Header',
  h: 28,
  displayName: '页头组件'
};
export default template;
```

以上就是我们template的结构，type用来定义组件的类型，方便渲染器动态查找，h代表组件的初始化高度，我们可以自由设置。displayName是组件的中文名，用来在左侧组件面板中展示，方便用户理解，我们可以在template中自定义更多辅助信息，方便使用者更高效的使用我们的编辑器。


## schema设计

开发一个自定义组件需要包含3部分, `Component`, `Schema` 和 `Template`.  接下来我们看一下 `Header` 组件的 `Schema`.

``` js
import {
  IColorConfigType,
  INumberConfigType,
  ITextConfigType,
  IUploadConfigType,
  TColorDefaultType,
  TNumberDefaultType,
  TTextDefaultType,
  TUploadDefaultType,
} from '@/components/FormComponents/types';
import { baseConfig, baseDefault, ICommonBaseType } from '../../common';

export type THeaderEditData = Array<
  IColorConfigType | INumberConfigType | IUploadConfigType | ITextConfigType
>;
export interface IHeaderConfig extends ICommonBaseType {
  bgColor: TColorDefaultType;
  logo: TUploadDefaultType;
  logoText: TTextDefaultType;
  fontSize: TNumberDefaultType;
  color: TColorDefaultType;
  height: TNumberDefaultType;
}

export interface IHeaderSchema {
  editData: THeaderEditData;
  config: IHeaderConfig;
}

const Header: IHeaderSchema = {
  editData: [
    ...baseConfig,
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
    },
  ],
  config: {
    bgColor: 'rgba(0,0,0,1)',
    logo: [
      {
        uid: '001',
        name: 'image.png',
        status: 'done',
        url: 'http://49.234.61.19/uploads/3_1740be8a482.png',
      },
    ],
    logoText: '页头Header',
    fontSize: 20,
    color: 'rgba(255,255,255,1)',
    height: 50,
    ...baseDefault,
  },
};

export default Header;
```

`editData`表示组件的可编辑属性, 我们可以自定义哪些组件可编辑. `config`为组件接收的属性, 和`editData`数组项中的`key`一一对应.


### 组件编辑区属性类型

`Dooring`组件编辑面板有如下对应编辑类型:

- Upload  上传组件
- Text 文本框
- RichText 富文本
- TextArea 多行文本
- Number 数字输入框
- DataList 列表编辑器
- FileList 文件列表编辑器
- InteractionData 交互设置
- Color 颜色面板
- MutiText 多文本
- Select 选择下拉框
- Radio 单选框
- Switch 开关切换
- CardPicker 卡片面板
- Table 表格编辑器
- Pos 坐标编辑器
- FormItems 表单设计器

