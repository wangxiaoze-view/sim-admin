declare interface ISettingsType {
  theme: ITheme
}

declare interface IUserType {
  token: string
}

declare interface IRoutesType {
  // 菜单路由
  menuRoutes: ISimRouterRecordRaw[]
  // 所有路由
  allRoutes: ISimRouterRecordRaw[]
}
