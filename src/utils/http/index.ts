import { getToken, Request } from '../index'
const isProduction = process.env.NODE_ENV === 'production'

export const http = new Request({
  baseURL: isProduction ? 'https://sim-admin-mock-server.wangzevw.com/' : '/',
})

http.interceptorsRequest((config) => {
  const token = getToken()
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

http.interceptorsResponse((response) => {
  return response
})
