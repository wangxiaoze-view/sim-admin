import { http } from '~/src/utils'

const url = {
  login: '/api/login',
  getUserInfo: '/api/getUserInfo',
}

export function loginApi(data: { username: string; password: string }) {
  return http.post<{ token: string }>(url.login, data)
}

export function getUserInfoApi() {
  return http.get<IUserInfoType>(url.getUserInfo, {})
}
