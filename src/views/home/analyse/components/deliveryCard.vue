<script setup lang="ts">
  import { ref } from 'vue'
  import dayjs from 'dayjs'

  interface ITable {
    date: string
    name: string
    phone: string
    email: string
    code: string
    address: string
  }
  const tableData = ref<ITable[]>([])

  for (let i = 0; i < 8; i++) {
    tableData.value.push({
      date: dayjs().format('YYYY-MM-DD'),
      name: '王小虎',
      phone: '13456122331',
      email: '123@qq.com',
      code: '1234',
      address: '上海市青浦区徐泾镇',
    })
  }
</script>

<template>
  <el-card shadow="hover" class="mb-20">
    <div class="header">
      <span>配送列表</span>
    </div>
    <el-table :data="tableData" border>
      <el-table-column prop="date" label="日期" />
      <el-table-column prop="name" label="名字" />
      <el-table-column prop="phone" label="手机" />
      <el-table-column prop="email" label="邮箱" />
      <el-table-column prop="code" label="邮编" />
      <el-table-column prop="address" label="地址" />
    </el-table>
  </el-card>
</template>
