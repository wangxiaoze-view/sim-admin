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
  {
    url: '/api/getUserInfo',
    response(req, res, next) {
      const authorization: string = req.headers.authorization || ''
      const k = 'Bearer '
      const userName = authorization.replace(k, '').split('-token-')[0].split('-')[1]

      if (!authorization.startsWith(k) || !userName) {
        res.end(
          JSON.stringify({
            code: 401,
            message: '登录失效',
            context: null,
            success: false,
          })
        )
      }
      const user = mockUserToken[userName.toLocaleLowerCase() as keyof typeof mockUserToken]

      res.end(
        JSON.stringify({
          code: 200,
          message: 'success',
          success: true,
          context: {
            id: Random.id(),
            userName,
            name: Random.cname(),
            emial: Random.email(),
            ip: Random.ip(),
            county: Random.county(true),
            roles: user.role,
            permission: user.permission,
            avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
          },
        })
      )
    },
  },
])
