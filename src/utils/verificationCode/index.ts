class RandomCodeToCanvas {
  len: number
  charsArr: string[]
  code: string
  constructor() {
    this.len = 4
    this.charsArr = '0123456789abcdwerwshdjeJKDHRJHKPLMKQ'.split('')
    this.code = ''
  }

  // 生成随机数
  randomNum(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  // 生成随机颜色
  randomColor(min: number, max: number) {
    const getRandomNum = this.randomNum(min, max)
    return `rgba(${getRandomNum}, ${getRandomNum}, ${getRandomNum}, 0.8)`
  }

  randomCode() {
    // 初始化
    const canvas: HTMLCanvasElement = document.querySelector('#sim-code')!
    canvas.width = 150
    canvas.height = 50
    const context: CanvasRenderingContext2D = canvas.getContext('2d')!
    context.fillStyle = '#f3f8fe'
    context.fillRect(0, 0, canvas.width, canvas.height)

    // 渐变
    const gradient = context.createLinearGradient(0, 0, canvas.width, 0)
    gradient.addColorStop(0, 'magenta')
    gradient.addColorStop(0.5, 'blue')
    gradient.addColorStop(1, 'red')
    context.fillStyle = gradient

    // 样式
    context.font = '40px Arial'

    // 存储位置
    const rand = []
    const x = []
    const y = []

    for (let i = 0; i < this.len; i++) {
      rand[i] = this.charsArr[Math.floor(Math.random() * this.charsArr.length)]
      x[i] = i * 16 + 20
      y[i] = Math.random() * 20 + 25
      context.fillText(rand[i], x[i], y[i])
    }

    this.code = rand.join('')

    // 干扰线
    for (let i = 0; i < 3; i++) {
      this.drawLine(canvas, context)
    }

    // 点
    for (let i = 0; i < 30; i++) {
      this.drawDot(canvas, context)
    }

    return {
      url: this.convertCanvasToImage(canvas),
      code: this.code || rand.join(''),
    }
  }

  drawLine(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    // 随机线的起点x坐标是画布x坐标0位置，y坐标是画布高度的随机数
    context.moveTo(
      Math.floor(Math.random() * canvas.width),
      Math.floor(Math.random() * canvas.height)
    )
    // 随机线的终点x坐标是画布宽度，y坐标是画布高度的随机数
    context.lineTo(
      Math.floor(Math.random() * canvas.width),
      Math.floor(Math.random() * canvas.height)
    )
    // 随机线宽
    context.lineWidth = 0.5
    // 随机线描边属性
    context.strokeStyle = 'rgba(50,50,50,0.3)'
    // 描边，即起点描到终点
    context.stroke()
  }

  drawDot(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    const px = Math.floor(Math.random() * canvas.width)
    const py = Math.floor(Math.random() * canvas.height)
    context.moveTo(px, py)
    context.lineTo(px + 1, py + 1)
    context.lineWidth = 0.2
    context.stroke()
  }

  convertCanvasToImage(canvas: HTMLCanvasElement) {
    return canvas.toDataURL('image/png')
  }
}

export const randomCodeToCanvas = new RandomCodeToCanvas()
