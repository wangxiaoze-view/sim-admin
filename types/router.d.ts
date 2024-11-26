declare type ComponentType<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>)
  | Component

declare interface ISImRouterMeta {
  // 是否在菜单显示
  hidden?: boolean
  // 菜单图标
  icon?: string
  // 菜单标题
  title?: string
  // 菜单排序
  sort?: number
  // 菜单角色
  roles?: string[]
  // 菜单权限
  permissions?: string[]
  // 是否缓存
  keepAlive?: boolean
  // 是否不关闭
  notClose?: boolean
  // 外链
  target?: '_blank'
  // iframe地址
  iframePath?: string
}

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
