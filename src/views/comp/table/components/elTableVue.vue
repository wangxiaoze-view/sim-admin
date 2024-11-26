<script lang="ts" setup>
  import { ref } from 'vue'
  import { getTotalDataApi } from '~/src/api/other'
  import { useLoading } from '~/src/hooks'
  import { settings_config } from '~/src/config'
  import { ITotalDataType } from '~/src/api/types'

  const { loadingText: text } = settings_config
  const tableData = ref<ITotalDataType[]>()

  const pageNo = ref(1)
  const pageSize = ref(15)
  const total = ref(0)

  const { loading, setLoading, loadingText } = useLoading(false, text)

  const getData = async () => {
    setLoading(true)
    const { context } = await getTotalDataApi(pageNo.value, pageSize.value)
    setLoading(false)
    tableData.value = context.list
    total.value = context.total
  }

  const onChange = (_currentPage: number, _pageSize: number) => {
    pageNo.value = _currentPage
    pageSize.value = _pageSize
    getData()
  }

  getData()
</script>

<template>
  <div class="table" v-loading="loading" :element-loading-text="loadingText">
    <el-table :data="tableData">
      <el-table-column type="selection" width="55" />
      <el-table-column property="id" label="ID" />
      <el-table-column property="name" label="姓名" />
      <el-table-column property="email" label="邮箱" />
      <el-table-column property="updateTime" label="时间" />
      <el-table-column property="address" label="地址" width="240" show-overflow-tooltip />
    </el-table>

    <div class="page-handler">
      <el-pagination background layout="prev, pager, next" :total="total" @change="onChange" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .table {
    .page-handler {
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
