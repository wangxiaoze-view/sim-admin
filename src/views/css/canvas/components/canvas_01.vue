<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  const containerRef = ref<HTMLDivElement | null>(null)
  const canvasRef = ref<HTMLCanvasElement | null>(null)
  const ctx = ref<CanvasRenderingContext2D | null>(null)

  const isDown = ref(false)

  const startDrawing = (e: MouseEvent) => {
    if (!ctx.value) return
    isDown.value = true
    ctx.value.beginPath()
    ctx.value.moveTo(e.offsetX, e.offsetY)
  }

  const draw = (e: MouseEvent) => {
    if (!ctx.value) return
    if (isDown.value) {
      ctx.value.lineTo(e.offsetX, e.offsetY)
      ctx.value.stroke()
    }
  }

  onMounted(() => {
    if (!canvasRef.value) return
    ctx.value = canvasRef.value.getContext('2d')
    canvasRef.value.width = containerRef.value?.clientWidth || 800
    canvasRef.value.height = containerRef.value?.clientHeight || 600
    console.log(canvasRef.value.width)
    if (!ctx.value) return
    ctx.value.strokeStyle = '#ddd'
    ctx.value.lineWidth = 2
    canvasRef.value.addEventListener('mousedown', startDrawing)
    canvasRef.value.addEventListener('mousemove', draw)
    canvasRef.value.addEventListener('mouseup', () => {
      isDown.value = false
      ctx.value?.closePath()
    })
  })
</script>

<template>
  <div class="box">
    <h3>请在下方虚线内签署您的名字:</h3>
    <div class="container" ref="containerRef">
      <canvas class="canvas" ref="canvasRef"></canvas>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .box {
    h3 {
      margin: 0;
    }
    .container {
      margin-top: 10px;
      width: 100%;
      height: 300px;
      border: 2px solid var(--el-border-color);
      background-color: var(--el-bg-color);
    }
  }
</style>
