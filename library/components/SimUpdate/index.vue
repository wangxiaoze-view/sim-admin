<script setup lang="ts">
  import { useCheckUpdate } from '~/src/hooks'
  import pkg from '~/package.json'
  defineOptions({
    name: 'SimUpdate',
  })

  const { version } = pkg
  const { isUpdate, updater, waitUpdater, loading } = useCheckUpdate()

  updater()
</script>

<template>
  <el-dialog
    class="sim-update"
    v-model="isUpdate"
    append-to-body
    :show-close="false"
    :show-fullscreen="false"
    width="410px"
  >
    <template #header></template>

    <h3>版本更新：新版本来袭!</h3>
    <p>当前版本: {{ version }}</p>
    <p>
      更新内容:
      <a target="_blank" href="https://github.com/wangxiaoze-view/sim-admin/blob/main/COMMIT.md">
        在github查看
      </a>
    </p>

    <template #footer>
      <div class="dialog-footer">
        <el-button :loading="loading" @click="waitUpdater">不更新</el-button>
        <el-button type="primary" @click="updater" :loading="loading">立即更新</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style lang="scss"></style>
