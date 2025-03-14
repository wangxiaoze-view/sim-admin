<script setup lang="ts">
  defineOptions({
    name: 'image_01',
    dir_name: 'image',
  })
</script>

<template>
  <div class="container">
    <img
      src="https://www.wangxiaoze.cn/cdn-file/images/default_top_img_3.webp"
      alt="image"
      srcset=""
    />
  </div>
</template>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* -webkit-box-reflect: 存在兼容问题,火狐暂不支持 */
  img {
    width: 300px;
    object-fit: cover;
    -webkit-box-reflect: below 1px linear-gradient(transparent, rgba(0, 0, 0, 0.5));
  }
</style>
