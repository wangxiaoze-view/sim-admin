<script setup lang="ts">
  import SimSvg from '~/library/components/SimSvg/index.vue'
  defineOptions({
    name: 'SimMenuStatus',
  })
  const { itemOrMenu } = defineProps<{
    itemOrMenu: ISimRouterRecordRaw
  }>()
</script>

<template>
  <template v-if="itemOrMenu.meta">
    <el-tag v-if="itemOrMenu.meta.badge" effect="dark" type="danger">
      {{ itemOrMenu.meta.badge }}
    </el-tag>
    <span v-if="itemOrMenu.meta.dot" class="sim-dot sim-dot-error"><span></span></span>
    <SimSvg v-if="itemOrMenu.meta.statusIcon" :type="itemOrMenu.meta.statusIcon" />
    <component v-if="itemOrMenu.meta.custom" :is="itemOrMenu.meta.custom()" />
  </template>
</template>

<style scoped></style>
