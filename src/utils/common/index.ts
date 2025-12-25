// import { IHttpResult, isJson, Storage, logger } from '..'

interface IHttpResultExtends extends Omit<any, 'code'> {
  code: number
}

/**
 * 将十六进制颜色转换为 RGBA 格式
 * @param hex 十六进制颜色值（如 #ffffff 或 ffffff）
 * @param n 透明度（0-1），默认为 1
 * @returns RGBA 颜色字符串，如果格式不正确则返回 null
 */
export function hexToRgba(hex: string, n = 1): string | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) return null
  const r = parseInt(result[1], 16)
  const g = parseInt(result[2], 16)
  const b = parseInt(result[3], 16)
  return `rgba(${r}, ${g}, ${b}, ${n})`
}

/**
 * 构建 HTTP 响应对象
 * @param params 响应参数（部分）
 * @returns 完整的 HTTP 响应对象
 */
export function getReponse(params: Partial<IHttpResultExtends>): IHttpResultExtends {
  return {
    code: params.code || 200,
    context: params.context ?? null,
    message: params.message ?? 'success',
    requestId: new Date().toISOString(),
    success: params.success ?? true,
  }
}

/**
 * 从 localStorage 获取值
 * 如果值是 JSON 字符串，会自动解析
 * @param key 存储键名
 * @returns 解析后的值，如果不是 JSON 或不存在则返回 false
 */
export const getLocalStorage = (key: string): unknown | false => {
  const value = localStorage.getItem(key)
  if (value) {
    try {
      return JSON.parse(value)
    } catch {
      return false
    }
  }
  return value || false
}

/**
 * 将对象转换为 URL 查询参数字符串
 * @param data 要转换的对象
 * @returns URL 查询参数字符串（如 "key1=value1&key2=value2"）
 */
export function parseParams(data: Record<string, unknown>): string {
  try {
    const params: string[] = []
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        const encodedKey = encodeURIComponent(key)
        const encodedValue = encodeURIComponent(String(data[key]))
        params.push(`${encodedKey}=${encodedValue}`)
      }
    }
    return params.join('&')
  } catch (err) {
    console.error('Failed to parse params:', String(err))
    return ''
  }
}
