export const settings_config = {
  // 网站标题
  title: 'Sim-Admin',
  // 网站标题与描述之间的分节符
  titleSpace: ' | ',
  // 标题与描述之间的置换顺序: 标题 - 描述 / 描述 - 标题
  titleSort: false,
  // 描述
  description:
    'simplify-admin是一款基于element-plus免费开源的中后台模板。使用最新的vue3,pinia等主流技术进行开发,达到简版模板的开发即用的前端解决方案,可以用来作为一个练手的开源项目',
  // 底部版权
  copyright: 'Copyright 2023 - sim-admin - wangxiaoze@petalmail.com © 王小泽',
  // 路由缓存的最大数
  keepaliveMax: 10,
  // 路由模式： true 哈希 false history
  hasRouterMode: true,
  // 路由拦截模式 web: 前端路由管理; end: 后端路由管理
  hasRouterGuard: 'end',
  // 白名单
  whiteList: ['/login', '/redirect', '/403', '/404', '/500', '/netOffline'],
  // 全局的加载文字
  loadingText: 'sim正在加载, 请稍等...',
  // 网站logo
  // v1 版本logo
  // logo: 'https://file.wangzevw.com/images/sim_admin_favicon.7zqat7487l.ico',
  logo: 'https://file.wangzevw.com/images/logo.51e67aosot.svg',
  // 浏览器的logo
  // linkIcon: 'https://file.wangzevw.com/images/sim_admin_favicon.7zqat7487l.ico',
  linkIcon: 'https://file.wangzevw.com/images/logo.51e67aosot.svg',
  // ele message 的消失时间
  messageTime: 3000,
  // token 存储的方式
  tokenStorage: 'localStorage',
  // 是否跳转到登录页
  isRedirect: true,
}
