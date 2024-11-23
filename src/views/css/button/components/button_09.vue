<script setup lang="ts">
  defineOptions({
    name: 'button_09',
    dir_name: 'button',
  })
</script>

<template>
  <div class="container">
    <button>button</button>
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

  button {
    width: 140px;
    height: 60px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    outline: none;
    border: none;
    transition-duration: 1s;
    font-size: 16px;
    letter-spacing: 1px;
    position: relative;
    overflow: hidden;
    padding: 0;
    text-transform: uppercase;
    z-index: 0;
    color: #8ec5fc;
  }

  button::before {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;

    background: conic-gradient(transparent, #330867, transparent 40%);
    z-index: -2;
    animation: rote 3s infinite linear;
  }

  button::after {
    content: '';
    position: absolute;
    inset: 2px;
    background-color: #020420;
    z-index: -1;
    border-radius: 6px;
  }

  @keyframes rote {
    100% {
      transform: rotate(360deg);
    }
  }
</style>
