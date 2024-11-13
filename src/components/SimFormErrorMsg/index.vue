<script setup lang="ts">
import SimIcon from '../SimIcon/index.vue'
defineOptions({
  name: 'SimFormErrorMsg'
})

withDefaults(
  defineProps<{
    title: string
    isAbsolute: boolean
  }>(),
  {
    title: '🙅错误信息',
    isAbsolute: true
  }
)
</script>

<template>
  <div class="error-container" :class="[isAbsolute ? 'position-absolute' : '']">
    <sim-icon icon-class="ri-alert-fill" color="#ff6463" :size="14" />
    <span class="error-container--title">{{ title }}</span>
  </div>
</template>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.8s ease;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
.error-container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  color: #ff6463;
  font-weight: 500;
  line-height: 18px;
  font-size: 12px;

  &.position-absolute {
    position: absolute;
    top: 100%;
  }

  &--title {
    padding-left: 4px;
  }
}
</style>
