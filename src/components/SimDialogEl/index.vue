<script setup lang="ts">
import { reactive, toRefs } from 'vue'
defineOptions({
  name: 'SimDialogEl'
})
const state = reactive({
  visible: false,
  dialogParams: {},
  setVisible: (visible: boolean, params: any) => {
    state.visible = visible

    if (params) {
      state.dialogParams = Object.assign(state.dialogParams, params)
    }
  }
})

defineExpose({
  ...toRefs(state)
})
</script>

<template>
  <teleport to="body">
    <el-dialog v-model="state.visible" destroy-on-close v-bind="state.dialogParams">
      <slot />
    </el-dialog>
  </teleport>
</template>

<style scoped lang="scss"></style>
