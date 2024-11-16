<script setup lang="ts">
  import SimIcon from '~/library/components/SimIcon/index.vue'
  import { translate } from '~/src/i18n'
  import { useChangeTheme } from '~/src/hooks'

  defineOptions({
    name: 'SimSubmenu',
  })

  const { itemOrMenu } = defineProps<{
    itemOrMenu: ISimRouterRecordRaw
  }>()

  const { getTheme } = useChangeTheme()
</script>

<template>
  <el-sub-menu :index="itemOrMenu.path">
    <template #title>
      <SimIcon v-if="itemOrMenu.meta && itemOrMenu.meta.icon" :icon-class="itemOrMenu.meta.icon" />
      <span v-show="getTheme.device === 'mobile' ? true : !getTheme.collapse">
        {{ translate(itemOrMenu.meta.title) }}
      </span>
    </template>
    <slot></slot>
  </el-sub-menu>
</template>

<style scoped lang="scss"></style>
