import { useChangeTheme, useError } from '~/src/hooks'
import { init, _support, EVENT_TYPES } from '@log-reporting/core'
import type { AnyFun } from '@log-reporting/types'
import rrwebPlayer from 'rrweb-player'
import 'rrweb-player/dist/style.css'

/**
 * 日志上报 Hook
 * 提供日志上报和回放功能
 * @returns 日志上报相关方法
 */
export function useReport() {
  const { getTheme } = useChangeTheme()
  const { setError } = useError()

  /**
   * 初始化日志上报
   */
  const initLogReporting = (): void => {
    if (!getTheme.value.isDebug) return

    init({
      // 上报地址, 可以改为 后端真实地址
      dsn: '/',
      isReport: false,
      // 是否开启调试
      isDebug: true,
      // 是否捕获错误
      isError: false,
      // 是否捕获console.error
      isConsoleError: false,
      // 是否捕获性能
      isPerformance: true,
      // 是否捕获资源
      // 资源捕获可能会多次上报
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
     * 事件类型说明：
     * - ERROR: 错误
     * - UNHANDLEDREJECTION: Promise 未捕获错误
     * - CONSOLE_ERROR: console.error
     * - XHR: XMLHttpRequest 请求
     * - FETCH: Fetch 请求
     * - PV: 页面访问统计
     * - EXPOSURE: 曝光统计
     *
     * @see https://github1s.com/wangxiaoze-view/log-repeorting/blob/main/packages/core/enum/index.ts
     */
    Object.values(EVENT_TYPES).forEach((eventType) => {
      _support.eventBus.on(eventType, (errorOptions: AnyFun) => {
        setError(errorOptions as unknown as Record<string, unknown>)
      })
    })
  }

  /**
   * 初始化回放器
   * 用于回放录制的屏幕内容
   */
  const initRePlayer = (): void => {
    if (!_support.record) return
    if (!_support.record.snapshot.length) return

    const target = document.querySelector('#video-player')
    if (!target) return

    new rrwebPlayer({
      target: target as HTMLElement,
      props: {
        events: _support.record.snapshot,
        width: 600,
        height: 400,
      },
    })
  }

  return {
    initLogReporting,
    initRePlayer,
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
