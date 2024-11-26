<script lang="ts" setup>
  import { ref } from 'vue'
  import SimErrorDialog from '../SimErrorDialog/index.vue'
  import { useError } from '~/src/hooks'
  import { getTimeFormat } from '~/src/utils'

  defineOptions({
    name: 'SimError',
  })

  const { getErrors } = useError()
  const dialogRef = ref<InstanceType<typeof SimErrorDialog>>()
  const visible = ref<boolean>(false)
  const drawerParams = ref<Record<string, any>>({})
  const setVisible = (isVisible: boolean, params: Record<string, any> = {}) => {
    visible.value = isVisible
    if (params) {
      drawerParams.value = params
    }
  }

  const onClickReplayer = () => {
    dialogRef.value?.setVisible(true)
  }

  defineExpose({
    setVisible,
  })
</script>
<template>
  <teleport to="body">
    <el-drawer v-model="visible" v-bind="drawerParams" class="sim-error">
      <template #default>
        <el-scrollbar>
          <el-table :data="getErrors" border style="width: 100%">
            <el-table-column type="expand">
              <template #default="props">
                <div class="expand-row">
                  <p>行号：{{ props.row.colno }}-{{ props.row.lineno }}</p>
                  <p>时间：{{ getTimeFormat(props.row.time) }}</p>
                  <p><el-button @click="onClickReplayer" type="primary">回放</el-button></p>
                  <!-- <div class="video-player"></div> -->
                </div>
              </template>
            </el-table-column>
            <el-table-column label="错误类型" prop="errorType" width="140px" />
            <el-table-column label="错误消息" prop="errorMessage" show-overflow-tooltip>
              <template #default="scope">
                <span v-html="scope.row.errorMessage || '-'"></span>
              </template>
            </el-table-column>
          </el-table>
        </el-scrollbar>
      </template>
    </el-drawer>

    <SimErrorDialog ref="dialogRef" />
  </teleport>
</template>

<style lang="scss" scoped>
  :deep() {
    .expand-row {
      padding: var(--el-padding-sapce);
    }
  }
</style>
