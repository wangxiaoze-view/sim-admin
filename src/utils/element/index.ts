import { ElMessage, ElNotification } from 'element-plus'
import type { VNode } from 'vue'
const messageDuration = 1500
/**
 * @description 消息通知
 * @param {*} param0
 */
export function simNotice({
  title = 'title',
  message = 'msg',
  type = 'success',
  duration = 2000,
  isCloseBefore = false,
} = {}) {
  if (isCloseBefore) simNoticeClose()
  const op = {
    title,
    message,
    type,
    duration,
  }
  switch (type) {
    case 'success':
      ElNotification.success(op)
      break
    case 'info':
      ElNotification.info(op)
      break
    case 'warning':
      ElNotification.warning(op)
      break
    case 'error':
      ElNotification.error(op)
      break
  }
}

export function simNoticeClose() {
  ElNotification.closeAll()
}

export function simMessage(
  message: string | VNode,
  type: 'success' | 'warning' | 'info' | 'error' = 'info',
  customClass?: string,
  dangerouslyUseHTMLString?: boolean,
  callback?: any
) {
  ElMessage({
    message,
    type,
    customClass,
    grouping: true,
    duration: messageDuration,
    dangerouslyUseHTMLString,
    showClose: false,
    onClose: () => {
      if (callback) callback()
    },
  })
}

// 水波纹的创建与删除
export function createRipple(el: HTMLElement, e: MouseEvent) {
  // 设置按钮overflow
  el.style.overflow = 'hidden'
  // 获取按钮的长宽
  const { clientWidth, clientHeight } = el
  // 算出直径
  const diameter = Math.ceil(Math.sqrt(clientWidth ** 2 + clientHeight ** 2))
  // 算出半径
  const radius = diameter / 2
  // 获取按钮的全局坐标
  const { left, top } = el.getBoundingClientRect()
  // 设置按钮的定位是relative
  const position = el.style.position
  if (!position || position === 'static') {
    el.style.position = 'relative'
  }
  // 获取鼠标点击全局坐标
  const { clientX, clientY } = e

  // 创建一个圆dom
  const rippleEle = document.createElement('div')
  // 设置唯一标识id
  rippleEle.id = 'ripple'
  // 设置长宽
  rippleEle.style.width = rippleEle.style.height = `${diameter}px`
  rippleEle.style.left = `${clientX - radius - left}px`
  rippleEle.style.top = `${clientY - radius - top}px`
  // 插入圆dom
  el.appendChild(rippleEle)
}

export function removeRipple(el: HTMLElement) {
  const rippleEl = el.querySelector('#ripple')
  rippleEl && el.removeChild(rippleEl)
}
