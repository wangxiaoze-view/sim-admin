declare type ComponentType<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>)
  | Component

type IconType = 'success_icon' | 'cup_icon' | 'new_icon'

declare interface ISImRouterMeta {
  // 是否在菜单显示
  hidden?: boolean
  // 菜单图标
  icon?: string
  // 菜单标题
  title?: string
  // 菜单排序
  sort?: number
  // 菜单权限，根据角色判断
  roles?: string[]
  // 是否缓存
  keepAlive?: boolean
  // 是否不关闭
  notClose?: boolean
  // 外链
  target?: '_blank'
  // iframe地址
  iframePath?: string
  // 菜单状态：数字角标，图标, 自定义图片，自定义组件等等
  badge?: string // 角标
  dot?: boolean // 圆点
  statusIcon?: IconType // 自定义图标
  custom?: ComponentType // 自定义组件
}

// meta. children 重写自定义类型
declare interface ISimRouterRecordRaw extends Omit<RouteRecordRaw, 'meta' | 'children'> {
  // 路径
  path: string
  // 组件名字
  name: Capitalize<string>
  // 自定义meta
  meta: ISImRouterMeta
  // 组件
  component?: ComponentType
  // 子集
  children?: ISimRouterRecordRaw[]
}
