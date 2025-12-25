import { RouteLocationNormalizedLoaded, RouteRecordRaw } from 'vue-router'
import router, { constantRoutes } from '~/src/router'
// import { isExternal } from '~/src/utils'
import { settings } from '~/src/config'
import { parseParams } from '../index'

const { isRedirect } = settings

// TODO: 暂时
export function isExternal(path: string): boolean {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * 重置登录路由
 * 生成登录页面的路由配置，可选包含重定向参数
 * @param currentPath 当前路径，用于登录后重定向
 * @returns 登录路由配置对象
 */
export function resetLoginPath(currentPath: string) {
  return {
    path: '/login',
    ...(isRedirect ? { query: { redirect: currentPath } } : {}),
    replace: true,
  }
}

/**
 * 检查用户是否有访问路由的权限
 * @param roles 用户角色列表
 * @param route 路由对象
 * @returns 是否有权限访问该路由
 */
export function hasPermission(roles: string[], route: ISimRouterRecordRaw): boolean {
  if (route.meta?.roles) {
    return roles.some((role) => route.meta?.roles?.includes(role))
  }
  return true
}

/**
 * 根据用户角色初始化异步路由
 * 过滤无权限的路由并处理路由路径
 * @param routes 路由列表
 * @param roles 用户角色列表
 * @param baseUrl 基础路径，默认为 '/'
 * @returns 过滤后的路由列表
 */
export function initAsyncRoutes(
  routes: ISimRouterRecordRaw[],
  roles: string[],
  baseUrl = '/'
): ISimRouterRecordRaw[] {
  return routes
    .filter((route) => {
      // 如果有角色要求，检查权限
      if (roles.length && route.meta?.roles) {
        return hasPermission(roles, route)
      }
      return true
    })
    .map((route) => {
      const newRoute = { ...route }

      // 处理路由路径（排除通配符和外部链接）
      if (newRoute.path !== '*' && !isExternal(newRoute.path)) {
        const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`
        const normalizedPath = newRoute.path.replace(/^\/+/, '')
        newRoute.path = `${normalizedBaseUrl}${normalizedPath}`
      }

      // 递归处理子路由
      if (newRoute.children && newRoute.children.length > 0) {
        newRoute.children = initAsyncRoutes(newRoute.children, roles, newRoute.path)
      }

      return newRoute
    })
}

/**
 * 过滤掉隐藏的路由（meta.hidden 为 true）
 * @param routes 路由列表
 * @returns 过滤后的路由列表
 */
export function filterHidden(routes: ISimRouterRecordRaw[]): ISimRouterRecordRaw[] {
  return routes.reduce((pre: ISimRouterRecordRaw[], next: ISimRouterRecordRaw) => {
    // 如果路由被标记为隐藏，跳过
    if (next.meta?.hidden) return pre

    const newItem = { ...next }

    // 递归处理子路由
    if (next.children && next.children.length > 0) {
      newItem.children = filterHidden(next.children)
    }

    return [...pre, newItem]
  }, [])
}

/**
 * 展平嵌套路由
 * 将嵌套的路由结构扁平化为一维数组
 * @param routes 路由列表
 * @returns 扁平化后的路由列表
 */
export const fatteningRoutes = (routes: ISimRouterRecordRaw[]): ISimRouterRecordRaw[] => {
  return routes.flatMap((route) => {
    return route.children ? fatteningRoutes(route.children) : [route]
  })
}

/**
 * 初始化路由器
 * 展平嵌套路由，移除不存在的路由，并添加新路由
 * @param routes 要设置的路由列表，默认为 constantRoutes
 */
export function initRouter(routes: ISimRouterRecordRaw[] = constantRoutes): void {
  // 展平所有嵌套的子路由
  routes.forEach((route) => {
    if (route.children) {
      route.children = fatteningRoutes(route.children)
    }
  })

  // 移除不在新路由列表中的现有路由
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name && !routes.find((item) => item.name === name)) {
      if (router.hasRoute(name)) {
        router.removeRoute(name)
      }
    }
  })

  // 添加新路由
  insertRouter(routes)
}

/**
 * 添加路由到路由器中
 * 递归添加路由及其子路由
 * @param routes 需要添加的路由列表
 */
export function insertRouter(routes: ISimRouterRecordRaw[]): void {
  routes.forEach((route: ISimRouterRecordRaw) => {
    // 如果路由不存在，则添加
    if (route.name && !router.hasRoute(route.name)) {
      router.addRoute(route as RouteRecordRaw)
    }

    // 递归添加子路由
    if (route.children) {
      insertRouter(route.children)
    }
  })
}

/**
 * 处理当前活动的路由，转换为完整路径字符串
 * 例如：/home?name=123 => /home?name=123
 * @param route 当前活动的路由对象
 * @returns 处理后的完整路径字符串
 */
export function handlerActiveRoute(route: RouteLocationNormalizedLoaded): string {
  const hasQuery = route.query && Object.keys(route.query).length > 0
  if (hasQuery) {
    return `${route.path}?${parseParams(route.query as Record<string, unknown>)}`
  }
  return route.path
}

/**
 * 将路由转换为标签页对象
 * @param route 当前要转换的活动路由
 * @returns 标签页对象，包含路径、查询参数、路由参数、名称和元信息
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
