<script setup lang="ts">
  defineOptions({
    name: 'card_03',
    dir_name: 'card',
  })
</script>

<template>
  <div class="container-box">
    <div class="row row-left">
      <div class="item">A</div>
      <div class="item">B</div>
      <div class="item">C</div>
      <div class="item">D</div>
      <div class="item">E</div>
      <div class="item">F</div>
      <div class="item">G</div>
    </div>
    <div class="row row-right">
      <div class="item">A</div>
      <div class="item">B</div>
      <div class="item">C</div>
      <div class="item">D</div>
      <div class="item">E</div>
      <div class="item">F</div>
      <div class="item">G</div>
    </div>
    <div class="row row-left">
      <div class="item">A</div>
      <div class="item">B</div>
      <div class="item">C</div>
      <div class="item">D</div>
      <div class="item">E</div>
      <div class="item">F</div>
      <div class="item">G</div>
    </div>
    <div class="row row-right">
      <div class="item">A</div>
      <div class="item">B</div>
      <div class="item">C</div>
      <div class="item">D</div>
      <div class="item">E</div>
      <div class="item">F</div>
      <div class="item">G</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container-box {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    mask: linear-gradient(90deg, transparent, #020420 20%, #020420 80%, transparent);
  }

  .row {
    display: flex;
    align-items: center;
    margin-bottom: 14px;
  }
  .item {
    width: 140px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    box-shadow: -1px 2px 6px rgba(255, 255, 255, 0.5);
    filter: brightness(0.5);
    transition: cubic-bezier(0.23, 1, 0.32, 1) 0.4s;
    cursor: pointer;
  }

  /* 匀速正反交替播放 */
  .row-left {
    animation: 10s left linear infinite alternate;
  }
  .row-right {
    animation: 10s right linear infinite alternate;
  }

  .row:hover {
    animation-play-state: paused;
  }

  .item:hover {
    filter: brightness(1);
  }

  @keyframes left {
    0% {
      transform: translate3d(-240px, 0, 0);
    }
    100% {
      transform: translate3d(320px, 0, 0);
    }
  }

  @keyframes right {
    0% {
      transform: translate3d(320px, 0, 0);
    }

    100% {
      transform: translate3d(-240px, 0, 0);
    }
  }
</style>
