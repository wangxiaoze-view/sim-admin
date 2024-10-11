export const net_config = {
  // 接口地址
  baseUrl: '',
  // 接口请求前缀
  prefix: '/api',
  // 接口请求超时时间
  timeout: 10000,
  // 接口请求头
  // application/json;charset=UTF-8 或 application/x-www-form-urlencoded;charset=UTF-8
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
}

// 接口返回状态码
export const net_success_code = [200]
// 返回的message
export const net_message_name = 'message'
// 返回的结果
export const net_result_name = 'context'
