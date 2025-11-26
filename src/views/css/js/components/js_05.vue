<script setup lang="ts">
  import { onMounted } from 'vue'

  const list = Array.from({ length: 100 }, (_, index) => index).map(() => 0)
  onMounted(() => {
    const ob = new IntersectionObserver(
      (entries) => {
        for (const element of entries) {
          const target = element.target as HTMLImageElement
          if (element.isIntersecting) {
            target.src = target.getAttribute('data-src')!
            ob.unobserve(target)
          }
        }
      },
      {
        root: document.querySelector('.cross-1'),
        rootMargin: '0px',
        threshold: 1,
      }
    )
    document.querySelectorAll('.cross-1 img').forEach((img) => {
      ob.observe(img)
    })
  })
</script>

<template>
  <div class="cross-1">
    <div v-for="(_, index) in list" :key="index">
      <img
        src="https://assets.wangxiaoze.cn/images/libs/remote-components/icons/404.svg"
        :data-src="`https://picsum.photos/200/300?random=${Math.random()}`"
        alt=""
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .cross-1 {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
</style>
