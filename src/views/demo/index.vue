<template>
  <div>
    <Btn />
  </div>
</template>

<script setup lang="ts">
  import { defineAsyncComponent } from 'vue'

  const Btn = defineAsyncComponent(() => import('remote/button'))
</script>

<style scoped></style>
