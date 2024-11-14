import { http } from '~/src/utils'

const url = {
  login: '/api/login',
}

export function loginApi(data: { username: string; password: string }) {
  return http.post<{ token: string }>(url.login, data)
}
