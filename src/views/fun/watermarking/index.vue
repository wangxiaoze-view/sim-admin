<script setup lang="ts">
  import MyWater from './components/myWater.vue'
  import EleWater from './components/eleWater.vue'

  defineOptions({
    name: 'FunWatermarking',
  })
</script>

<template>
  <el-row :gutter="20">
    <el-col :md="24" :lg="12" :xl="12" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>我的水印</span>
        </div>
        <div class="card-height">
          <MyWater />
        </div>
      </el-card>
    </el-col>

    <el-col :md="24" :lg="12" :xl="12" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>系统自带水印</span>
        </div>
        <div class="card-height">
          <EleWater />
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
  :deep(.el-card) {
    height: 100% !important;
  }
</style>
