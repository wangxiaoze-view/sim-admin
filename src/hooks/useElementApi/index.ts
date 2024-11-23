import {
  ElMessage,
  ElNotification,
  ElLoading,
  type LoadingOptions,
  type MessageParams,
  ElMessageBox,
  ElMessageBoxOptions,
  NotificationParams,
} from 'element-plus'
import { settings_config } from '~/src/config'
import { EColor } from '~/src/enum'
import { VNode } from 'vue'

const { loadingText, messageTime } = settings_config

type TElStatusType = 'success' | 'warning' | 'info' | 'error'
type TElPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'

export function useElementApi() {
  /**
   * 模拟整个页面的加载状态。
   * @param {string} [text] -要显示的文本。
   * @param {string} [background] -加载蒙版的背景颜色。
   * @param {LoadingOptions} [options] -加载服务的选项。
   */
  const simLoading = (
    text: string = loadingText,
    background: string = EColor.white,
    options?: LoadingOptions
  ) => {
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
  const simMessage = (
    message: string | VNode,
    type: TElStatusType = 'info',
    options?: MessageParams
  ) => {
    ElMessage({
      message,
      type,
      grouping: true,
      duration: messageTime,
      ...((options || {}) as any),
    })
  }

  /**
   * 弹出一个警告对话框。
   * @param {string | VNode | Function} message - 要显示的消息内容，可以是字符串、VNode 或返回 VNode 的函数。
   * @param {string} [title='sim提示'] - 对话框的标题。
   * @param {ElMessageBoxOptions} [options] - 额外的消息框选项。
   */
  const simAlert = (
    message: string | VNode | (() => VNode),
    title = 'sim提示',
    options?: ElMessageBoxOptions
  ) => {
    ElMessageBox.alert(message, title, {
      confirmButtonText: '确定',
      draggable: true,
      ...options,
    })
  }

  /**
   * 弹出一个确认对话框。
   * @param {string | VNode | Function} message - 要显示的消息内容，可以是字符串、VNode 或返回 VNode 的函数。
   * @param {string} [title='sim提示'] - 对话框的标题。
   * @param {Function} [success=() => {}] - 点击确认按钮时的回调函数。
   * @param {Function} [cancel=() => {}] - 点击取消按钮时的回调函数。
   * @param {ElMessageBoxOptions} [options] - 额外的消息框选项。
   */
  const simConfirm = (
    message: string | VNode | (() => VNode),
    title = 'sim提示',
    success = () => {},
    cancel = () => {},
    options?: ElMessageBoxOptions
  ) => {
    ElMessageBox.confirm(message, title, {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      draggable: true,
      ...options,
    })
      .then(success)
      .catch(cancel)
  }

  const simNotify = (
    title = 'sim通知',
    message: string | VNode,
    type: TElStatusType = 'success',
    position: TElPosition = 'top-right',
    options?: NotificationParams
  ) => {
    ElNotification({
      title,
      message,
      duration: messageTime,
      type,
      position,
      ...((options || {}) as any),
    })
  }

  /**
   * 关闭所有simNotify弹出的消息框。
   */
  const simNotifyClose = () => {
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
