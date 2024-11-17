<script setup lang="ts">
  defineOptions({
    name: 'HomeIndex',
  })

  const click = () => {
    // console.log(a)
    console.error(1)
  }
</script>
<template>
  <div>
    home

    <el-button @click="click">测试</el-button>
  </div>
</template>

<style scoped></style>
