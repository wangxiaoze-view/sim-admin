<template>
  <div class="image5_box">
    <div class="box">
      <div class="box_1"></div>
      <div class="box_2"></div>
      <div class="box_3"></div>
      <div class="box_4"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .image5_box {
    position: relative;
    padding: 14px;
    .box {
      width: 300px;
      height: 300px;
      margin: 30px auto;
      background-color: #fff;
      position: relative;

      div {
        position: absolute;
        width: 100%;
        height: 100%;
      }

      .box_1 {
        clip-path: polygon(0 0, 30% 0, 70% 30%, 70% 60%, 0 100%);
        background: url(https://cdn.wangxiaoze.cn/images/default_top_img_1.webp);
        background-size: cover;
        background-position: 50% -40px;
        transform: scale(0.98);
        transform-origin: left top;
      }

      .box_2 {
        clip-path: polygon(30% 0, 100% 0, 100% 50%, 70% 30%);
        background: url(https://cdn.wangxiaoze.cn/images/default_top_img_2.webp);
        background-size: cover;
        background-position: 20% -40px;
        transform: scale(0.98);
        transform-origin: top right;
      }

      .box_3 {
        clip-path: polygon(0 100%, 100% 100%, 70% 60%);
        background: url(https://cdn.wangxiaoze.cn/images/default_top_img_4.jpeg);
        background-size: cover;
        background-position: 50% 200px;
        transform: scale(0.98);
        transform-origin: bottom left;
      }

      .box_4 {
        clip-path: polygon(70% 30%, 100% 50%, 100% 100%, 70% 60%);
        background: url(https://cdn.wangxiaoze.cn/images/default_top_img_5.jpeg);
        background-size: cover;
        background-position: 8% 100px;
        transform: scale(0.98);
        transform-origin: bottom right;
      }
    }
  }
</style>
