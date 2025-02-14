<script setup lang="ts">
  defineOptions({
    name: 'PageResultWarning',
  })
</script>

<template>
  <div class="success-container mb-20">
    <el-result icon="warning" title="购物车商品已失效" sub-title="请点击下方按钮重新加入购物车">
      <template #extra>
        <el-button type="warning">Add</el-button>
      </template>
    </el-result>
  </div>
</template>

<style lang="scss" scoped></style>
