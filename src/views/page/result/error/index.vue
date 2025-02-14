<script setup lang="ts">
  defineOptions({
    name: 'PageResultError',
  })
</script>

<template>
  <div class="success-container mb-20">
    <el-result icon="error" title="支付失败" sub-title="请点击下方重新支付">
      <template #extra>
        <el-button type="danger">Pay</el-button>
      </template>
    </el-result>
  </div>
</template>

<style lang="scss" scoped></style>
