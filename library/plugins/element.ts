import { App } from 'vue'
import { useElementApi, useMitt } from '~/src/hooks'

export type TProvideKey =
  | '$simLoading'
  | '$simMessage'
  | '$simAlert'
  | '$simConfirm'
  | '$simNotify'
  | '$simNotifyClose'
  | '$simEmit'
  | '$simEmitOn'
  | '$simEmitOff'
  | '$simEmitClear'

export type TProvideRefresh = () => void

// 延迟初始化，避免循环依赖
let provideList: Record<TProvideKey, unknown> | null = null

function getProvideList() {
  if (!provideList) {
    const { simLoading, simMessage, simAlert, simConfirm, simNotify, simNotifyClose } = useElementApi()
    const { simEmit, simEmitOn, simEmitOff, simEmitClear } = useMitt()
    provideList = {
      $simLoading: simLoading,
      $simMessage: simMessage,
      $simAlert: simAlert,
      $simConfirm: simConfirm,
      $simNotify: simNotify,
      $simNotifyClose: simNotifyClose,
      $simEmit: simEmit,
      $simEmitOn: simEmitOn,
      $simEmitOff: simEmitOff,
      $simEmitClear: simEmitClear,
    }
  }
  return provideList
}

// 全局挂载. 后期直接用这个就可以；自动推导数据类型
export const $sim = new Proxy({} as Record<TProvideKey, unknown>, {
  get(_target, prop) {
    return getProvideList()[prop as TProvideKey]
  },
})

export default {
  install: (app: App<Element>) => {
    const list = getProvideList()
    Object.keys(list).forEach((key) => {
      app.provide(key, list[key as TProvideKey])
    })
  },
}
