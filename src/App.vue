<template>
  <div class="content" id="12">
    <!-- <img class="test" src="./assets/wave-haikei.svg" alt="" /> -->
    <!-- <img class="test2" src="./assets/logo.svg" alt="" /> -->
  </div>
</template>

<script lang="ts" setup>
  import { cloneDeep } from 'lodash-es'
  const aa = cloneDeep({ a: 1 })
  console.log(aa)
</script>

<style scoped lang="scss">
  .content {
    height: 100vh;
    background: url('./assets/wave-haikei.svg');
    background-repeat: no-repeat;
    background-size: cover;
    .test {
      position: absolute;
      inset: 0;
      width: 100%;
    }

    .test2 {
      position: absolute;
      width: 400px;
    }
  }

  .content h1 {
    font-size: 3.6rem;
    font-weight: 700;
  }

  .content p {
    font-size: 1.2rem;
    font-weight: 400;
    opacity: 0.5;
  }

  ::placeholder {
    color: gray;
  }

  .image {
    background: red;
  }
  @media (min-resolution: 2dppx) {
    .image {
      background: red;
    }
  }
</style>
