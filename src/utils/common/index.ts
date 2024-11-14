import { extend, IHttpResult, omit } from '..'

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