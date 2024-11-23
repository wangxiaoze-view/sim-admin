# [1.0.0](https://github.com/wangxiaoze-view/sim-admin/compare/d99d09acdcf0cfe74260ad561a33bf4da5f21db8...1.0.0) (2024-11-23)


### ♻ Code Refactoring | 代码重构

* 重构版本发布说明以及日志记录 ([337067b](https://github.com/wangxiaoze-view/sim-admin/commit/337067bfbb6ef026a4d335fa1af9ee166afdf125))


### ⚡ Performance Improvements | 性能优化

* 改进打包性能体积，重构部分外层结构页面 ([f04a8e9](https://github.com/wangxiaoze-view/sim-admin/commit/f04a8e935bca9970533067892d9fac8976722bcb))
* 将原来的构建工具替换为rsbuild ([d99d09a](https://github.com/wangxiaoze-view/sim-admin/commit/d99d09acdcf0cfe74260ad561a33bf4da5f21db8))
* 路由支持前端导出和后端导出 ([5d59a79](https://github.com/wangxiaoze-view/sim-admin/commit/5d59a79a488d3ce73fba8754d85ff0862c2bbc52))


### ✅ Tests | 测试

* 测试打包 ([33af50b](https://github.com/wangxiaoze-view/sim-admin/commit/33af50bdc0580e367ca5f84f42584fed5ced225f))
* 测试打包mock ([7dcc58f](https://github.com/wangxiaoze-view/sim-admin/commit/7dcc58f6fbe8d45d345b1783cabf678e320acb0b))
* 测试生产环境mock ([6791d77](https://github.com/wangxiaoze-view/sim-admin/commit/6791d7737ce1171e4c38a3ec899626e225a82e4f))
* 测试文件 ([4f3a0f3](https://github.com/wangxiaoze-view/sim-admin/commit/4f3a0f398e916f713a8df2374c1daffe0da1cd35))


### ✨ Features | 新功能

*  将知识库的demo页面迁移到admin ([9be4ca0](https://github.com/wangxiaoze-view/sim-admin/commit/9be4ca090a1bff93fa13405a54defc37cbfdeb56))
* 添加附加功能vercel.json ([daa9779](https://github.com/wangxiaoze-view/sim-admin/commit/daa9779f0d5bc1617dc4e48f2f489eba4d2eef9a))
* 添加three案例 ([0ddca69](https://github.com/wangxiaoze-view/sim-admin/commit/0ddca6920c7ebebfe1bb627b8dc63f8474dac5be))
* 完善标签页以及对菜单标签的样式进行优化，完善操作区域功能 ([ad47151](https://github.com/wangxiaoze-view/sim-admin/commit/ad4715195438ed79ad5d3f04b402d399285b030a))
* debug支持自定义apikey, log-reporting默认不进行上报 ([12bda2d](https://github.com/wangxiaoze-view/sim-admin/commit/12bda2d1c247d3ee4e796047b3c9de3de6852a48))
* **echarts:** 添加echarts, 添加部分首页；完善部分代码 ([1a55fbf](https://github.com/wangxiaoze-view/sim-admin/commit/1a55fbf9b16c5ca7453a3c7db3ed74c92276f74c))
* **echarts:** 引入echarts图表,完善工作区以及分析台 ([182722b](https://github.com/wangxiaoze-view/sim-admin/commit/182722b20b61ffee0765b89ad2e51d7e4fe81072))
* **echarts:** 重构echarts的hooks ([9fb9e09](https://github.com/wangxiaoze-view/sim-admin/commit/9fb9e096ecb9aea93406e36cd3ac8778f7d8f25a))
* **follow:** 自定义流程图页面,自定义chat图表 ([1e6e3c3](https://github.com/wangxiaoze-view/sim-admin/commit/1e6e3c319753513e5f6088447e7218e28f5f3fa6))
* **layout,theme:** 新增不同结构的布局,新增主题配置功能,优化部分主题配置缺陷 ([7a6e505](https://github.com/wangxiaoze-view/sim-admin/commit/7a6e5056a2db053b3e67ffb52c7a9acb951643bb))
* **login,theme:** 新增mock登录功能, 主题样式文件 ([1579786](https://github.com/wangxiaoze-view/sim-admin/commit/157978601aaf0d4b13d6a470c5c71fd63b77a7f0))
* **tabs:** tabs标签栏支持多种操作模式 ([a052f10](https://github.com/wangxiaoze-view/sim-admin/commit/a052f102cfb0cf2a6c0367af74fc3170955fc7ac))
* **theme,router:** 添加动态话主题配置,模拟登录,动态添加路由配置 ([aeb6b4d](https://github.com/wangxiaoze-view/sim-admin/commit/aeb6b4d061a22f4a5fcafe39433e1a1973369144))


### 🎫 Chores | 其他更新

* 添加vueuse依赖 ([d3afdb1](https://github.com/wangxiaoze-view/sim-admin/commit/d3afdb1f5d555f4a003606c61951da92df79c1f7))
* 修改构建流程, 添加性能分析处理器, 添加remote-components依赖 ([db964c9](https://github.com/wangxiaoze-view/sim-admin/commit/db964c9b5e186aedbe9ec322baa4e2ceeb4a6e24))
* 优化代码格式以及commit校验格式 ([2325b7c](https://github.com/wangxiaoze-view/sim-admin/commit/2325b7c18131cfd4ee8124646f37f3694cff1a39))
* 优化构建体积,添加压缩插件 ([dafef23](https://github.com/wangxiaoze-view/sim-admin/commit/dafef2323789f55f8f97ebb66041ecf33a601df4))
* **custom:** 添加cz工具, 初始化提交規範 ([ff37b38](https://github.com/wangxiaoze-view/sim-admin/commit/ff37b3828468cbd1e3501fbf02e692ea1e080350))


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复changelog-hash显示异常的bug ([12ef9d8](https://github.com/wangxiaoze-view/sim-admin/commit/12ef9d8f5b60fc883a6b7d89f3ff6bc50553e723))
* 修复sass引入报错问题 ([14354c0](https://github.com/wangxiaoze-view/sim-admin/commit/14354c02326fabdb0053108bbf25e6db652416b8))
* **functional-helpers:** 依赖不指向固定版本, 将有github地址替代 ([5f88915](https://github.com/wangxiaoze-view/sim-admin/commit/5f8891502ffd622c5fae4dde0c05853d8c6e0117))
* mock-prefix ([4b54ca5](https://github.com/wangxiaoze-view/sim-admin/commit/4b54ca5967c0c24c56fa292b7f7d68e99fca8e4f))
* **mock-server:** 修复线上环境mock失效,修复登录页面图片加载失败的bug ([de85332](https://github.com/wangxiaoze-view/sim-admin/commit/de85332a5269d9162714b0fd99c994a82654c217))


### 💄 Styles | 风格

* stylelint配置修改 ([f5fd50d](https://github.com/wangxiaoze-view/sim-admin/commit/f5fd50d159414a92cd0467ce5b7c64ed8d5ecaee))


### 📝 Documentation | 文档

* ✏️ 更新changelog文档 ([2c54db1](https://github.com/wangxiaoze-view/sim-admin/commit/2c54db139fbcf007e18bbca171a6e0a7dd034aa3))
* **更新changelog:** 添加changelog依赖，自动更新文档 ([839a9fb](https://github.com/wangxiaoze-view/sim-admin/commit/839a9fb1470c77674c4a94e8bee2eead3635c3cb))
* 添加阅读文件以及修改css路由加载 失败 ([9a503d1](https://github.com/wangxiaoze-view/sim-admin/commit/9a503d1742d1d5a453257129ba4c5635430b4f30))
* 完善注解 ([e79e92f](https://github.com/wangxiaoze-view/sim-admin/commit/e79e92f38c5f98a59f5df0e5351b5d4f6e26d7b7))



