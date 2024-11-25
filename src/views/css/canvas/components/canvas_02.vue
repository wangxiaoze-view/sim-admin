<script lang="ts" setup>
  import { onMounted, ref } from 'vue'
  import { Shape } from '~/src/components/SimSvg/enum'
  import svgIcon from '~/src/components/SimSvg/index.vue'
  import { TShape } from '~/src/enum'

  interface IRectType {
    width: number
    height: number
    x: number
    y: number
  }

  interface ICircleType {
    x: number
    y: number
    r: number
  }

  interface IShapesItem {
    type: Shape | TShape
  }
  const shapes: IShapesItem[] = [
    { type: TShape.RECTANGLE },
    { type: TShape.CIRCLE },
    { type: Shape.CLEAN },
  ]

  const initCanvas = (): [HTMLCanvasElement, CanvasRenderingContext2D] => {
    const container = document.querySelector('.canvas-2') as HTMLCanvasElement
    const { width } = container.getBoundingClientRect()
    const canvas = container.querySelector(' #canvas') as HTMLCanvasElement
    canvas.width = width
    canvas.height = 500
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    ctx.strokeStyle = '#ddd'
    return [canvas, ctx]
  }

  const canvas = ref<HTMLCanvasElement>()
  const ctx = ref<CanvasRenderingContext2D>()
  const type = ref<Shape | string>()
  const isDrawing = ref<boolean>(false)
  const lastX = ref<number>(0)
  const lastY = ref<number>(0)

  const rects = ref<IRectType[]>([])
  const circles = ref<ICircleType[]>([])

  const clearCanvas = () => {
    ctx.value!.clearRect(0, 0, canvas.value!.width, canvas.value!.height)
  }

  const onClickToolbarItem = (item: IShapesItem) => {
    type.value = item.type
    if (type.value === Shape.CLEAN) {
      clearCanvas()
      type.value = ''
      isDrawing.value = false
      lastX.value = 0
      lastY.value = 0
      rects.value = []
      circles.value = []
    }
  }

  const drawRectangle = (e: MouseEvent) => {
    rects.value.forEach((item) => {
      ctx.value!.beginPath()
      ctx.value!.rect(item.x, item.y, item.width, item.height)
      ctx.value!.stroke()
      ctx.value!.closePath()
    })

    if (type.value === TShape.RECTANGLE) {
      ctx.value!.beginPath()
      ctx.value!.rect(lastX.value, lastY.value, e.offsetX - lastX.value, e.offsetY - lastY.value)
      ctx.value!.stroke()
      ctx.value!.closePath()
    }
  }

  const drawCircle = (e: MouseEvent) => {
    circles.value.forEach((item) => {
      ctx.value!.beginPath()
      ctx.value!.arc(item.x, item.y, item.r, 0, Math.PI * 2)
      ctx.value!.stroke()
      ctx.value!.closePath()
    })
    if (type.value === TShape.CIRCLE) {
      ctx.value!.beginPath()
      ctx.value!.arc(lastX.value, lastY.value, Math.abs(e.offsetX - lastX.value), 0, Math.PI * 2)
      ctx.value!.stroke()
      ctx.value!.closePath()
    }
  }

  const onMouseDown = (e: MouseEvent) => {
    isDrawing.value = true
    ;[lastX.value, lastY.value] = [e.offsetX, e.offsetY]
  }

  const onMouseMove = (e: MouseEvent) => {
    if (!isDrawing.value) return
    if (!type.value) return
    clearCanvas()
    drawCircle(e)
    drawRectangle(e)
  }

  const onMouseOup = (e: MouseEvent) => {
    isDrawing.value = false

    // 抬手记录
    type.value === TShape.RECTANGLE &&
      rects.value.push({
        x: lastX.value,
        y: lastY.value,
        width: e.offsetX - lastX.value,
        height: e.offsetY - lastY.value,
      })

    type.value === TShape.CIRCLE &&
      circles.value.push({
        x: e.offsetX,
        y: lastY.value,
        r: Math.abs(e.offsetX - lastX.value),
      })
  }

  onMounted(() => {
    ;[canvas.value, ctx.value] = initCanvas()
    canvas.value.addEventListener('mousedown', onMouseDown)
    canvas.value?.addEventListener('mousemove', onMouseMove)
    canvas.value?.addEventListener('mouseup', onMouseOup)
    canvas.value?.addEventListener('mouseout', () => {
      isDrawing.value = false
    })
  })
</script>

<template>
  <div class="canvas-2">
    <div class="container">
      <div class="toolbar">
        <div
          v-for="(item, index) in shapes"
          :key="index"
          class="toolbar-item"
          :class="[item.type === type ? 'active' : '']"
          @click="onClickToolbarItem(item)"
        >
          <svgIcon :type="item.type" />
        </div>
      </div>
    </div>
    <canvas id="canvas"></canvas>
  </div>
</template>

<style lang="scss" scoped>
  .canvas-2 {
    border: 1px solid var(--el-border-color);
    height: 100%;
    .container {
      position: relative;

      .toolbar {
        position: absolute;
        top: 4px;
        left: 50%;
        transform: translateX(-50%);
        background-color: var(--el-bg-color);
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 4px;
        z-index: 1;

        &-item {
          display: flex;
          align-items: center;
          padding: 8px;
          border-radius: 2px;
          cursor: pointer;
          &:hover {
            background-color: rgba(68, 111, 117, 0.2);
          }
          &.active {
            background-color: rgb(133, 138, 225);
          }
        }
      }
    }
  }
</style>
