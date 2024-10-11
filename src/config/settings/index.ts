export const settings_config = {
  // 网站标题
  title: 'Sim-Admin',
  // 网站标题与描述之间的分节符
  titleSpace: ' - ',
  // 标题与描述之间的置换顺序: 标题 - 描述 / 描述 - 标题
  titleSort: false,
  // 描述
  description:
    'simplify-admin是一款基于element-plus免费开源的中后台模板。使用最新的vue3,pinia等主流技术进行开发,达到简版模板的开发即用的前端解决方案,可以用来作为一个练手的开源项目',
  // 底部版权
  copyright: '2023 - sim-admin - wangxiaoze@petalmail.com',
  // 路由缓存的最大数
  keepaliveMax: 10,
  // 路由模式： true 哈希 false history
  hasRouterMode: true,
  // 白名单
  whiteList: ['/login', '/register', '/403', '404', '500'],
  // 全局的加载文字
  loadingText: 'sim正在加载, 请稍等...',
  // 网站logo
  logo: '',
  // 六浏览器的logo
  linkIcon: '',
  // ele message 的消失时间
  messageTime: 3000,
  // token 存储的方式
  tokenStorage: 'localStorage',
}
