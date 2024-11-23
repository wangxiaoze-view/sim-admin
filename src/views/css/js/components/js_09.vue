<script setup lang="ts">
  import { ElMessage } from 'element-plus'
  import { onMounted } from 'vue'

  // 监听copy 事件
  onMounted(() => {
    const text = document.querySelector('.clipboard-2 p') as HTMLElement
    text.addEventListener('copy', function (e) {
      ElMessage.error('禁止复制!~~')
      e.preventDefault()
      e.clipboardData?.setData('text/plain', '')
    })
  })
</script>

<template>
  <div class="clipboard-2">
    <p>
      在如此快节奏的社会里，哪怕仅仅是一个短暂的驻足也会打乱整天的计划，而走在车水马龙中的我们便任凭那美妙的四季一次又一次的从身边路过，慢慢地，人们就只知道到了某个季节，应该如何的增添衣物，却无人用心记录下这些美好的瞬间。
    </p>
  </div>
</template>

<style lang="scss" scoped>
  .clipboard-2 {
    p {
      text-indent: 2em;
      &::selection {
        background: #505333;
        color: #fff;
      }
    }
  }
</style>
