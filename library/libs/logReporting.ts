import { init } from '@log-reporting/core'

export default function setupLogReporting() {
  // 全新版本
  // https://www.wangzevw.com/docs/log-reporting/v2.html 查看文档
  init({
    // 上报地址, 可以改为 后端真实地址
    dsn: window.location.href,
    // 是否开启调试
    isDebug: true,
    // 是否捕获错误
    isError: true,
    // 是否捕获console.error
    isConsoleError: true,
    // 是否捕获性能
    isPerformance: true,
    // 是否捕获资源
    isResource: true,
    // 是否捕获请求
    isXhr: true,
    // 屏幕录制
    record: {
      open: true,
      time: 30 * 1000,
    },
    // 加密方式
    encryptMethod: 'base64',
    // 上报方式
    method: 'xhr',
    // pv统计
    isPv: true,
    // 曝光统计
    isExposure: true,
  })

  // 这是V1.0.0版本日志上报
  // const win: any = window
  // if (!win['logReporting']) return // 自己封装的日志上报系统
  // win['logReporting'].init({
  //   sdn: ``,
  //   debug: true,
  //   config: {
  //     watchReady: true,
  //     watchJsError: true,
  //     watchSource: true,
  //     watchAxios: true,
  //     watchPerformance: true
  //   }
  // })
}
