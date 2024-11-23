<script setup lang="ts">
  import { ref } from 'vue'
  import { useFullscreen } from '~/src/hooks'

  defineOptions({
    name: 'FunFullScreen',
  })

  const { isFullscreen, toggle } = useFullscreen()

  const el = ref<HTMLElement | null>(null)

  const { isFullscreen: isFullscreen2, toggle: toggle2 } = useFullscreen(el)
</script>

<template>
  <el-card class="mb-20" shadow="hover" ref="el">
    <el-alert title="当然可以点击按钮切换全屏状态" type="success" :closable="false" />

    <p>
      当前的屏幕状态（
      <b>整个页面</b>
      ）:
      <el-button type="primary" link>{{ isFullscreen ? '全屏状态' : '非全屏状态' }}</el-button>

      <el-button type="primary" @click="toggle">切换</el-button>
    </p>

    <p class="target">
      当前的屏幕状态（
      <b>内容区域</b>
      ）:
      <el-button type="primary" link>{{ isFullscreen2 ? '全屏状态' : '非全屏状态' }}</el-button>
      <el-button type="primary" @click="toggle2">切换（目标元素）</el-button>
    </p>
  </el-card>
</template>
