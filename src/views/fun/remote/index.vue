<template>
  <div class="remote-container mb-20">
    <el-alert title="后期会继续完善远程组件!" class="mb-20"></el-alert>
    <el-row :gutter="20">
      <remoteBtn />
      <remoteRad />
      <remoteSvg />
    </el-row>
  </div>
</template>

<script setup lang="ts">
  defineOptions({ name: 'RemotePage' })
  import remoteBtn from './components/remoteBtn.vue'
  import remoteRad from './components/remoteRadioCheck.vue'
  import remoteSvg from './components/remoteSvgIcon.vue'
</script>

<style scoped lang="scss">
  :deep(.content) {
    height: 300px;
  }
</style>
