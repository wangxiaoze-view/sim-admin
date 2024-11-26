import { RouteLocationNormalizedLoaded, RouteRecordRaw } from 'vue-router'
import router, { constantRoutes } from '~/src/router'
import { isExternal } from '~/src/utils'
import { settings_config } from '~/src/config'
import { parseParams } from '../index'

const { isRedirect } = settings_config
// 重置登录路由
export function resetLoginPath(currentPath: string) {
  return {
    path: '/login',
    ...(isRedirect ? { query: { redirect: currentPath } } : {}),
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
    return roles.some((role) => route?.meta?.roles?.includes(role))
  }
  return true
}

/**
 * 根据给定的角色过滤掉用户无法访问的路由
 * @param routes ISimRouterRecordRaw[]
 * @param roles 细绳[]
 * @returns ISimRouterRecordRaw[] 过滤的路由
 */
export function initAsyncRoutes(routes: ISimRouterRecordRaw[], roles: string[], baseUrl = '/') {
  return (
    routes
      // 先根据角色过滤一层
      .filter((route) =>
        roles.length && route.meta && route.meta.roles ? hasPermission(roles, route) : true
      )
      .map((route) => {
        route = { ...route }
        if (route.path !== '*' && !isExternal(route.path)) {
          // fix: 重置路由路径
          route.path = `${baseUrl}${baseUrl.endsWith('/') ? '' : '/'}${route.path.replace(/^\/+/, '')}`
        }
        if (route.children && route.children.length > 0) {
          route.children = initAsyncRoutes(route.children, roles, route.path)
        }
        return route
      })
  )
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
export const fatteningRoutes = (routes: ISimRouterRecordRaw[]): ISimRouterRecordRaw[] => {
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
export function initRouter(routes: ISimRouterRecordRaw[] = constantRoutes) {
  routes.map((route) => {
    if (route.children) route.children = fatteningRoutes(route.children)
  })
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name && !routes.find((item) => item.name === name)) {
      if (router.hasRoute(name)) router.removeRoute(name)
    }
  })
  insertRouter(routes)
}

/**
 * 添加路由到路由器中
 *
 * @param routes - ISimRouterRecordRaw[] 需要添加的路由
 */
export function insertRouter(routes: ISimRouterRecordRaw[]) {
  routes.forEach((route: ISimRouterRecordRaw) => {
    if (!router.hasRoute(route.name)) router.addRoute(route as RouteRecordRaw)
    if (route.children) insertRouter(route.children)
  })
}

/**
 * 处理当前活动的路由，转换成string，例如 /home?name=123 => /home?name=123
 *
 * @param route - RouteLocationNormalizedLoaded 当前活动的路由
 * @returns string 处理后的路由
 */
export function handlerActiveRoute(route: RouteLocationNormalizedLoaded) {
  const fullPath =
    route.query && Object.keys(route.query).length
      ? `${route.path}?${parseParams(route.query)}`
      : route.path
  return fullPath
}

/**
 * 将给定路线转换为选项卡表示对象。
 *
 * @param route -当前要转换的活动路由。
 * @returns 表示具有路径、查询、参数、名称和元属性的选项卡的对象。
 */
export function handlerTabs(route: RouteLocationNormalizedLoaded) {
  return {
    path: handlerActiveRoute(route),
    query: route.query || {},
    params: route.params || {},
    name: route.name,
    meta: { ...route.meta },
  }
}
