<script setup lang="ts">
  import { useTable } from '../hook/useTable'
  import SimIcon from '~/library/components/SimIcon/index.vue'
  defineOptions({
    name: 'SimDataContainer',
  })

  const { tableData, total, changeTable, loading, loadingText, dynamic } = useTable()
</script>
<template>
  <el-row class="sim-data" :gutter="20">
    <el-col
      class="mb-20"
      :lg="16"
      :md="24"
      :sm="24"
      :xl="16"
      :xs="24"
      v-loading="loading"
      :element-loading-text="loadingText"
    >
      <el-card shadow="hover">
        <div class="header">
          <b>分析概览</b>
        </div>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="id" label="序号" width="80" />
          <el-table-column prop="updateTime" label="更新时间" width="180" />
          <el-table-column prop="name" label="姓名" width="80" />
          <el-table-column prop="address" label="地址" />
          <el-table-column prop="handler" label="操作" width="80">
            <template #default>
              <SimIcon icon-class="ri-code-view" style="margin-right: 10px" />
              <SimIcon icon-class="ri-delete-bin-line" />
            </template>
          </el-table-column>
        </el-table>
        <div class="page-contaienr">
          <el-pagination layout="prev, pager, next" :total="total" @change="changeTable" />
        </div>
      </el-card>
    </el-col>
    <el-col class="mb-20" :lg="8" :md="24" :sm="24" :xl="8" :xs="24" style="display: flex">
      <el-card shadow="hover">
        <div class="header">
          <b>最新动态</b>
        </div>
        <el-scrollbar height="480px">
          <el-timeline width="100%">
            <el-timeline-item
              v-for="(item, index) in dynamic"
              :key="index"
              :color="item.color"
              ::timestamp="item.date"
            >
              <div class="time-line-title">{{ item.date }}</div>
              {{ item.description }}
            </el-timeline-item>
          </el-timeline>
        </el-scrollbar>
      </el-card>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
  $height: 520px;

  .sim-data {
    .font-red {
      color: var(--el-color-danger);
    }
    :deep() {
      .el-card__body {
        .page-contaienr {
          display: flex;
          align-items: center;
          margin-bottom: 0;
          justify-content: center;
          margin-top: var(--el-padding-sapce);
        }

        .time-line-title {
          color: var(--el-text-color-secondary);
          margin-bottom: 4px;
        }

        .el-scrollbar__bar {
          display: none;
        }

        .el-timeline {
          padding-left: 0;
        }
      }
    }
  }
</style>
