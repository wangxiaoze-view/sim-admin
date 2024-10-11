<template>
  <div class="content">
    <h1>Rsbuild with Vue</h1>
    <p class="aaa" id="222">
      <span v-color="'#ff0000'">Start</span>
      building amazing things with Rsbuild.
    </p>

    <el-button type="primary">
      宋
      <template #dot></template>
    </el-button>
  </div>
</template>

<script lang="ts" setup>
  import { cloneDeep } from 'lodash-es'
  const aa = cloneDeep({ a: 1 })
  console.log(aa)
</script>

<style scoped lang="scss">
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    line-height: 1.1;
    text-align: center;
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
