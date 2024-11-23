export interface IWaterRemark {
  text: string
  fontWeight: string
  fontSize: number
  color: string
}

export function useWatermaking() {
  const watermark: any = {}
  // 水印
  const setWatermark = (options: IWaterRemark, target: Element) => {
    const id = 'water_remark'

    if (document.getElementById(id) !== null) {
      target
        ? target.removeChild(document.getElementById(id) as HTMLElement)
        : document.body.removeChild(document.getElementById(id) as HTMLElement)
    }

    const can = document.createElement('canvas')
    can.width = 240
    can.height = 140

    const canvas = can.getContext('2d')
    if (canvas) {
      canvas.rotate((-15 * Math.PI) / 180)
      canvas.font = `${options.fontWeight} ${options.fontSize}px  Vedana`
      canvas.fillStyle = options.color
      canvas.textAlign = 'left'
      canvas.textBaseline = 'middle'
      canvas.fillText(options.text, can.width / 8, can.height / 2)
    }
    const div = document.createElement('div')
    div.id = id
    div.style.pointerEvents = 'none'
    div.style.top = '30px'
    div.style.left = '30px'
    div.style.position = target ? '' : 'fixed'
    div.style.zIndex = '1990'
    div.style.width = `${target ? target.clientWidth : document.documentElement.clientWidth}px`
    div.style.height = `${target ? target.clientHeight : document.documentElement.clientHeight}px`
    div.style.background = `url(${can.toDataURL('image/png')}) left top repeat`
    target ? target.appendChild(div) : document.body.appendChild(div)
    return id
  }

  watermark.set = (options: IWaterRemark, target: Element) => {
    let id = setWatermark(options, target)
    setInterval(() => {
      if (document.getElementById(id) === null) id = setWatermark(options, target)
    }, 500)
    window.onresize = () => {
      setWatermark(options, target)
    }
  }

  return {
    watermark,
  }
}
