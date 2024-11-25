<script setup lang="ts">
  import page_403 from '~/src/views/403.vue'
  import page_404 from '~/src/views/404.vue'
  import page_500 from '~/src/views/500.vue'
  import netOffline from '~/src/views/netOffline.vue'

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
        <div class="card-height">
          <el-result icon="success" title="Success Tip" sub-title="Please follow the instructions">
            <template #extra>
              <el-button type="primary">Back</el-button>
            </template>
          </el-result>
        </div>
      </el-card>
    </el-col>
    <el-col ::md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>警告</span>
        </div>
        <div class="card-height">
          <el-result icon="warning" title="Warning Tip" sub-title="Please follow the instructions">
            <template #extra>
              <el-button type="primary">Back</el-button>
            </template>
          </el-result>
        </div>
      </el-card>
    </el-col>

    <el-col ::md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>错误</span>
        </div>
        <div class="card-height">
          <el-result icon="error" title="Error Tip" sub-title="Please follow the instructions">
            <template #extra>
              <el-button type="primary">Back</el-button>
            </template>
          </el-result>
        </div>
      </el-card>
    </el-col>

    <el-col ::md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>默认</span>
        </div>
        <div class="card-height">
          <el-result icon="info" title="Info Tip">
            <template #sub-title>
              <p>Using slot as subtitle</p>
            </template>
            <template #extra>
              <el-button type="primary">Back</el-button>
            </template>
          </el-result>
        </div>
      </el-card>
    </el-col>

    <el-col ::md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>403</span>
        </div>
        <div class="card-height">
          <page_403 />
        </div>
      </el-card>
    </el-col>

    <el-col ::md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>404</span>
        </div>
        <div class="card-height">
          <page_404 />
        </div>
      </el-card>
    </el-col>
    <el-col ::md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>500</span>
        </div>
        <div class="card-height">
          <page_500 />
        </div>
      </el-card>
    </el-col>

    <el-col ::md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>网络离线</span>
        </div>
        <div class="card-height">
          <netOffline />
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
  .card-height {
    height: 400px;
  }

  :deep(.error_page) {
    padding: 0 !important;
  }
</style>
