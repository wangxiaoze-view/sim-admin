<script setup lang="ts">
  import { onMounted, ref } from 'vue'

  const list = ref<string[]>([])
  const randomNum = (max: number, min: number = 0) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const randomColor = () => {
    return `rgb(${randomNum(255)},${randomNum(255)},${randomNum(255)})`
  }

  const loadMoreImages = (count: number) => {
    const container = document.querySelector('.cross-2 .container') as HTMLElement
    const { width: _w } = container.getBoundingClientRect()
    for (let i = 0; i < count; i++) {
      const width = Math.floor(_w / 3)
      const height = randomNum(300, 60)
      list.value.push(`https://picsum.photos/${width}/${height}?random=${Math.random()}`)
    }
  }
  onMounted(() => {
    const ob = new IntersectionObserver(
      (entries) => {
        const { isIntersecting } = entries[0]
        isIntersecting && loadMoreImages(10)
      },
      {
        root: document.querySelector('.cross-2'),
        threshold: 0,
        rootMargin: '0px',
      }
    )

    ob.observe(document.querySelector('.cross-line') as Element)
  })
</script>

<template>
  <div class="cross-2">
    <div class="container">
      <div class="item" v-for="(item, index) in list" :key="index">
        <img :src="item" alt="" />
      </div>
    </div>
    <div class="cross-line">加载更多...</div>
  </div>
</template>

<style lang="scss" scoped>
  .cross-2 {
    height: 500px;
    overflow-y: auto;
    .container {
      column-count: 3;
      column-gap: 10px;

      .item {
        margin-bottom: 10px;
        break-inside: avoid;
        background: #fff;
        animation: a 5s;

        img {
          width: 100%;
        }
      }
    }
    @keyframes a {
      0% {
        opacity: 0;
        transform: scale(0);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }

    .cross-line {
      text-align: center;
      color: #999;
      letter-spacing: 2px;
      margin-top: 14px;
    }
  }
</style>
