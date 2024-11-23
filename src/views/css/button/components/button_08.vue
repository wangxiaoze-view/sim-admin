<script setup lang="ts">
  defineOptions({
    name: 'button_08',
    dir_name: 'button',
  })
</script>

<template>
  <div class="container">
    <button class="btn">
      <span>B</span>
      <span>a</span>
      <span>c</span>
      <span>k</span>
      <span>T</span>
      <span>o</span>
      <span>p</span>
    </button>
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
  }

  .btn {
    letter-spacing: 6px;
    background-color: #1e1e1e;
    color: #dcd9d4;
    box-shadow:
      0 0 10px #3b3b3b,
      inset 0 0 10px rgb(158, 155, 155);
  }
  .btn span {
    transform: translateY(40%);
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .btn:hover span {
    transform: translateY(-10%) scale(1.2);
  }
  .btn:hover span:nth-child(1) {
    transition-delay: 0.15s;
  }
  .btn:hover span:nth-child(2) {
    transition-delay: 0.2s;
  }
  .btn:hover span:nth-child(3) {
    transition-delay: 0.35s;
  }
  .btn:hover span:nth-child(4) {
    transition-delay: 0.4s;
  }
  .btn:hover span:nth-child(5) {
    transition-delay: 0.55s;
  }
  .btn:hover span:nth-child(6) {
    transition-delay: 0.6s;
  }
  .btn:hover span:nth-child(7) {
    transition-delay: 0.65s;
  }
</style>
