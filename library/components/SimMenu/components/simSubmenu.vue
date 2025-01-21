<script setup lang="ts">
  import SimIcon from '~/library/components/SimIcon/index.vue'
  import { translate } from '~/src/i18n'
  import { useChangeTheme } from '~/src/hooks'
  import SimMenuStatus from './simMenuStatus.vue'

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
      <div class="sim--sub-menu-container">
        <SimIcon
          class="menu-icon"
          v-if="itemOrMenu.meta && itemOrMenu.meta.icon"
          :icon-class="itemOrMenu.meta.icon"
        />
        <span v-show="getTheme.device === 'mobile' ? true : !getTheme.collapse" class="menu-title">
          {{ translate(itemOrMenu.meta.title) }}
        </span>
      </div>

      <SimMenuStatus :item-or-menu="itemOrMenu" v-if="getTheme.layout !== 'float'" />
    </template>
    <slot></slot>
  </el-sub-menu>
</template>

<style scoped lang="scss"></style>
