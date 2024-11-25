<script setup lang="ts">
  import { ref } from 'vue'
  const inputVModel = ref('请复制这一段文字')

  const onClick = () => {
    if (!navigator.clipboard) return
    const container = document.querySelector('.clipboard-1 .container') as HTMLDivElement
    container.innerHTML = ''
    const span = document.createElement('span')
    const text = `${inputVModel.value}, xxx版权所有;`
    navigator.clipboard
      .writeText(text)
      .then(() => {
        span.innerHTML = '复制成功: ' + text
        span.style.color = '#ff0000'
        container?.appendChild(span)
      })
      .catch((err) => {
        span.innerHTML = '复制失败: ' + err
        container?.appendChild(span)
      })
  }
</script>

<template>
  <div class="clipboard-1">
    <div class="handler">
      <el-input v-model="inputVModel" placeholder="请复制这一段文字"></el-input>
      <el-button type="primary" @click="onClick">粘贴</el-button>
    </div>
    <div class="container" contenteditable="true"></div>
  </div>
</template>

<style lang="scss" scoped>
  .clipboard-1 {
    .handler {
      display: flex;
      gap: 20px;
      margin-bottom: 20px;
    }
    .container {
      border: 1px solid var(--el-border-color);
      border-radius: 6px;
      padding: 10px;
      &:empty {
        min-height: 30px;
        cursor: pointer;
        &::before {
          content: '这里会展示粘贴的结果!';
        }
      }
    }
  }
</style>
