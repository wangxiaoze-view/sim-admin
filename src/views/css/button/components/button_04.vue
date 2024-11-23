<script setup lang="ts">
  defineOptions({
    name: 'button_04',
    dir_name: 'button',
  })
</script>

<template>
  <div class="container">
    <button class="btn">
      <div class="hidden">
        <div class="btn--default">
          <i class="ri-send-plane-fill icon"></i>
          <span>button</span>
        </div>
        <div class="btn--result">
          <i class="ri-send-plane-fill icon"></i>
          <span>button</span>
        </div>
      </div>
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
    background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
  }
  .btn .icon {
    transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .btn .btn--default,
  .btn .btn--result {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    inset: 0;
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .btn .btn--result {
    transform: translate(0, 100%);
  }
  .btn:hover .btn--default {
    transform: translateY(-100%);
  }
  .btn:hover .btn--result {
    transform: translateY(0);
  }
  .btn:hover .btn--result .icon {
    transform: rotate(45deg);
  }
</style>
