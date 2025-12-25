import {
  ElMessage,
  ElNotification,
  ElLoading,
  type LoadingOptions,
  type MessageParams,
  ElMessageBox,
  type ElMessageBoxOptions,
  type NotificationParams,
} from 'element-plus'
import { settings } from '~/src/config'

const { loadingText, messageTime } = settings

type TElStatusType = 'success' | 'warning' | 'info' | 'error'
type TElPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'

/**
 * Element Plus API Hook
 * 封装 Element Plus 的常用组件 API，提供统一的调用方式
 * @returns Element Plus API 方法集合
 */
export function useElementApi() {
  /**
   * 显示全屏加载状态
   * @param text 加载文本，默认为配置的加载文本
   * @param background 加载蒙版背景颜色，默认为白色
   * @param options 加载服务的额外选项
   */
  const simLoading = (
    text: string = loadingText,
    background: string = '#fff',
    options?: LoadingOptions
  ): void => {
    ElLoading.service({
      lock: true,
      text,
      background,
      ...options,
    })
  }

  // 写一个  simMessage 的数据类型

  /**
   * 提示信息
   * @param {string | VNode} message -要显示的信息。
   * @param {TElStatusType} [type] -要显示的信息的类型。
   * @param {MessageParams} [options] -消息的选项。
   */
  /**
   * 提示信息
   * @param message 要显示的信息
   * @param type 信息类型，默认为 'info'
   * @param options 消息选项
   */
  const simMessage = (
    message: string | VNode,
    type: TElStatusType = 'info',
    options: MessageParams = {}
  ): void => {
    ElMessage(
      Object.assign(
        {
          message,
          type,
          grouping: true,
          duration: messageTime,
        },
        options
      )
    )
  }

  /**
   * 显示警告对话框
   * @param message 要显示的消息内容
   * @param title 对话框标题，默认为 'sim提示'
   * @param options 额外的消息框选项
   */
  const simAlert = (
    message: string | VNode | (() => VNode),
    title = 'sim提示',
    options?: ElMessageBoxOptions
  ): void => {
    ElMessageBox.alert(message, title, {
      confirmButtonText: '确定',
      draggable: true,
      ...options,
    })
  }

  /**
   * 显示确认对话框
   * @param message 要显示的消息内容
   * @param title 对话框标题，默认为 'sim提示'
   * @param success 点击确认按钮时的回调函数，默认为空函数
   * @param cancel 点击取消按钮时的回调函数，默认为空函数
   * @param options 额外的消息框选项
   */
  const simConfirm = (
    message: string | VNode | (() => VNode),
    title = 'sim提示',
    success: () => void = () => {},
    cancel: () => void = () => {},
    options?: ElMessageBoxOptions
  ): void => {
    ElMessageBox.confirm(message, title, {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      draggable: true,
      ...options,
    })
      .then(success)
      .catch(cancel)
  }

  /**
   * 显示通知
   * @param title 通知标题，默认为 'sim通知'
   * @param message 通知内容
   * @param type 通知类型，默认为 'success'
   * @param position 通知位置，默认为 'top-right'
   * @param options 通知选项
   */
  const simNotify = (
    title = 'sim通知',
    message: string | VNode,
    type: TElStatusType = 'success',
    position: TElPosition = 'top-right',
    options: NotificationParams = {}
  ): void => {
    ElNotification(
      Object.assign(
        {
          title,
          message,
          duration: messageTime,
          type,
          position,
        },
        options
      )
    )
  }

  /**
   * 关闭所有通知
   */
  const simNotifyClose = (): void => {
    ElNotification.closeAll()
  }

  return {
    simLoading,
    simMessage,
    simAlert,
    simConfirm,
    simNotify,
    simNotifyClose,
  }
}
