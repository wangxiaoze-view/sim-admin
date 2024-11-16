<script lang="ts" setup>
  // import SimFooter from '@/lib/components/SimFooter/index.vue'
  // import { useRoutesStore } from '@/stores/moudles/routes'
  // import { useSettingStore } from '@/stores/moudles/setting'
  // import { useTabsStore } from '@/stores/moudles/tabs'
  // import { handlerActiveRoute } from '@/utils/routes'
  // import { storeToRefs } from 'pinia'
  import { watch } from 'vue'
  import { useRoute } from 'vue-router'

  defineOptions({
    name: 'SimMainView',
  })

  import { useVisiteRoutes, useChangeTheme } from '~/src/hooks'
  import { handlerActiveRoute } from '~/src/utils'

  // import { keepaliveMax } from '@/config'
  // const settingStore = useSettingStore()
  // const { getTheme } = storeToRefs(settingStore)
  const route = useRoute()
  // const routeStore = useRoutesStore()

  // const tabsStore = useTabsStore()
  // const { getVisiteRoutes } = storeToRefs(tabsStore)

  // defineOptions({
  //   name: 'SimMainView'
  // })

  // const routerKey = ref('')
  // const keepAliveList = ref<string[]>([])
  // const getKeepAliveRoute = () => {
  //   keepAliveList.value = getVisiteRoutes.value
  //     .filter((i) => !i.meta?.keepLive)
  //     .flatMap((i) => i.name) as string[]
  // }

  // watchEffect(() => {
  //   routerKey.value = handlerActiveRoute(route)
  //   getKeepAliveRoute()
  // })

  const { activeMenu } = useVisiteRoutes()
  const { getTheme } = useChangeTheme()

  watch(
    route,
    () => {
      // 设置当前激活的菜单页面
      activeMenu.value = handlerActiveRoute(route)
    },
    { immediate: true }
  )
</script>
<template>
  <div class="sim-router--view">
    <router-view v-slot="{ Component }">
      <transition mode="out-in" :name="getTheme.isPageTransition ? getTheme.transitionName : ''">
        <keep-alive :include="[]" :max="5">
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
    <!-- <sim-footer /> -->
  </div>
</template>

<style lang="scss" scoped></style>
