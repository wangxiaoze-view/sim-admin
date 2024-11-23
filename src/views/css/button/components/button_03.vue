<script setup lang="ts">
  defineOptions({
    name: 'button_03',
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
    font-size: 16px;
    letter-spacing: 1px;
    position: relative;
    overflow: hidden;
    padding: 0;
    transition: cubic-bezier(0.19, 1, 0.22, 1) 1s;
    color: #000;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
    font-size: 16px;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 2px;
      background-color: #111;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    &:hover::after {
      width: 100%;
      left: 0%;
    }
  }
</style>
