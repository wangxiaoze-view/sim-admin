<script setup lang="ts">
  import { onMounted } from 'vue'
  defineOptions({
    name: 'mutual_03',
    dir_name: 'mutual',
  })

  const init = () => {
    const max = 1000
    for (let i = 0; i < max; i++) {
      const div_box = document.createDocumentFragment()
      const div = document.createElement('div')
      div.classList.add('box-item')
      div_box.appendChild(div)
      document.querySelector('#mutual_03 .box')?.appendChild(div_box)

      const el: any = document.querySelectorAll('#mutual_03 .box-item')[i]
      el.addEventListener(
        'mouseover',
        function () {
          const duration = Math.random() * 2 + 1
          el.classList.add('active')
          el.style.animationDuration = duration + 's'
        },
        false
      )
    }
  }

  onMounted(init)
</script>

<template>
  <div class="container" id="mutual_03">
    <h1>Hello World~</h1>
    <div class="box"></div>
  </div>
</template>

<style lang="scss" scoped>
  #mutual_03 {
    margin: 0;
    padding: 0;
    background-color: #000;
    color: #fff;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    z-index: 10;
  }

  :deep(.box-item) {
    width: 50px;
    height: 50px;
    background-color: #222;
    border: 1px solid #111;
    cursor: pointer;

    &.active {
      background-color: cadetblue;
      box-shadow:
        0 0 10px cadetblue,
        0 0 30px cadetblue,
        0 0 50px cadetblue;
      animation: ani 2s linear forwards;
    }
  }

  @keyframes ani {
    from {
      transform: translateY(0) rotate(0deg);
    }
    to {
      transform: translateY(100vh) rotate(360deg);
    }
  }
</style>
