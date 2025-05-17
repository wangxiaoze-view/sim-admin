<script setup lang="ts">
  import { onMounted } from 'vue'
  defineOptions({
    name: 'mutual_01',
    dir_name: 'mutual',
  })

  const init = () => {
    const container: any = document.querySelector('#mutual_01')
    const clientRect = container?.getBoundingClientRect()
    container.addEventListener('mousemove', (e: any) => {
      const w = clientRect.width - 50
      const h = clientRect.height - 50
      // 边界判断, 50 是为了避免鼠标移到边界时，超出容器 正好是球的宽度和高度
      container.style.setProperty('--x', `${e.offsetX >= w ? w : e.offsetX}px`)
      container.style.setProperty('--y', `${e.offsetY >= h ? h : e.offsetY}px`)
    })
  }

  onMounted(init)
</script>

<template>
  <div class="container" id="mutual_01"></div>
</template>

<style lang="scss" scoped>
  #mutual_01 {
    --x: -100px;
    --y: -100px;
    position: relative;
    width: inherit;
    height: inherit;
    background: url('https://cdn.wangxiaoze.cn/images/default_top_img.webp') no-repeat;
  }
  #mutual_01::before {
    content: '';
    display: block;
    position: absolute;
    inset: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.5);
    filter: grayscale(0.5);
    cursor: pointer;
  }

  #mutual_01::after {
    content: '';
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    position: absolute;
    box-shadow: 0 0 10px 10px rgba(255, 255, 255, 0.5);
    z-index: 10;
    transform: translate(var(--x), var(--y));
    transition: cubic-bezier(0.215, 0.61, 0.355, 1) 0.5s;
  }
</style>
