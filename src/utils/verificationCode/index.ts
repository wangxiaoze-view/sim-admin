interface RandomCodeResult {
  url: string
  code: string
}

/**
 * 随机验证码生成器
 * 在 Canvas 上生成带干扰线和干扰点的验证码图片
 */
class RandomCodeToCanvas {
  /** 验证码长度 */
  private readonly len: number = 4
  /** 可用字符数组 */
  private readonly charsArr: string[] = '0123456789abcdwerwshdjeJKDHRJHKPLMKQ'.split('')
  /** 当前生成的验证码 */
  private code: string = ''

  /**
   * 生成指定范围内的随机数
   * @param min 最小值
   * @param max 最大值
   * @returns 随机数
   */
  private randomNum(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  /**
   * 生成随机颜色
   * @param min 颜色值最小值
   * @param max 颜色值最大值
   * @returns RGBA 颜色字符串
   */
  private randomColor(min: number, max: number): string {
    const randomValue = this.randomNum(min, max)
    return `rgba(${randomValue}, ${randomValue}, ${randomValue}, 0.8)`
  }

  /**
   * 绘制干扰线
   * @param canvas Canvas 元素
   * @param context Canvas 上下文
   */
  private drawLine(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D): void {
    const startX = Math.floor(Math.random() * canvas.width)
    const startY = Math.floor(Math.random() * canvas.height)
    const endX = Math.floor(Math.random() * canvas.width)
    const endY = Math.floor(Math.random() * canvas.height)

    context.beginPath()
    context.moveTo(startX, startY)
    context.lineTo(endX, endY)
    context.lineWidth = 0.5
    context.strokeStyle = 'rgba(50,50,50,0.3)'
    context.stroke()
  }

  /**
   * 绘制干扰点
   * @param canvas Canvas 元素
   * @param context Canvas 上下文
   */
  private drawDot(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D): void {
    const px = Math.floor(Math.random() * canvas.width)
    const py = Math.floor(Math.random() * canvas.height)

    context.beginPath()
    context.moveTo(px, py)
    context.lineTo(px + 1, py + 1)
    context.lineWidth = 0.2
    context.strokeStyle = 'rgba(50,50,50,0.3)'
    context.stroke()
  }

  /**
   * 将 Canvas 转换为图片数据 URL
   * @param canvas Canvas 元素
   * @returns 图片数据 URL
   */
  private convertCanvasToImage(canvas: HTMLCanvasElement): string {
    return canvas.toDataURL('image/png')
  }

  /**
   * 生成随机验证码
   * @returns 包含验证码图片 URL 和验证码字符串的对象
   */
  randomCode(): RandomCodeResult {
    const canvas = document.querySelector<HTMLCanvasElement>('#sim-code')
    if (!canvas) {
      throw new Error('Canvas element with id "sim-code" not found')
    }

    const context = canvas.getContext('2d')
    if (!context) {
      throw new Error('Failed to get canvas context')
    }

    // 设置画布尺寸
    canvas.width = 150
    canvas.height = 50

    // 填充背景色
    context.fillStyle = '#f3f8fe'
    context.fillRect(0, 0, canvas.width, canvas.height)

    // 创建渐变
    const gradient = context.createLinearGradient(0, 0, canvas.width, 0)
    gradient.addColorStop(0, 'magenta')
    gradient.addColorStop(0.5, 'blue')
    gradient.addColorStop(1, 'red')
    context.fillStyle = gradient

    // 设置字体
    context.font = '40px Arial'

    // 生成验证码字符
    const chars: string[] = []
    const xPositions: number[] = []
    const yPositions: number[] = []

    for (let i = 0; i < this.len; i++) {
      const char = this.charsArr[Math.floor(Math.random() * this.charsArr.length)]
      chars.push(char)
      xPositions.push(i * 16 + 20)
      yPositions.push(Math.random() * 20 + 25)
      context.fillText(char, xPositions[i], yPositions[i])
    }

    this.code = chars.join('')

    // 绘制干扰线
    for (let i = 0; i < 3; i++) {
      this.drawLine(canvas, context)
    }

    // 绘制干扰点
    for (let i = 0; i < 30; i++) {
      this.drawDot(canvas, context)
    }

    return {
      url: this.convertCanvasToImage(canvas),
      code: this.code,
    }
  }
}

/**
 * 验证码生成器实例
 */
export const randomCodeToCanvas = new RandomCodeToCanvas()
