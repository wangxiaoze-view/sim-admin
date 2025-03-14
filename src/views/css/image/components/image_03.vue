<script setup lang="ts">
  defineOptions({
    name: 'image_03',
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

  img {
    width: 300px;
    object-fit: cover;
    border-radius: 10px;
    /*
    图片阴影:
    box-shadow: 如果使用box-shadow 效果差强人意(是给整个矩形图片加阴影, 可能会突出边角问题)
    drop-shadow: 会在图片周围加阴影
    */
    filter: drop-shadow(red 0px 0px 8px);
  }
</style>
