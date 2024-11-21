import { storeToRefs } from 'pinia'
import { useUserStore } from '~/src/stores/modules/user'
import { isArray } from '~/src/utils'

export function useUser() {
  const { setUserInfo, toLogin } = useUserStore()
  const { getUserInfo } = storeToRefs(useUserStore())

  const hasHandler = (value: string | string[], permissions: string[]) => {
    if (isArray(value)) {
      return permissions.some((i) => value.includes(i.toLocaleLowerCase()))
    }
    return permissions.includes(value)
  }

  /**
   * 确定用户是否具有特定角色
   * @param role 要检查的 string 或 string[] 角色
   * @returns 指示用户是否具有角色的布尔值
   */
  const hasRole = (role: string | string[]) => {
    const roles = getUserInfo.value?.roles
    return hasHandler(role, roles)
  }

  const hasPermission = (permission: string | string[]) => {
    const permissions = getUserInfo.value?.permissions
    return hasHandler(permission, permissions)
  }

  return {
    getUserInfo,
    hasRole,
    hasPermission,
    setUserInfo,
    toLogin,
  }
}
