declare interface ISettingsType {
  theme: ITheme
}

declare interface IUserInfoType {
  id: string
  username: string
  name: string
  email: string
  ip: string
  country: string
  roles: string[]
  permissions: string[]
  avatar: string
}
declare interface IUserType {
  token: string
  userInfo: IUserInfoType
}

declare interface IRoutesType {
  // 菜单路由
  menuRoutes: ISimRouterRecordRaw[]
  // 所有路由
  allRoutes: ISimRouterRecordRaw[]
  // 当前菜单
  activeMenu: string
}

declare interface ITabasType {
  // 访问的路由
  visitedRoutes: ISimRouterRecordRaw[]
}
