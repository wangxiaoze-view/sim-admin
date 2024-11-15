import { RouteRecordRaw } from 'vue-router'
import router, { constantRoutes } from '~/src/router'

// 重置登录路由
export function resetLoginPath(currentPath: string) {
  return {
    path: '/login',
    // 后期加个配置
    query: { redirect: currentPath },
    replace: true,
  }
}

/**
 * 是否有权限
 * @param roles string[] 权限列表
 * @param route ISimRouterRecordRaw 路由对象
 * @returns boolean
 */
export function hasPermission(roles: string[], route: ISimRouterRecordRaw) {
  if (route.meta && route.meta.roles) {
    return roles.some((role) => (route as any).meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * 根据给定的角色过滤掉用户无法访问的路由
 * @param routes ISimRouterRecordRaw[]
 * @param roles 细绳[]
 * @returns ISimRouterRecordRaw[] 过滤的路由
 */
export function filterAsyncRoutes(routes: ISimRouterRecordRaw[], roles: string[]) {
  const res: ISimRouterRecordRaw[] = []
  routes.forEach((route: ISimRouterRecordRaw) => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })
  return res
}

/**
 * 过滤掉meta.hidden为true的路由
 * @param routes ISimRouterRecordRaw[]
 * @returns ISimRouterRecordRaw[] 过滤的路由
 */
export function filterHidden(routes: ISimRouterRecordRaw[]) {
  return routes.reduce((pre: any, next: any) => {
    if (next.meta && next.meta.hidden) return pre
    const newItem = { ...next }
    if (next.children && next.children.length > 0) newItem.children = filterHidden(next.children)
    return [...pre, newItem]
  }, [])
}

/**
 * 展平嵌套路由
 * @param routes ISimRouterRecordRaw[]
 * @returns ISimRouterRecordRaw[] 扁平化路线
 */
const fatteningRoutes = (routes: ISimRouterRecordRaw[]): ISimRouterRecordRaw[] => {
  return routes.flatMap((route) => {
    return route.children ? fatteningRoutes(route.children) : route
  })
}

/**
 * 使用提供的路由重置路由器。它展平任何嵌套的儿童路线，
 * 删除新路由列表中不存在的任何现有路由，并添加
 * 到路由器的新路由。
 *
 * @param routes -在路由器中设置的一系列路由。默认为“constantRoutes”。
 */
export function resetRouter(routes: ISimRouterRecordRaw[] = constantRoutes) {
  routes.map((route) => {
    if (route.children) route.children = fatteningRoutes(route.children)
  })
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name && !routes.find((item) => item.name === name)) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
  addRouter(routes)
}

/**
 * 添加路由到路由器中
 *
 * @param routes - ISimRouterRecordRaw[] 需要添加的路由
 */
export function addRouter(routes: ISimRouterRecordRaw[]) {
  routes.forEach((route: ISimRouterRecordRaw) => {
    if (!router.hasRoute(route.name)) router.addRoute(route as RouteRecordRaw)
    if (route.children) addRouter(route.children)
  })
}
