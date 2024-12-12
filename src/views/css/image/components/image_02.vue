<script setup lang="ts">
  defineOptions({
    name: 'image_02',
    dir_name: 'image',
  })
</script>

<template>
  <div class="container">
    <div>
      <div class="box">
        <img
          src="https://www.wangzevw.com/cdn-file/images/default_top_img_3.webp"
          alt="image"
          srcset=""
        />
      </div>

      <div style="overflow: hidden; height: 0">
        <div class="box" id="element">
          <img
            src="https://www.wangzevw.com/cdn-file/images/default_top_img_3.webp"
            alt="image"
            srcset=""
          />
        </div>
      </div>
    </div>
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

  /* -moz-element(#element): 仅仅适用于火狐 */
  .box {
    position: relative;
    width: 300px;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .box::after {
    content: '';
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    height: 100%;
    transform: translateY(1px) rotateX(180deg);
    mask: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
    background: -moz-element(#element);
  }
</style>
