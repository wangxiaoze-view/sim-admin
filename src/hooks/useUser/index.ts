import { useUserStore } from '~/src/stores/modules/user'
import { isArray } from 'lodash-es'

/**
 * 用户 Hook
 * 提供用户信息、权限检查、登录登出等功能
 * @returns 用户相关方法和数据
 */
export function useUser() {
  const userStore = useUserStore()
  const { setUserInfo, toLogin, clearStore, logout } = userStore
  const { getUserInfo } = storeToRefs(userStore)

  /**
   * 权限/角色检查处理函数
   * @param value 要检查的值（字符串或字符串数组）
   * @param list 权限/角色列表
   * @returns 是否具有权限/角色
   */
  const hasHandler = (value: string | string[], list: string[] = []): boolean => {
    if (isArray(value)) {
      return value.some((item) => list.includes(item.toLowerCase()))
    }
    return list.includes(value)
  }

  /**
   * 检查用户是否具有指定角色
   * @param role 要检查的角色（字符串或字符串数组）
   * @returns 是否具有该角色
   */
  const hasRole = (role: string | string[]): boolean => {
    const roles = getUserInfo.value?.roles || []
    return hasHandler(role, roles)
  }

  /**
   * 检查用户是否具有指定权限
   * @param permission 要检查的权限（字符串或字符串数组）
   * @returns 是否具有该权限
   */
  const hasPermission = (permission: string | string[]): boolean => {
    const permissions = getUserInfo.value?.permissions || []
    return hasHandler(permission, permissions)
  }

  return {
    getUserInfo,
    hasRole,
    hasPermission,
    setUserInfo,
    toLogin,
    clearStore,
    logout,
  }
}
