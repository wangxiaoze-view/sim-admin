<script setup lang="ts">
  import ColorThief from 'colorthief'

  const colorThief = new ColorThief()
  const images: string[] = []
  for (let i = 0; i < 4; i++) {
    images.push(`https://picsum.photos/800/800?random=${i}`)
  }

  const getParent = () => {
    return document.querySelector('.image-6') as HTMLDivElement
  }

  const getAllImages = () => {
    return document.querySelectorAll('.img-box img') as NodeListOf<HTMLImageElement>
  }

  const setOpacity = (target: HTMLImageElement) => {
    getAllImages().forEach((item) => {
      item.style.opacity = '0.4'
    })
    target.style.opacity = '1'
  }

  const onMouseEnter = (e: MouseEvent, index: number) => {
    const img = e.target as HTMLImageElement
    let colors = colorThief.getPalette(img, 3)
    colors = colors.map((i: number[]) => `rgb(${i[0]}, ${i[1]}, ${i[2]})`)
    getParent().style.setProperty('--color1', colors[0])
    getParent().style.setProperty('--color2', colors[1])
    getParent().style.setProperty('--color3', colors[2])
    setOpacity(img)
  }

  const onMouseLeave = () => {
    getParent().style.setProperty('--color1', '#fff')
    getParent().style.setProperty('--color2', '#fff')
    getParent().style.setProperty('--color3', '#fff')
    getAllImages().forEach((item) => {
      item.style.opacity = '1'
    })
  }
</script>

<template>
  <div class="image-6" @mouseleave="onMouseLeave">
    <div class="img-box" v-for="(img, index) in images" :key="index">
      <img
        crossorigin="anonymous"
        :src="img"
        alt=""
        srcset=""
        @mouseenter="onMouseEnter($event, index)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .image-6 {
    position: relative;
    gap: 20px;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 200px);
    grid-template-rows: repeat(2, 200px);
    align-content: center;
    justify-content: center;
    background: linear-gradient(to right, var(--color1), var(--color2), var(--color3));

    &:hover::before {
      opacity: 1;
    }

    img {
      border-radius: 6px;
      transition: all 0.3s;
      width: 100%;
      &:hover {
        cursor: pointer;
        transition: all 0.7s;
        transform: scale(1.06);
      }
    }
  }
</style>
