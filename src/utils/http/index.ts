import { getToken, Request } from '../index'
import { net_config, net_message_name, net_success_code } from '~/src/config'
import { useElementApi } from '~/src/hooks'

const { timeout, baseUrl, headers } = net_config

export const http = new Request({
  baseURL: baseUrl,
  timeout,
  headers,
})

http.interceptorsRequest((config) => {
  const token = getToken()
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

http.interceptorsResponse((response: any) => {
  const { simMessage } = useElementApi()
  if (
    response.success != undefined &&
    response.code != undefined &&
    (!response.success || !net_success_code.includes(response.code))
  ) {
    simMessage(response[net_message_name], 'error')
  }
  return response
})
