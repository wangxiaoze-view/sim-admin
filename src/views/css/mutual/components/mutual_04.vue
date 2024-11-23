<script setup lang="ts">
  import { onMounted } from 'vue'

  const init = () => {
    const covers: any = document.querySelectorAll('.cover')
    for (let i = 0; i < covers.length; i++) {
      covers[i].style.zIndex = covers.length - i
      covers[i].addEventListener('click', function () {
        covers[i].classList.toggle('active')
        if (covers[i].classList.contains('active')) {
          covers[i].style.transform = 'perspective(1000px) rotateY(-180deg)'
          covers[i].style.zIndex = i
        } else {
          covers[i].style.transform = 'perspective(1000px) rotateY(0deg)'
          covers[i].style.zIndex = covers.length - i
        }
      })
    }
  }

  onMounted(() => {
    init()
  })
</script>

<template>
  <div class="demo">
    <div class="left"></div>
    <div class="right">
      <div class="cover">序章</div>
      <div class="cover">第一章</div>
      <div class="cover">第二章</div>
      <div class="cover">第三章</div>
      <div class="cover">第四章</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .demo {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .left,
    .right {
      border-radius: 6px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s;
    }

    .left {
      background-color: transparent;
    }

    .right {
      position: relative;
      transform-style: preserve-3d;
      cursor: pointer;
      .cover {
        width: 160px;
        height: 240px;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        color: #fff;
        font-weight: 800;
        background-color: cadetblue;
        border-radius: 6px;
        transform-style: preserve-3d;
        transform-origin: left center;
        transition: cubic-bezier(0.47, 0, 0.745, 0.715) 0.6s;
      }

      &:hover {
        transform: perspective(1000px) rotateX(40deg);
      }
    }
  }
</style>
