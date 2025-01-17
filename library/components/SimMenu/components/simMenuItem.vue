<script setup lang="ts">
  import SimIcon from '~/library/components/SimIcon/index.vue'
  import { translate } from '~/src/i18n'
  import { isExternal } from '~/src/utils'
  import { useRouter } from '~/src/hooks'
  import SimSvg from '~/library/components/SimSvg/index.vue'

  defineOptions({
    name: 'SimMenuItem',
  })
  const { itemOrMenu } = defineProps<{
    itemOrMenu: ISimRouterRecordRaw
  }>()

  const { router } = useRouter()

  const onHandlerRouter = () => {
    const {
      path,
      meta: { target, iframePath },
    } = itemOrMenu

    if (target === '_blank') {
      if (isExternal(path)) {
        window.open(path, '_blank')
      }
      router.push('/redirect')
    } else {
      router.push(path)
    }
  }
</script>

<template>
  <el-menu-item :index="itemOrMenu.path" @click="onHandlerRouter">
    <div class="sim-menu-item-container">
      <SimIcon
        v-if="itemOrMenu.meta && itemOrMenu.meta.icon"
        :icon-class="itemOrMenu.meta.icon"
        :size="16"
        class="menu-icon"
      />
      <template v-if="itemOrMenu.meta">
        <span class="menu-title">
          {{ translate(itemOrMenu.meta.title) }}
        </span>
      </template>
    </div>
    <template v-if="itemOrMenu.meta">
      <el-tag v-if="itemOrMenu.meta.badge" effect="dark" type="danger">
        {{ itemOrMenu.meta.badge }}
      </el-tag>
      <span v-if="itemOrMenu.meta.dot" class="sim-dot sim-dot-error"><span></span></span>
      <SimSvg v-if="itemOrMenu.meta.statusIcon" :type="itemOrMenu.meta.statusIcon" />
      <component v-if="itemOrMenu.meta.custom" :is="itemOrMenu.meta.custom()" />
    </template>
  </el-menu-item>
</template>

<style scoped lang="scss"></style>
