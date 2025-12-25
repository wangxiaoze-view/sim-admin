import { useRoute as useVueRoute, useRouter as useVueRouter } from 'vue-router'

/**
 * 路由 Hook
 * 提供 Vue Router 的路由和导航功能
 * @returns 路由相关方法和引用
 */
export function useRouter() {
  const route = useVueRoute()
  const router = useVueRouter()

  return {
    /** 当前路由信息（响应式） */
    route,
    /** 路由实例 */
    router,
    /** Vue Router 的 useRoute hook */
    useVueRoute,
    /** Vue Router 的 useRouter hook */
    useVueRouter,
  }
}
