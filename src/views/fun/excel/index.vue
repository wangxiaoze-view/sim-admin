<script setup lang="ts">
  import { ref } from 'vue'
  defineOptions({
    name: 'FunExcel',
  })

  interface ITable {
    id: number
    user: string
    name: string
    phone: string
    gender: string
    age: number
    birth: string
  }

  const jsonData = ref<ITable[]>(
    Array.from({ length: 100 }, (_, index) => ({
      id: index + 1,
      user: 'hc' + index,
      name: 'Harry Cole',
      phone: '1-415-2345678',
      gender: 'M',
      age: 25,
      birth: '1997-07-01',
    }))
  )

  const gridRef = ref()
  const currentRowPos = ref(-1)
  const currentColPos = ref(-1)
  const onCellFocus = (event: any) => {
    currentRowPos.value = event.rowPos
    currentColPos.value = event.colPos
  }

  const onRemoveRow = () => {
    jsonData.value.splice(currentRowPos.value, 1)
    gridRef.value.deleteRecord(currentRowPos.value)
    gridRef.value.$forceUpdate()
  }
</script>
<template>
  <el-card class="mb-20" shadow="hover">
    <div class="header">
      <span>Excel Editor</span>
      <div>
        <el-button type="danger" @click="onRemoveRow">删除行</el-button>
      </div>
    </div>
    <el-alert title="选中一行然后进行删除 " type="warning" class="mb-20"></el-alert>

    <vue-excel-editor ref="gridRef" v-model="jsonData" @cell-focus="onCellFocus">
      <vue-excel-column field="user" label="User ID" type="string" />
      <vue-excel-column field="name" label="Name" type="string" />
      <vue-excel-column field="phone" label="Contact" type="string" />
      <vue-excel-column field="gender" label="Gender" type="select" :options="['F', 'M', 'U']" />
      <vue-excel-column field="age" label="Age" type="number" />
      <vue-excel-column field="birth" label="Date Of Birth" type="date" />
    </vue-excel-editor>

    <div>
      <p>logging jsondata</p>
      <ul>
        <li v-for="(item, index) in jsonData" :key="index">{{ item.id }} - {{ item.user }}</li>
      </ul>
    </div>
  </el-card>
</template>

<style lang="scss" scoped>
  :deep() {
    table {
      width: 100% !important;

      .systable .first-col {
        background-color: red !important;
      }
    }
  }
</style>
