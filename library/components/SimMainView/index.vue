<script lang="ts" setup>
  import useMainView from './useMainView'
  import SimFooter from '../SImFooter/index.vue'
  defineOptions({
    name: 'SimMainView',
  })

  const { getTheme, routerKey, keepaliveMax, keepaliveNames } = useMainView()
</script>
<template>
  <div class="sim-router--container">
    <router-view v-slot="{ Component }">
      <transition mode="out-in" :name="getTheme.isPageTransition ? getTheme.transitionName : ''">
        <keep-alive :include="keepaliveNames" :max="keepaliveMax">
          <component :is="Component" :key="routerKey" />
        </keep-alive>
      </transition>
    </router-view>
    <!-- <sim-footer /> -->
    <SimFooter />
  </div>
</template>

<style lang="scss" scoped></style>
