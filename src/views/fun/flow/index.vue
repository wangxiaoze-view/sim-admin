<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useFlow } from '~/src/hooks'
  defineOptions({
    name: 'FunFlow',
  })

  const { containerRef, init, onCreateNode, TShape, onClearData } = useFlow()

  onMounted(init)
</script>

<template>
  <el-card class="mb-20" shadow="hover">
    <el-space :size="20" class="mb-20">
      <el-button type="primary" @click="onCreateNode(TShape.CIRCLE)">添加圆</el-button>
      <el-button type="primary" @click="onCreateNode(TShape.RECTANGLE)">添加矩形</el-button>
      <el-button type="primary" @click="onCreateNode(TShape.ELLIPSE)">添加椭圆</el-button>
      <el-button type="primary" @click="onCreateNode(TShape.POLYGON)">添加多边形</el-button>
      <el-button type="primary" @click="onCreateNode(TShape.DIAMOND)">添加菱形</el-button>
      <el-button type="primary" @click="onCreateNode(TShape.TEXT)">添加文本</el-button>
      <el-button type="primary" @click="onCreateNode(TShape.HTML)">添加HTML</el-button>
      <el-button type="primary" @click="onClearData">清空画布</el-button>
    </el-space>
    <div ref="containerRef"></div>
  </el-card>
</template>
