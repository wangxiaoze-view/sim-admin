<script setup lang="ts">
  import { onMounted } from 'vue'
  defineOptions({
    name: 'card_02',
    dir_name: 'card',
  })

  const init = () => {
    const items = document.querySelectorAll('#card_02 .item')
    const activeName = 'item-active'
    function removeClass(name = activeName) {
      items.forEach((item) => item.classList.remove(name))
    }
    items.forEach((item) => {
      item.addEventListener('click', function () {
        removeClass()
        item.classList.add(activeName)
      })
    })
  }

  onMounted(init)
</script>

<template>
  <div class="container" id="card_02">
    <div class="item item-active"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .item {
    background-image: url('https://www.wangzevw.com/cdn-file/images/default_top_img_1.webp'),
      url('https://www.wangzevw.com/cdn-file/images/default_top_img.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50px;
    cursor: pointer;
    flex: 1;
    margin: 10px;
    position: relative;
    transition: flex 0.5s ease-in;
    height: 26vh;
  }

  .item:nth-child(2) {
    background-image: url('https://www.wangzevw.com/cdn-file/images/default_top_img_2.webp'),
      url('https://www.wangzevw.com/cdn-file/images/default_top_img.webp');
  }

  .item:nth-child(3) {
    background-image: url('https://www.wangzevw.com/cdn-file/images/default_top_img_4.jpeg'),
      url('https://www.wangzevw.com/cdn-file/images/default_top_img.webp');
  }

  .item:nth-child(4) {
    background-image: url('https://www.wangzevw.com/cdn-file/images/default_top_img_5.jpeg'),
      url('https://www.wangzevw.com/cdn-file/images/default_top_img.webp');
  }

  .item:nth-child(5) {
    background-image: url('https://www.wangzevw.com/cdn-file/images/default_top_img_6.jpeg'),
      url('https://www.wangzevw.com/cdn-file/images/default_top_img.webp');
  }

  .item-active {
    flex: 3;
  }
</style>
