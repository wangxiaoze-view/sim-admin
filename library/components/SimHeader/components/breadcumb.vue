<script lang="ts" setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { translate } from '~/src/i18n'
  import { useChangeTheme } from '~/src/hooks'
  import SimIcon from '~/library/components/SimIcon/index.vue'

  defineOptions({
    name: 'BreadcumbPage',
  })
  const route = useRoute()

  const { getTheme } = useChangeTheme()

  const getBreadcrumb = computed(() => {
    return (route.matched || []) as Partial<ISimRouterRecordRaw>[]
  })
</script>

<template>
  <el-breadcrumb v-if="getTheme.isBreadcrumb" class="hidden-xs-only" separator="/">
    <el-breadcrumb-item v-for="item in getBreadcrumb" :key="item.path">
      <SimIcon v-if="item.meta && item.meta.icon" :icon-class="item.meta.icon" :size="16" />
      <span v-if="item.meta && item.meta.title">
        {{ translate(item.meta.title) }}
      </span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style lang="scss" scoped></style>
