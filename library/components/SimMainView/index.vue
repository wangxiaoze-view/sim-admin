<script lang="ts" setup>
  import useMainView from './useMainView'
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
  </div>
</template>

<style lang="scss" scoped></style>
