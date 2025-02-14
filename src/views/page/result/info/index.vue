<script setup lang="ts">
  defineOptions({
    name: 'PageResultInfo',
  })
</script>

<template>
  <div class="success-container mb-20">
    <el-result icon="info" title="温馨提示" sub-title="购物车已有该商品">
      <template #extra>
        <el-button type="info">朕知道了</el-button>
      </template>
    </el-result>
  </div>
</template>

<style lang="scss" scoped></style>
