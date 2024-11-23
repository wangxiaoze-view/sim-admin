<script setup lang="ts">
  defineOptions({
    name: 'button_06',
    dir_name: 'button',
  })
</script>

<template>
  <div class="container">
    <button class="btn" data-text="结算金额: $100.00">
      <div class="hidden">
        <div class="default">BUY NOW</div>
        <div class="result">
          <i class="ri-shopping-cart-2-line"></i>
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

  .hidden {
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
  }

  .btn {
    --gap: 18px;
    overflow: initial;
    color: #dcd9d4;
    background-color: #1e1e1e;
    box-shadow:
      0 0 10px #3b3b3b,
      inset 0 0 10px rgb(158, 155, 155);
  }

  .btn::before,
  .btn::after {
    opacity: 0;
    visibility: hidden;
    transition: bottom 0.4s;
  }
  .btn::before {
    content: attr(data-text);
    display: block;
    position: absolute;
    bottom: calc(100% + var(--gap) + 10px);
    padding: 8px 10px;
    border-radius: 5px;
    background-color: #555;
    color: #fff;
    font-size: 12px;
  }
  .btn::after {
    content: '';
    position: absolute;
    bottom: calc(100% + var(--gap) - 10px);
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top-color: #555;
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
  .btn:hover .default {
    transform: translateY(-100%);
  }
  .btn:hover .result {
    font-size: 30px;
    transform: translateY(0);
  }
  .btn:hover::before,
  .btn:hover::after {
    opacity: 1;
    visibility: visible;
  }
  .btn:hover::before {
    bottom: calc(100% + var(--gap));
  }
  .btn:hover::after {
    bottom: calc(100% + var(--gap) - 20px);
  }
</style>
