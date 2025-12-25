import { Random } from 'mockjs'
import { TUserRole } from '~/src/enum'
import { setToken } from '../token'

/**
 * 切换用户身份
 * 根据角色生成对应的 token 并重新加载页面
 * @param role 用户角色
 */
export const changeRole = (role: TUserRole): void => {
  const config: Record<TUserRole, string> = {
    [TUserRole.ADMIN]: `Sim-Admin-Token-${Random.guid()}-${Date.now()}`,
    [TUserRole.USER]: `Sim-User-Token-${Random.guid()}-${Date.now()}`,
    [TUserRole.TEST]: `Sim-Test-Token-${Random.guid()}-${Date.now()}`,
  }
  const token = config[role]
  if (!token) return
  setToken(token)
  window.location.reload()
}
