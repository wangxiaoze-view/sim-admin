<script setup lang="ts">
  import builtIn from './components/built-in.vue'
  import builtOut from './components/built-out.vue'
  defineOptions({
    name: 'PageForm',
  })
</script>

<template>
  <el-row :gutter="20">
    <el-col :span="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>el-内置表单校验</span>
        </div>

        <builtIn />
      </el-card>
    </el-col>
    <el-col :span="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>async-validator插件校验</span>
        </div>
        <builtOut />
      </el-card>
    </el-col>
  </el-row>
</template>
