<script setup lang="ts">
  defineOptions({
    name: 'card_01',
    dir_name: 'card',
  })
</script>

<template>
  <div class="container">
    <div class="card-item" style="--i: -2">1</div>
    <div class="card-item" style="--i: -1">2</div>
    <div class="card-item" style="--i: 0">3</div>
    <div class="card-item" style="--i: 1">4</div>
    <div class="card-item" style="--i: 2">5</div>
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

  .card-item {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10em;
    color: rgba(255, 255, 255, 0);
    font-weight: 800;
    width: 160px;
    height: 240px;
    background-color: cadetblue;
    border-radius: 6px;
    box-shadow: inset 0 0 5px #fff;
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;
    cursor: pointer;
    transform-origin: bottom;
    filter: hue-rotate(calc(var(--i) * 50deg));
  }

  .container:hover .card-item {
    transform: rotate(calc(var(--i) * 10deg)) translate(calc(var(--i) * 100px), -40px);
    color: rgba(255, 255, 255, 0.2);
  }

  .container:hover .card-item:not(:active) {
    background-color: #111;
  }

  .container .card-item:active {
    translate: calc(var(--i) * 50px) -40px;
    z-index: 100;
  }
</style>
