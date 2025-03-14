<script setup lang="ts">
  defineOptions({
    name: 'text_01',
    dir_name: 'text',
  })
</script>

<template>
  <div class="container">
    <p class="text">文字与图片交融</p>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    position: relative;
    width: inherit;
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .text {
    cursor: pointer;
    font-size: 40px;
    font-weight: bold;
    background: url('https://www.wangxiaoze.cn/cdn-file/images/default_top_img.webp');
    color: transparent;
    /* 背景以文字的形式裁剪 */
    -webkit-background-clip: text;
    background-clip: text;
  }
</style>
