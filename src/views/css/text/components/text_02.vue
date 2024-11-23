<script setup lang="ts">
  defineOptions({
    name: 'text_02',
    dir_name: 'text',
  })
</script>

<template>
  <div class="container">
    <p class="text">文字交融效果</p>
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
    filter: contrast(30);
  }

  .text {
    cursor: pointer;
    font-size: 40px;
    font-weight: bold;
    letter-spacing: -30px;
    animation: ani 2s linear forwards;
  }

  @keyframes ani {
    0% {
      filter: blur(10px);
    }
    100% {
      letter-spacing: 10px;
      filter: blur(0px);
    }
  }
</style>
