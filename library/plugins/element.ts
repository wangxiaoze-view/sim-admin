import { App } from 'vue'
import { useElementApi, useMitter } from '~/src/hooks'

// 将 utils/element/index.ts 中的方法挂载到全局
const { simLoading, simMessage, simAlert, simConfirm, simNotify, simNotifyClose } = useElementApi()
const { simEmit, simEmitOn, simEmitOff, simEmitClear } = useMitter()

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

const provideList = {
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
// 全局挂载. 后期直接用这个就可以；自动推导数据类型
export let $sim = provideList

export default {
  install: (app: App<Element>) => {
    Object.keys(provideList).forEach((key) => {
      app.provide(key, provideList[key as TProvideKey])
    })
  },
}
