import { Random } from 'mockjs'
import { TUserRole } from '~/src/enum'
import { setToken } from '../token'

// 切换用户身份
export const changeRole = (role: TUserRole) => {
  const config = {
    [TUserRole.ADMIN]: `Sim-Admin-Token-${Random.guid()}-${Date.now()}`,
    [TUserRole.USER]: `Sim-User-Token-${Random.guid()}-${Date.now()}`,
    [TUserRole.TEST]: `Sim-Test-Token-${Random.guid()}-${Date.now()}`,
  }
  const token = config[role]
  if (!token) return
  setToken(token)
  window.location.reload()
}
