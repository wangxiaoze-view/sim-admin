<script setup lang="ts">
  defineOptions({
    name: 'image_04',
    dir_name: 'image',
  })
</script>

<template>
  <div class="container">
    <div class="box_1">毛玻璃/磨砂(无效果)</div>
    <div class="box_2">毛玻璃/磨砂(blur)</div>
    <div class="box_3">毛玻璃/磨砂(backdrop-filter)</div>
    <div class="box_4">毛玻璃/磨砂(box-shadow + blur)</div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url('https://www.wangxiaoze.cn/cdn-file/images/default_top_img_3.webp');
    background-repeat: no-repeat;
    position: relative;
  }

  .container > div {
    display: flex;
    align-items: center;
    justify-content: center;
    /* 为了看到效果，必须使元素的背景至少部分透明 */
    background: rgba(255, 255, 255, 0.7);
    width: 60%;
    height: 100px;
    margin-bottom: 10px;
    position: relative;
    overflow: hidden;
    color: #000;
  }

  .box_2 {
    /* 整体模糊, 并且文字不清晰 */
    filter: blur(6px);
  }
  .box_3 {
    backdrop-filter: blur(6px);
  }

  .box_4::before {
    content: '';
    width: 100%;
    height: 100%;
    background: inherit;
    position: absolute;
    right: 0;
    /* left: -25px;
		top: -25px; */
    bottom: 0;
    box-shadow: inset 0 0 0 200px rgba(255, 255, 255, 0.3);
    filter: blur(10px);
  }
</style>
