# sim-admin

> **`admin` 将不再继续更新维护。 [pro版本已上线](https://wangxiaoze.cn/admin-pro/)，更多功能详看`pro`版本。**

## Pro版本与Admin 有什么区别

1. pro在admin的基础上开发了更多的功能，重构了路由以及性能。
2. 登陆页面改为多模板登录，您可以选择喜欢的模板进行登录
3. 支持新功能预知道，提前了解新功能预告。
4. 重构路由，按照功能模块进行分配。
5. "Rsbuild"升级为"vite"，为后期的Vite8铺路。
6. 添加更多的模块联邦相关功能，支持远程组件，共享枚举，共享 hooks，共享方法。
7. **admin不在进行更新维护，逐渐放弃。后期新能全部放在Pro版本。**
8. 还有很多细节需要优化，后期会慢慢优化（代码，样式逐步进行优化）
9. 新功能由于个人时间问题，可能开发上线时间**较晚**。
10. **后期在日常开发中遇到的业务场景也会总结进去。**


---- 

# admin 版本文档如下

> 注意：该项目为个人项目，仅供学习使用，请勿用于商业用途，目前维护进度较少。

这是一款简单好上手的后台管理系统，该系统使用了`rsbuild`作为打包工具，使其在原有的基础上优化打包速度以及页面加载速度；

使用`vue3 + pinia + element-plus + TS`搭建，其中还有`functional-helpers + @log-reporting`为自己封装的函数辅助插件；避免在`package.json`中使用大量的依赖；而基础的`hooks + emus + utils`封装在其中，这样在不同的业务场景中都可以使用！

## 效果

以下为部分页面

|                                                                 |                                                                 |
| --------------------------------------------------------------- | --------------------------------------------------------------- |
| ![X](https://assets.wangxiaoze.cn/images/image.9rjfk1lgws.webp) | ![X](https://assets.wangxiaoze.cn/images/image.7zqgp51wfh.webp) |
| ![X](https://assets.wangxiaoze.cn/images/image.5q7g5nm0wa.webp) | ![X](https://assets.wangxiaoze.cn/images/image.7lk0y9ynvy.webp) |
| ![X](https://assets.wangxiaoze.cn/images/image.6bh3ryiwks.webp) | ![X](https://assets.wangxiaoze.cn/images/image.969rxqya66.webp) |
| ![X](https://assets.wangxiaoze.cn/images/image.70adbz7qwy.webp) | ![X](https://assets.wangxiaoze.cn/images/image.7pbpihw85.webp)  |
| ![X](https://assets.wangxiaoze.cn/images/image.2obk4fq6s3.webp) | ![X](https://assets.wangxiaoze.cn/images/image.1e8my48r1d.webp) |
| ![X](https://assets.wangxiaoze.cn/images/image.5c10eskccg.webp) | ![X](https://assets.wangxiaoze.cn/images/image.syzbtgh98.webp)  |
| ![X](https://assets.wangxiaoze.cn/images/image.1e8my4b3nc.webp) | ![X](https://assets.wangxiaoze.cn/images/image.1sf2ozl931.webp) |

## 进度

- [x] 支持自定义主题以及主题色
- [x] 支持暗黑色，同时模拟`ELEMENT-PLUS`的暗黑动画效果
- [x] mock数据
- [x] echarts自定义数据
- [x] hooks的开发
- [x] 内置辅助函数插件
- [x] ~~内置部分css动画以及3d效果~~, three-3d效果和css效果请看 [预览](https://wangxiaoze-view.github.io/web-demos/#button)
- [x] 404， 403，500页面开发
- [ ] [其他功能更新/开发请看](https://github.com/wangxiaoze-view/sim-admin/issues/1)

## 运行

1. 请优先使用`pnpm`

```bash
pnpm install

# 如果没有lib-functional-helpers.tar.gz，那么使用git bash 执行pnpm run init
```

2. 运行项目

```bash
pnpm dev
```

3. 打包项目

```bash
pnpm build
```

## 可能出现的问题

1. `functional-helpers`拉取失败，那么您可以在[GITHUB](https://github.com/wangxiaoze-view/functional-helpers-lib)中进行下载， 使用本地包的形式

```JSON
{
  "functional-helpers": "file:./functional-helpers"
}
```

2. 系统中使用了 `tresjs`，如果对应的页面加载失败，可以查看[知识库](https://wangxiaoze.cn/demos/3d/models/common.html)，控制台可能会报警告，对此您可以忽略它，官网还没有对应的解决方案，其解决方案仅仅适用于`vite` 系统已将`tresjs`迁移为`3d外链`
