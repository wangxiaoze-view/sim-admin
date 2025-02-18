<script setup lang="ts">
  import { defineAsyncComponent, ref } from 'vue'
  import { Loading, Error } from '../asyncComponent'

  const Rad = defineAsyncComponent({
    loader: () => import('remote/radioForCheck'),
    loadingComponent: () => Loading,
    errorComponent: () => Error,
    delay: 1000,
  })

  const model_1 = ref('篮球')
</script>

<template>
  <el-col :md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
    <el-card shadow="hover">
      <div class="header">单选</div>

      <div class="content">
        <div class="mb-20">
          <el-radio-group v-model="model_1">
            <Rad isIcon value="篮球" border>篮球</Rad>
            <Rad isIcon value="足球" border>足球</Rad>
            <Rad isIcon value="排球" border>排球</Rad>
          </el-radio-group>
        </div>
      </div>
    </el-card>
  </el-col>
</template>

<style scoped lang="scss"></style>
