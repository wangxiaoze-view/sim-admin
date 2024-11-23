<script setup lang="ts">
  defineOptions({
    name: 'button_01',
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
    background-image: linear-gradient(
      to right,
      #eea2a2 0%,
      #bbc1bf 19%,
      #57c6e1 42%,
      #b49fda 79%,
      #7ac5d8 100%
    );
    background-size: 300%;
    background-position: right;
    transition: cubic-bezier(0.19, 1, 0.22, 1) 1s;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
    font-size: 16px;

    &:hover {
      background-position: left;
    }
  }
</style>
