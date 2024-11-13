declare type TThemeType = 'ordinary' | 'row' | 'float'
declare type TMenuStyle = 'card' | 'arrow'
declare type TLanguageType = 'zh' | 'en'
declare type TTabType = 'card'
declare type TTransitionType = 'fade-in'
declare type TSize = 'default'
declare interface ITheme {
  // 布局风格 普通布局ordinary  横向布局row   浮动布局float
  layout: TThemeType
  // 主题颜色
  themeColor: string
  // 菜单风格：卡片，箭头
  menuMode: TMenuStyle
  // 顶部固定
  fixedHeader: boolean
  // 是否启动进度条
  isProgress: boolean
  // 是否显示标签页
  isTabs: boolean
  // 标签页的显示样式
  tabsStyle: string
  // 标签页的图标
  isTabsIcon: boolean
  // 标签页的风格
  tabStyle: TTabType
  // 是否刷新
  isRefresh: boolean
  // 手机否显示主题入口
  isTheme: boolean
  // 是否显示全屏效果
  isFullPage: boolean
  // 是否开启页面动画
  isPageTransition: boolean
  // 动画名称
  transitionName: TTransitionType
  // 是否开启锁屏模式
  isLocked: boolean
  // 是否显示主题设置按钮
  isThemeSetting: boolean
  // 语言类型zh、en
  i18n: TLanguageType
  // 是否显示国际化
  isI18n: true
  // ui尺寸
  size: TSize
  // 色弱模式
  colorWeakness: boolean
  // 菜单缩放
  collapse: boolean
  // 是否显示底部
  isFooter: boolean
  // 是否显示debug
  isDebug: boolean
  // 是否显示消息
  isNotice: boolean
  // 是否显示面包屑
  isBreadcrumb: boolean
}
