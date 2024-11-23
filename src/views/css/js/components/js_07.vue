<script setup lang="ts">
  import { onMounted } from 'vue'

  onMounted(() => {
    const vd = document.querySelector('video') as HTMLVideoElement
    const ob = new IntersectionObserver(
      (entries) => {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          vd.play()
        } else {
          vd.pause()
        }
      },
      {
        root: document.querySelector('.cross-3'),
        rootMargin: '0px',
        threshold: 0.5,
      }
    )
    ob.observe(vd)
  })
</script>

<template>
  <div class="cross-3">
    <video src="https://www.runoob.com/try/demo_source/movie.mp4" muted></video>
    <div class="pad">内容区</div>
    <div class="pad">内容区</div>
    <div class="pad">内容区</div>
  </div>
</template>

<style lang="scss" scoped>
  .cross-3 {
    height: 500px;
    overflow-y: auto;
    video {
      width: 100%;
      height: 300px;
    }

    .pad {
      height: 180px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: cadetblue;
      margin-top: 10px;
      color: #fff;
    }
  }
</style>
