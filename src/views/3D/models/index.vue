stickers
<script setup lang="ts">
  import { shallowRef } from 'vue'
  defineOptions({
    name: 'ThreeModels',
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
      <el-alert type="warning">
        <template #title>
          目前tresjs还没有完全支持rsbuild. 控制台会有警告问题；
          <a href="https://www.wangzevw.com/demos/3d/models/common.html">如果显示不了，请看这里</a>
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
          <Suspense>
            <component :is="item"></component>
          </Suspense>
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
