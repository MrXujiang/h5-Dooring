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
