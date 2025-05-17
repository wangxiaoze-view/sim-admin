import { http } from '~/src/utils'

const url = {
  login: '/login',
  getUserInfo: '/getUserInfo',
}

export function loginApi(data: { username: string; password: string }) {
  return http.post<{ token: string }>(url.login, data)
}

export function getUserInfoApi() {
  return http.get<IUserInfoType>(url.getUserInfo, {})
}
