export const themeConfig: ITheme = {
  // ===============================菜单风格
  // 布局风格 普通布局ordinary  横向布局row   浮动布局float
  layout: 'ordinary',

  //===============================主题配置
  // 暗黑模式 light:亮色,dark:暗色
  isMode: true,
  mode: 'light',
  // 是否启用自定义颜色
  isColor: true,
  // 主题颜色
  themeColor: '#4c7cc3',
  // 菜单风格：卡片，箭头
  menuMode: 'card',
  // ui尺寸
  size: 'default',
  // 标签页的风格
  tabStyle: 'card',
  // 色弱模式
  colorWeakness: false,
  // 自动插入空格
  autoInsertSpace: true,

  //===============================操作配置
  // 顶部固定
  isFixedHeader: true,
  // 是否显示面包屑
  isBreadcrumb: true,
  // 是否显示标签页
  isTabs: true,
  // 标签页的图标
  isTabsIcon: true,
  // 是否显示debug
  isDebug: true,
  // 是否开启锁屏模式
  isLocked: true,
  // 锁屏弹窗
  isLockedLayer: false,
  // 是否显示全屏效果
  isFullPage: true,
  // 是否显示消息
  isNotice: true,
  // 是否显示国际化
  isI18n: true,
  // 语言类型zh、en
  i18n: 'zh',
  // 是否刷新
  isRefresh: true,
  // 是否显示底部
  isFooter: true,

  //===============================动画
  // 是否启动进度条
  isProgress: true,
  // 是否开启页面动画
  isPageTransition: true,
  // 动画名称
  transitionName: 'fade-in',

  //===============================其他
  // 菜单缩放
  collapse: false,
  // 默认电脑
  device: 'desktop',
}
