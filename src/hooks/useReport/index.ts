import { useChangeTheme, useError } from '~/src/hooks'
import { init, _support } from '@log-reporting/core'
import { AnyFun } from '@log-reporting/types'
import rrwebPlayer from 'rrweb-player'
import 'rrweb-player/dist/style.css'
export function useReport() {
  const { getTheme } = useChangeTheme()
  const { setError } = useError()

  const initLogReporting = () => {
    if (!getTheme.value.isDebug) return
    init({
      // 上报地址, 可以改为 后端真实地址
      dsn: '/',
      // 是否开启调试
      isDebug: true,
      // 是否捕获错误
      isError: true,
      // 是否捕获console.error
      isConsoleError: true,
      // 是否捕获性能
      isPerformance: true,
      // 是否捕获资源
      // TODO: 资源捕获可能会多次上报
      isResource: false,
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

    /**
     * // error
     * ERROR = 'error',
     * // promise
     * UNHANDLEDREJECTION = 'unhandledrejection',
     * // console.error
     * CONSOLE_ERROR = 'consoleError',
     * // xhr
     * XHR = 'xhr',
     * // fetch
     * FETCH = 'fetch',
     * // pv统计
     * PV = 'pv',
     * // exposure 曝光
     * EXPOSURE = 'exposure',
     */

    // https://github1s.com/wangxiaoze-view/log-repeorting/blob/main/packages/core/enum/index.ts
    const eventTypes = [
      'error',
      'unhandledrejection',
      'consoleError',
      'xhr',
      'fetch',
      'pv',
      'exposure',
    ]
    eventTypes.forEach((eventType) => {
      _support.eventBus.on(eventType, (errorOptions: AnyFun) => {
        setError(errorOptions)
      })
    })
  }

  const initReplayer = () => {
    if (_support.record) {
      if (!_support.record.snapshot.length) return
      const target = document.querySelector('#video-player')
      if (!target) return
      new rrwebPlayer({
        target: target as any, // customizable root element
        props: {
          events: _support.record.snapshot,
          width: 600,
          height: 400,
        },
      })
    }
  }

  return {
    initLogReporting,
    initReplayer,
  }
}

// 这是V1.0.0版本日志上报 次版本已废弃
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
