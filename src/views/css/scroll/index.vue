<script setup lang="ts">
  import { shallowRef } from 'vue'
  defineOptions({
    name: 'CssScroll',
  })

  const componentsArr = shallowRef<any>([])
  const components = require.context('./components', false, /\.vue$/)
  components.keys().forEach((key) => {
    const module = (components(key) as any).default
    componentsArr.value.push(module)
  })
</script>

<template>
  <el-row :gutter="20">
    <el-col class="mb-20">
      <el-alert type="error">
        <template #title>
          <p>
            以下滚动兼容效果不是很好
            <a href="https://www.wangzevw.com/demos/css/scroll/common.html">查看</a>
          </p>
        </template>
      </el-alert>
    </el-col>
    <el-col
      :md="24"
      :lg="12"
      :xl="8"
      :offset="0"
      :sm="24"
      :xs="24"
      class="mb-20"
      v-for="(item, index) in componentsArr"
      :key="index"
    >
      <el-card shadow="hover">
        <div class="content">
          <component :is="item"></component>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
  .content {
    height: 400px;
  }

  :deep() {
    img {
      width: 100%;
    }
  }
</style>
