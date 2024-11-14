import { defineMock } from 'rspack-plugin-mock/helper'
import { Random } from 'mockjs'
const mockUserToken = {
  // 超管
  admin: {
    role: ['Admin'],
    permission: ['sim:read', 'sim:write', 'sim:delete'],
    token: `Sim-Admin-Token-${Random.guid()}-${Date.now()}`,
  },
  // 作者
  user: {
    role: ['User'],
    permission: ['sim:read', 'sim:write'],
    token: `Sim-Test-Token-${Random.guid()}-${Date.now()}`,
  },
  // 游客
  test: {
    role: ['Test'],
    permission: ['sim:read'],
    token: `Sim-Test-Token-${Random.guid()}-${Date.now()}`,
  },
}

export default defineMock([
  {
    url: '/api/login',
    method: 'POST',
    delay: 2000,
    response(req, res, next) {
      const { username, password } = req.body
      const user = mockUserToken[username as keyof typeof mockUserToken]
      if (!user || username !== password) {
        res.end(
          JSON.stringify({
            message: '用户名或密码错误',
            code: 400,
            success: false,
          })
        )
      }
      res.end(
        JSON.stringify({
          context: { token: user.token },
          success: true,
        })
      )
    },
  },
])
