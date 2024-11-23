<script setup lang="ts">
  import { ref } from 'vue'
  import elTableVue from './components/elTableVue.vue'
  import vxeTableVue from './components/vxeTableVue.vue'
  import vxeGridTable from './components/vxeGridTable.vue'
  defineOptions({
    name: 'CompTable',
  })

  const activeName = ref('first')
</script>

<template>
  <el-card class="mb-20" shadow="hover">
    <el-tabs v-model="activeName">
      <el-tab-pane label="el-分页表格" name="first">
        <elTableVue />
      </el-tab-pane>
      <el-tab-pane label="vxe-table" name="second">
        <vxeTableVue />
      </el-tab-pane>
      <el-tab-pane label="vxe-grid" name=" third">
        <vxeGridTable />
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>
