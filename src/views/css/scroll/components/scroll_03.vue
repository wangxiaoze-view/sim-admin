<script lang="ts" setup></script>

<template>
  <div class="scroll_3">
    <div class="inner-box">
      <div style="height: 400px; padding: 20px">
        <b>在这里进行滚动，查看下方图片</b>
      </div>
    </div>
    <img
      class="image1"
      src="https://file.wangzevw.com/images/default_top_img_3.webp"
      alt="image"
      srcset=""
    />
  </div>
</template>

<style lang="scss" scoped>
  .scroll_3 {
    /** 时间线范围， 目前仅在这个区域内 */
    timeline-scope: --image_1;

    .inner-box {
      height: 200px;
      margin-bottom: 10px;
      overflow: auto;
      border: 1px solid var(--el-border-color);
      scroll-timeline: --image_1;
    }

    .image1 {
      animation:
        1ms scaleUp both,
        1ms fadeIn both;
      animation-timeline: --image_1;
    }
  }
  @keyframes scaleUp {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
