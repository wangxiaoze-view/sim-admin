<script lang="ts" setup>
  import SimApp from '~/library/components/SimApp/index.vue'
  import SimUpdate from '~/library/components/SimUpdate/index.vue'
  import { useChangeTheme } from '~/src/hooks'
  const { getTheme } = useChangeTheme()
</script>

<template>
  <el-scrollbar class="sim-scroll--bar" wrap-class="sim-scroll--wrap">
    <SimApp />
    <el-backtop
      :bottom="100"
      :right="20"
      :visibility-height="200"
      target=".sim-scroll--wrap"
    ></el-backtop>

    <SimUpdate v-if="getTheme.isUpdate" />
  </el-scrollbar>
</template>
