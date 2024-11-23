<script setup lang="ts">
  defineOptions({
    name: 'button_02',
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
    --x: 0.6;
    --y: calc(var(--x) * 2);
    width: 140px;
    height: 60px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    outline: none;
    border: none;
    font-size: 16px;
    letter-spacing: 1px;
    position: relative;
    overflow: hidden;
    padding: 0;
    transition: cubic-bezier(0.19, 1, 0.22, 1) 1s;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
    font-size: 16px;
    background-color: #1e1e1e;
    box-shadow:
      0 0 10px #3b3b3b,
      inset 0 0 10px rgb(56, 56, 56);

    &:hover {
      animation: btn2 0.5s ease-in-out;
    }
  }

  @keyframes btn2 {
    0% {
      transform: scale(--var(--x), var(--y));
    }
    25% {
      transform: scale(var(--y), var(--x));
    }
    50% {
      transform: scale(--var(--x), var(--y));
    }
    75% {
      transform: scale(var(--y), var(--x));
    }
    100% {
      transform: scale(1);
    }
  }
</style>
