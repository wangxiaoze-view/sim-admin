<script setup lang="ts">
  import { ref } from 'vue'
  import { VueDraggable } from 'vue-draggable-plus'
  import { ENUM_COLOR } from '~/src/enum'

  const colors = ref(Object.values(ENUM_COLOR))
</script>

<template>
  <VueDraggable v-model="colors" class="grid">
    <div class="grid-item" v-for="item in colors" :key="item" :style="{ background: item }">
      {{ item }}
    </div>
  </VueDraggable>
</template>

<style scoped lang="scss">
  .grid {
    display: grid;
    gap: 14px;
    grid-template-columns: repeat(2, 1fr);

    .grid-item {
      height: 46px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: move;
      border-radius: 4px;
    }
  }
</style>
