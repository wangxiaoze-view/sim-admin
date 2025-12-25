export interface IWaterRemark {
  /** 水印文本 */
  text: string
  /** 字体粗细 */
  fontWeight: string
  /** 字体大小 */
  fontSize: number
  /** 字体颜色 */
  color: string
}

/**
 * 水印 Hook
 * 提供页面水印功能
 * @returns 水印相关方法
 */
export function useWaterMaking() {
  const watermark: {
    set: (options: IWaterRemark, target?: Element) => void
  } = {
    set: () => {},
  }

  let resizeTimer: ReturnType<typeof setInterval> | null = null
  let resizeHandler: (() => void) | null = null

  /**
   * 设置水印
   * @param options 水印配置选项
   * @param target 目标元素，不传则添加到 body
   * @returns 水印元素 ID
   */
  const setWatermark = (options: IWaterRemark, target?: Element): string => {
    const id = 'water_remark'
    const existingElement = document.getElementById(id)

    // 移除已存在的水印
    if (existingElement) {
      if (target) {
        target.removeChild(existingElement)
      } else {
        document.body.removeChild(existingElement)
      }
    }

    // 创建 canvas 绘制水印
    const canvas = document.createElement('canvas')
    canvas.width = 240
    canvas.height = 140

    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.rotate((-15 * Math.PI) / 180)
      ctx.font = `${options.fontWeight} ${options.fontSize}px Verdana`
      ctx.fillStyle = options.color
      ctx.textAlign = 'left'
      ctx.textBaseline = 'middle'
      ctx.fillText(options.text, canvas.width / 8, canvas.height / 2)
    }

    // 创建水印容器
    const div = document.createElement('div')
    div.id = id
    div.style.pointerEvents = 'none'
    div.style.top = '30px'
    div.style.left = '30px'
    div.style.position = target ? 'absolute' : 'fixed'
    div.style.zIndex = '1990'
    div.style.width = `${target ? target.clientWidth : document.documentElement.clientWidth}px`
    div.style.height = `${target ? target.clientHeight : document.documentElement.clientHeight}px`
    div.style.background = `url(${canvas.toDataURL('image/png')}) left top repeat`

    // 添加到目标元素或 body
    if (target) {
      target.appendChild(div)
    } else {
      document.body.appendChild(div)
    }

    return id
  }

  /**
   * 设置水印（自动监控和恢复）
   * @param options 水印配置选项
   * @param target 目标元素，不传则添加到 body
   */
  watermark.set = (options: IWaterRemark, target?: Element): void => {
    // 清理之前的监控
    if (resizeTimer !== null) {
      clearInterval(resizeTimer)
      resizeTimer = null
    }
    if (resizeHandler) {
      window.removeEventListener('resize', resizeHandler)
      resizeHandler = null
    }

    let id = setWatermark(options, target)

    // 监控水印是否被移除，自动恢复
    resizeTimer = setInterval(() => {
      if (document.getElementById(id) === null) {
        id = setWatermark(options, target)
      }
    }, 500)

    // 窗口大小变化时重新设置水印
    resizeHandler = () => {
      setWatermark(options, target)
    }
    window.addEventListener('resize', resizeHandler)
  }

  /**
   * 移除水印
   */
  const removeWatermark = (): void => {
    const id = 'water_remark'
    const element = document.getElementById(id)
    if (element) {
      element.remove()
    }

    // 清理监控
    if (resizeTimer !== null) {
      clearInterval(resizeTimer)
      resizeTimer = null
    }
    if (resizeHandler) {
      window.removeEventListener('resize', resizeHandler)
      resizeHandler = null
    }
  }

  return {
    /** 水印设置方法 */
    watermark,
    /** 移除水印 */
    removeWatermark,
  }
}
