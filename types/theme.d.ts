declare type TThemeType = 'ordinary' | 'row' | 'float'
declare type TMenuStyle = 'default' | 'line' | 'card' | 'arrow'
declare type TLanguageType = 'zh' | 'en'
declare type TTabType = 'default' | 'rectangle' | 'card' | 'line' | 'smart'
declare type TTransitionType = 'fade-in'
declare type TSize = 'default'
declare type TMode = 'light' | 'dark'
declare type TDevice = 'desktop' | 'mobile'
declare interface ITheme {
  // 布局风格 普通布局ordinary  横向布局row   浮动布局float
  layout: TThemeType
  // 主题颜色
  themeColor: string
  // 菜单风格：卡片，箭头
  menuMode: TMenuStyle
  // 顶部固定
  isFixedHeader: boolean
  // 是否启动进度条
  isProgress: boolean
  // 是否显示标签页
  isTabs: boolean
  // 标签页的图标
  isTabsIcon: boolean
  // 标签页的风格
  tabStyle: TTabType
  // 是否刷新
  isRefresh: boolean
  // 是否显示全屏效果
  isFullPage: boolean
  // 是否开启页面动画
  isPageTransition: boolean
  // 动画名称
  transitionName: TTransitionType
  // 是否开启锁屏模式
  isLocked: boolean
  // 锁屏弹窗
  isLockedLayer: boolean
  // 语言类型zh、en
  i18n: TLanguageType
  // 是否显示国际化
  isI18n: boolean
  // ui尺寸
  size: TSize
  // 色弱模式
  colorWeakness: boolean
  // 灰色模式/纪念模式
  colorGray: boolean
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

  // 暗黑模式 light:亮色,dark:暗色
  isMode: boolean
  mode: TMode

  // 是否显示颜色
  isColor: boolean
  // 自动插入空格
  autoInsertSpace: boolean

  // 设备
  device: TDevice

  // 是否支持更新
  isUpdate: boolean
}
