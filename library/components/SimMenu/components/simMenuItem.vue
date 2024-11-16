<script setup lang="ts">
  import SimIcon from '~/library/components/SimIcon/index.vue'
  import { translate } from '~/src/i18n'
  import { isExternal } from '~/src/utils'
  import { useChangeTheme } from '~/src/hooks'

  import { useRouter } from 'vue-router'

  defineOptions({
    name: 'SimMenuItem',
  })
  const { itemOrMenu } = defineProps<{
    itemOrMenu: ISimRouterRecordRaw
  }>()

  const router = useRouter()

  const { getTheme } = useChangeTheme()

  const onHandlerRouter = () => {
    // TODO:
    const {
      path,
      meta: { target },
    } = itemOrMenu
    console.log(itemOrMenu)
    if (target === '_blank') {
      if (isExternal(path)) {
        window.open(path)
      }
    } else {
      router.push(path)
    }
  }
</script>

<template>
  <el-menu-item :index="itemOrMenu.path" @click="onHandlerRouter">
    <SimIcon
      v-if="itemOrMenu.meta && itemOrMenu.meta.icon"
      :icon-class="itemOrMenu.meta.icon"
      :size="16"
    />
    <template v-if="itemOrMenu.meta">
      <!-- v-show="getTheme.device === 'mobile' ? true : !getTheme.collapse" -->
      <span>
        {{ translate(itemOrMenu.meta.title) }}
      </span>
    </template>
  </el-menu-item>
</template>

<style scoped lang="scss"></style>
