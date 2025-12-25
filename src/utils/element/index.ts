/**
 * 创建水波纹效果
 * 在元素上创建点击时的水波纹动画效果
 * @param el 目标元素
 * @param e 鼠标事件对象
 */
export function createRipple(el: HTMLElement, e: MouseEvent): void {
  // 设置元素 overflow 为 hidden，确保水波纹不溢出
  el.style.overflow = 'hidden'

  // 获取元素尺寸
  const { clientWidth, clientHeight } = el

  // 计算水波纹直径（确保能覆盖整个元素）
  const diameter = Math.ceil(Math.sqrt(clientWidth ** 2 + clientHeight ** 2))
  const radius = diameter / 2

  // 获取元素相对于视口的位置
  const { left, top } = el.getBoundingClientRect()

  // 确保元素定位为 relative，以便水波纹正确定位
  const position = el.style.position
  if (!position || position === 'static') {
    el.style.position = 'relative'
  }

  // 获取鼠标点击位置
  const { clientX, clientY } = e

  // 创建水波纹元素
  const rippleEle = document.createElement('div')
  rippleEle.id = 'ripple'
  rippleEle.style.width = `${diameter}px`
  rippleEle.style.height = `${diameter}px`
  rippleEle.style.left = `${clientX - radius - left}px`
  rippleEle.style.top = `${clientY - radius - top}px`
  rippleEle.style.position = 'absolute'
  rippleEle.style.borderRadius = '50%'
  rippleEle.style.backgroundColor = 'rgba(255, 255, 255, 0.6)'
  rippleEle.style.pointerEvents = 'none'
  rippleEle.style.transform = 'scale(0)'
  rippleEle.style.animation = 'ripple 0.6s ease-out'

  // 插入水波纹元素
  el.appendChild(rippleEle)

  // 动画结束后移除元素
  rippleEle.addEventListener('animationend', () => {
    if (rippleEle.parentNode) {
      rippleEle.parentNode.removeChild(rippleEle)
    }
  })
}

/**
 * 移除水波纹效果
 * @param el 目标元素
 */
export function removeRipple(el: HTMLElement): void {
  const rippleEl = el.querySelector('#ripple')
  if (rippleEl && rippleEl.parentNode) {
    rippleEl.parentNode.removeChild(rippleEl)
  }
}
