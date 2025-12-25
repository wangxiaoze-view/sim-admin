<script lang="ts" setup>
  import { ref } from 'vue'
  import { useReport } from '~/src/hooks'
  import { translate } from '~/src/i18n'

  defineOptions({
    name: 'SimErrorDialog',
  })

  const { initRePlayer } = useReport()

  const visible = ref(false)
  const setVisible = (show: boolean) => {
    visible.value = show
    if (show) {
      setTimeout(() => {
        initRePlayer()
      }, 10)
    }
  }

  defineExpose({
    setVisible,
  })
</script>

<template>
  <el-dialog v-model="visible" width="630px" :title="translate('错误日志')">
    <div class="container">
      <div id="video-player" v-if="visible"></div>
    </div>
  </el-dialog>
</template>
<style lang="scss" scoped>
  .container {
    height: 500px;
  }
</style>
