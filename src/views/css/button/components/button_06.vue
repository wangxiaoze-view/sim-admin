<script setup lang="ts">
  defineOptions({
    name: 'button_06',
    dir_name: 'button',
  })
</script>

<template>
  <div class="container">
    <button class="btn"></button>
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

  .btn::before {
    content: 'DOWN';
    display: block;
    z-index: 10;
  }
  .btn::after {
    content: '';
    display: block;
    position: absolute;
    inset: 0;
    left: 0;
    width: 0;
    border-radius: 10px;
    background-image: linear-gradient(to left, #9890e3 0%, #b1f4cf 100%);
  }
  .btn:focus::before {
    animation: btn6_text 3s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .btn:focus::after {
    animation: btn6 3s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  @keyframes btn6_text {
    0%,
    90% {
      content: 'DOWN';
    }

    100% {
      content: 'SUCCESS';
    }
  }
  @keyframes btn6 {
    0% {
      width: 0;
    }
    20% {
      width: 20%;
    }
    40%,
    50% {
      width: 50%;
    }
    51% {
      width: 51%;
    }
    52% {
      width: 52%;
    }
    53% {
      width: 53%;
    }
    54% {
      width: 54%;
    }
    79% {
      width: 70%;
    }
    100% {
      width: 100%;
    }
  }
</style>
