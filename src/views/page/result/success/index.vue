<script setup lang="ts">
  defineOptions({
    name: 'PageResultSuccess',
  })
</script>

<template>
  <div class="success-container mb-20">
    <el-result icon="success" title="支付成功" sub-title="请点击下方按钮返回上一页">
      <template #extra>
        <el-button type="primary">Back</el-button>
      </template>
    </el-result>
  </div>
</template>

<style lang="scss" scoped></style>
