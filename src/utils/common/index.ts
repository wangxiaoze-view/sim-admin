import { IHttpResult, isJson, Storage, logger } from '..'

interface IHttpResultExtends extends Omit<IHttpResult, 'code'> {
  code: number
}

export function hexToRgba(hex: string, n = 1) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, ${n})`
    : null
}

export function getReponse(params: Partial<IHttpResultExtends>): IHttpResultExtends {
  return {
    code: params.code || 200,
    context: params.context ?? null,
    message: params.message ?? 'success',
    requestId: new Date().toISOString(),
    success: params.success ?? true,
  }
}

export const getLocalStorage = (key: string) => {
  Storage.storage = localStorage
  const value: any = Storage.get(key)
  if (value && isJson(value)) {
    return JSON.parse(value)
  } else {
    return false
  }
}

export function parseParams(data: any) {
  try {
    const tempArr = []
    for (const i in data) {
      const key = encodeURIComponent(i)
      const value = encodeURIComponent(data[i])
      tempArr.push(`${key}=${value}`)
    }
    const urlParamsStr = tempArr.join('&')
    return urlParamsStr
  } catch (err) {
    logger.error(JSON.stringify(err))
    return ''
  }
}

export const isExternal = (value: string) => {
  return /^(https?:|mailto:|tel:|\/\/)/.test(value)
}
