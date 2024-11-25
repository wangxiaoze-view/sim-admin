<script lang="ts" setup>
  import { ref } from 'vue'

  const color = ref('#ffffff')
  const toColor = async () => {
    try {
      // @ts-expect-error TS2339
      const dropper = new EyeDropper()
      const result = await dropper.open()
      color.value = result.sRGBHex
      // 复制功能, 如果您的浏览器没有开启对应的权限则不会主动复制
      navigator.clipboard.writeText(color.value)
    } catch (error) {
      color.value = '您的浏览器暂不支持颜色拾取功能-EyeDropper'
    }
  }
</script>

<template>
  <div class="container">
    <div class="color" @click="toColor"></div>
    <b>{{ color }}</b>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 14px;
    .color {
      width: 50px;
      height: 50px;
      border-radius: 4px;
      border: 1px solid var(--el-border-color);
      cursor: pointer;
      background-color: v-bind(color);
    }
    b {
      padding-left: 20px;
      font-weight: bold;
      letter-spacing: 1px;
      font-size: 16px;
    }
  }
</style>
