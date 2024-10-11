# remote-components

> 这是一个用于加载远程组件的简单库, 只支持`vue`, 不考虑其他的框架；它做到了按需加载，并且可以支持按需加载的组件的样式。 同时还配套一些常用的工具库，hooks，enums等等； 它最大的一个特点就是小，即用即加载即渲染的方式，从而减少渲染，文件加载的开销。

- [点击这里查看详细文档](https://www.wangzevw.com/docs/remote-components-lib/info.html)

## 特性

- 支持按需加载，按需加载的组件，样式也会按需加载。
- 文件小，代码较为安全，加入压缩加密死代码功能。
- 避免多次编写相同的组件，减少重复的代码。
- 配套对应的工具库，方便使用。
- 组件的参数较为完善，避免乱传参数的情况。

## 使用场景

- 多个平台/项目使用同一套组件或者代码；减少代码的重复性。后期只需维护一次远程组件即可。
- 一些公共组件拆分成远程组件，远程组件可以支持按需加载，减少文件加载的开销。从而避免浏览器卡顿。
- 配置较为完善的工具，相同的功能，可以减少重复的代码。一些常用的正则，工具等等都可以复用。

## 使用

### 使用依赖包的方式

```json
{
  "dependencies": {
    "remote-components": "file:./remote-components-lib"
    // 或者
    "remote-components": "git+https://github.com/wangxiaoze-view/remote-components-lib.git"
  }
}
```

不过想要使用`file:`的形式，那么就需要你将github源码包下载在项目的根目录

### ~~cdn的模式~~

**由于引入环境存在不确定性，因此cdn模式将不被支持**

```ts
// import 'https://remote-components-lib.vercel.app/element/LazyImage/index.css'
// import { EleLazyImage } from 'https://remote-components-lib.vercel.app/'
```

~~使用cdn的模式就需要将源码包上出到服务器或者其他地方，然后通过cdn的方式引入。 目前cdn支持的版本有：vite, webpack暂不支持~~
