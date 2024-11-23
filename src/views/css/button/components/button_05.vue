<script setup lang="ts">
  defineOptions({
    name: 'button_05',
    dir_name: 'button',
  })
</script>

<template>
  <div class="container">
    <button class="btn">
      <div class="hidden">
        <div class="default">
          <i class="ri-download-cloud-2-line icon"></i>
          <span>BUTTON</span>
        </div>
        <div class="result">
          <i class="ri-user-4-line icon"></i>
          <span>SUCCESS</span>
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

  .btn .default,
  .btn .result {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    inset: 0;
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .btn .result {
    transform: translate(0, 100%);
  }
  .btn:focus .default {
    transform: translateY(-100%);
    transition-delay: 1.2s;
  }
  .btn:focus .result {
    transform: translateY(0);
    color: green;
    font-weight: 700;
    transition-delay: 1.2s;
  }
  .btn:focus .result .icon {
    transform: rotate(45deg);
    transition-delay: 1.2s;
  }
  .btn::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 4px;
    border-radius: 10px;
    background-color: #8ec5fc;
    transition: width 2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .btn:focus:after {
    width: 100%;
  }
</style>
