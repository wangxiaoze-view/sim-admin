<script setup lang="ts">
  defineOptions({
    name: 'PageResult',
  })
</script>

<template>
  <el-row :gutter="20">
    <el-col :md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>成功</span>
        </div>
        <el-result icon="success" title="Success Tip" sub-title="Please follow the instructions">
          <template #extra>
            <el-button type="primary">Back</el-button>
          </template>
        </el-result>
      </el-card>
    </el-col>
    <el-col ::md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>警告</span>
        </div>
        <el-result icon="warning" title="Warning Tip" sub-title="Please follow the instructions">
          <template #extra>
            <el-button type="primary">Back</el-button>
          </template>
        </el-result>
      </el-card>
    </el-col>

    <el-col ::md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>错误</span>
        </div>
        <el-result icon="error" title="Error Tip" sub-title="Please follow the instructions">
          <template #extra>
            <el-button type="primary">Back</el-button>
          </template>
        </el-result>
      </el-card>
    </el-col>

    <el-col ::md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>默认</span>
        </div>
        <el-result icon="info" title="Info Tip">
          <template #sub-title>
            <p>Using slot as subtitle</p>
          </template>
          <template #extra>
            <el-button type="primary">Back</el-button>
          </template>
        </el-result>
      </el-card>
    </el-col>
  </el-row>
</template>
