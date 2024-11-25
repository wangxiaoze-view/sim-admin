<script setup lang="ts">
  import { ref } from 'vue'
  import { VueDraggable } from 'vue-draggable-plus'

  const tablieList = ref(
    Array.from({ length: 10 }, (_, index) => ({
      id: index + 1,
      name: `Abby${index + 1}`,
      sport: 'basket',
    }))
  )
</script>

<template>
  <table class="table table-striped">
    <thead class="thead-dark">
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Name</th>
        <th scope="col">Sport</th>
      </tr>
    </thead>
    <VueDraggable v-model="tablieList" tag="tbody">
      <tr v-for="item in tablieList" :key="item.name" style="cursor: move">
        <td scope="row">
          <i class="ri-drag-move-line"></i>
          {{ item.id }}
        </td>
        <td>{{ item.name }}</td>
        <td>{{ item.sport }}</td>
      </tr>
    </VueDraggable>
  </table>
</template>

<style scoped lang="scss">
  .table {
    width: 100%;
    th,
    tr,
    td {
      padding: 4px 8px;
      border: 1px solid var(--el-border-color);
      text-align: center;
    }
  }
</style>
