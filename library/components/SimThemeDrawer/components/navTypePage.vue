<script lang="ts" setup>
  import { translate } from '~/src/i18n'
  import { useChangeTheme } from '~/src/hooks'

  defineProps<{
    layout: string
  }>()

  const { setTheme } = useChangeTheme()

  const changeTemeLayout = (latoutName: TThemeType) => {
    setTheme({ layout: latoutName, collapse: latoutName === 'float' })
  }
</script>
<template>
  <div class="sim-theme-nav">
    <el-tooltip
      class="box-item"
      effect="dark"
      :content="translate('常规导航')"
      placement="top-start"
    >
      <div
        class="ordinary layout-item"
        :class="[layout === 'ordinary' ? 'active' : '']"
        @click="changeTemeLayout('ordinary')"
      ></div>
    </el-tooltip>

    <el-tooltip
      class="box-item"
      effect="dark"
      :content="translate('横向导航')"
      placement="top-start"
    >
      <div
        class="row layout-item"
        :class="[layout === 'row' ? 'active' : '']"
        @click="changeTemeLayout('row')"
      ></div>
    </el-tooltip>

    <el-tooltip
      class="box-item"
      effect="dark"
      :content="translate('浮动导航')"
      placement="top-start"
    >
      <div
        class="floatLayout layout-item"
        :class="[layout === 'float' ? 'active' : '']"
        @click="changeTemeLayout('float')"
      ></div>
    </el-tooltip>
  </div>
</template>
<style lang="scss" scoped>
  .sim-theme-nav {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .layout-item {
    position: relative;
    width: 56px;
    height: 48px;
    margin-right: 16px;
    overflow: hidden;
    border-radius: 4px;
    background-color: #f0f2f5;
    box-shadow: 0 1px 2.5px #0000002e;
    cursor: pointer;

    &::before,
    &::after {
      content: '';
      position: absolute;
    }

    &.active {
      border: 2px solid var(--el-color-primary);
    }
  }

  .ordinary {
    &::before {
      z-index: 1;
      top: 0;
      left: 0;
      width: 33%;
      height: 100%;
      border-radius: 4px 0 0 4px;
      background-color: var(--el-color-primary);
    }

    &::after {
      top: 0;
      left: 0;
      width: 100%;
      height: 25%;
      background-color: var(--el-bg-color);
    }
  }

  .row {
    &::after {
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 25%;
      background-color: var(--el-color-primary);
    }
  }

  .floatLayout {
    &::before {
      z-index: 1;
      top: 0;
      left: 0;
      width: 33%;
      height: 100%;
      border-radius: 4px 0 0 4px;
      background-color: var(--el-color-primary);
    }

    &::after {
      top: 0;
      left: 0;
      width: 100%;
      height: 25%;
      background-color: var(--el-bg-color);
    }
  }
</style>
