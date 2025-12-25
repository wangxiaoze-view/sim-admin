<script setup lang="ts">
  import { ref } from 'vue'
  import { useTransition } from '@vueuse/core'
  defineOptions({
    name: 'ComCountAuto',
  })

  const source = ref(0)
  const outputValue = useTransition(source, {
    duration: 500,
  })

  const onComputed = () => {
    source.value = Math.floor(Math.random() * 10)
  }

  setTimeout(() => {
    source.value = 10
  }, 100)
</script>

<template>
  <el-row :gutter="20" class="mb-20">
    <el-col :span="24" :offset="0">
      <el-card class="sim-gruid--item" shadow="hover">
        <div class="header">
          <span>今日订单量</span>
          <el-tag type="warning">日</el-tag>
        </div>
        <div class="content">
          <h1>{{ outputValue.toFixed(2) }}</h1>

          <p>今日订单量</p>
          <el-button type="primary" @click="onComputed">重新计算</el-button>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
  .content {
    text-align: center;
  }
</style>
