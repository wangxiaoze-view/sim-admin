<script lang="ts" setup>
  import SimApp from '~/library/components/SimApp/index.vue'
</script>

<template>
  <el-scrollbar class="sim-scroll--bar" wrap-class="sim-scroll--wrap">
    <SimApp />
    <el-backtop :bottom="100" :right="20" :visibility-height="200"></el-backtop>
  </el-scrollbar>
</template>

<style scoped lang="scss"></style>
