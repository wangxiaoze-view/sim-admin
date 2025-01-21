<script setup lang="ts">
  import SimIcon from '~/library/components/SimIcon/index.vue'
  import { translate } from '~/src/i18n'
  import { isExternal } from '~/src/utils'
  import { useRouter } from '~/src/hooks'
  import SimMenuStatus from './simMenuStatus.vue'

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
    <SimMenuStatus :item-or-menu="itemOrMenu" />
  </el-menu-item>
</template>

<style scoped lang="scss"></style>
