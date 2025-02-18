<script setup lang="ts">
  import { defineAsyncComponent } from 'vue'
  import { Loading, Error } from '../asyncComponent'

  const Btn = defineAsyncComponent({
    loader: () => import('remote/button'),
    loadingComponent: () => Loading,
    errorComponent: () => Error,
    delay: 1000,
  })
</script>

<template>
  <el-col :md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
    <el-card shadow="hover">
      <div class="header">按钮</div>
      <div class="content">
        <div class="mb-20">
          <Btn type="primary">Remote</Btn>
          <Btn type="success">Remote</Btn>
          <Btn type="info">Remote</Btn>
          <Btn type="warning">Remote</Btn>
          <Btn type="danger">Remote</Btn>
        </div>

        <div class="mb-20">
          <Btn type="primary" plain>Remote</Btn>
          <Btn type="success" plain>Remote</Btn>
          <Btn type="info" plain>Remote</Btn>
          <Btn type="warning" plain>Remote</Btn>
          <Btn type="danger" plain>Remote</Btn>
        </div>

        <div class="mb-20">
          <Btn type="primary" round>Remote</Btn>
          <Btn type="success" round>Remote</Btn>
          <Btn type="info" round>Remote</Btn>
          <Btn type="warning" round>Remote</Btn>
          <Btn type="danger" round>Remote</Btn>
        </div>

        <div class="mb-20">
          <Btn type="primary" circle>
            <template #icon>
              <i class="ri-send-plane-fill"></i>
            </template>
          </Btn>
          <Btn type="success" circle>
            <template #icon>
              <i class="ri-links-fill"></i>
            </template>
          </Btn>
          <Btn type="info" circle>
            <template #icon>
              <i class="ri-heart-add-2-line"></i>
            </template>
          </Btn>
          <Btn type="warning" circle>
            <template #icon>
              <i class="ri-function-add-line"></i>
            </template>
          </Btn>
          <Btn type="danger" circle>
            <template #icon>
              <i class="ri-user-add-line"></i>
            </template>
          </Btn>
        </div>

        <div class="mb-20">
          <Btn type="primary">
            Loading
            <template #loading>
              <i class="ri-restart-line"></i>
            </template>
          </Btn>
          <Btn type="success">
            Loading
            <template #loading>
              <i class="ri-restart-line"></i>
            </template>
          </Btn>
          <Btn type="info">
            Loading
            <template #loading>
              <i class="ri-restart-line"></i>
            </template>
          </Btn>
          <Btn type="warning">
            Loading
            <template #loading>
              <i class="ri-restart-line"></i>
            </template>
          </Btn>
          <Btn type="danger">
            Loading
            <template #loading>
              <i class="ri-restart-line"></i>
            </template>
          </Btn>
        </div>
      </div>
    </el-card>
  </el-col>
</template>

<style scoped lang="scss"></style>
