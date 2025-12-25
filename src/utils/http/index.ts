import { getToken } from '../index'
import { network } from '~/src/config'
import { useElementApi } from '~/src/hooks'
import axios, { type InternalAxiosRequestConfig, type AxiosResponse } from 'axios'

const { net_timeout, net_baseUrl, net_headers, net_message_name, net_success_code } = network

/**
 * HTTP 请求实例
 * 配置了请求和响应拦截器
 */
export const http = axios.create({
  baseURL: net_baseUrl,
  timeout: net_timeout,
  headers: net_headers,
})

// 请求拦截器：添加认证 token
http.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getToken()
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器：处理错误响应
http.interceptors.response.use(
  (response: AxiosResponse<Record<string, unknown>>) => {
    const { simMessage } = useElementApi()
    const data = response.data
    const success = data.success
    const code = data.code

    // 检查响应是否失败
    if (
      success !== undefined &&
      code !== undefined &&
      (!success || !net_success_code.includes(code as number))
    ) {
      const message = data[net_message_name] as string
      if (message) {
        simMessage(message, 'error')
      }
    }

    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)
