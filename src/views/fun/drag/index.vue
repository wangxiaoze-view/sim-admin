<script setup lang="ts">
  import DragTable from './components/dragTable.vue'
  import DragColor from './components/dragColor.vue'
  import DragAnimate from './components/dragAnimate.vue'

  defineOptions({
    name: 'FunDrag',
  })
</script>

<template>
  <el-row :gutter="20">
    <el-col :md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>表格拖拽</span>
        </div>
        <div class="card-height">
          <el-scrollbar>
            <DragTable />
          </el-scrollbar>
        </div>
      </el-card>
    </el-col>
    <el-col :md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>颜色拖拽</span>
        </div>

        <div class="card-height">
          <el-scrollbar>
            <DragColor />
          </el-scrollbar>
        </div>
      </el-card>
    </el-col>
    <el-col :md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>拖拽动画</span>
        </div>

        <div class="card-height">
          <el-scrollbar>
            <DragAnimate />
          </el-scrollbar>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
  .card-height {
    height: 300px;
  }
</style>
