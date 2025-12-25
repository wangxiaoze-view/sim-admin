export default {
  net_success_code: [200],
  // 返回的message
  net_message_name: 'message',
  // 接口请求头
  net_headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
  // 接口请求超时时间
  net_timeout: 10000,
  // 接口地址
  net_baseUrl: import.meta.env.PUBLIC_API_URL,
}
