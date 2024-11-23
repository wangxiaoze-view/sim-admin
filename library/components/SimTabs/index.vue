<script lang="ts" setup>
  import useTabs from './useTabs'
  import { translate } from '~/src/i18n'
  import SimIcon from '~/library/components/SimIcon/index.vue'
  defineOptions({
    name: 'SimTabs',
  })
  const {
    left,
    top,
    isContextMenu,
    commands,
    getTheme,
    getVisitedRoutes,
    curtrentTab,
    onTabClick,
    onTabRemove,
    onShowTabMenu,
    onCommand,
  } = useTabs()
</script>

<template>
  <div
    class="sim-tabs"
    :class="{
      'sim-tabs-default': getTheme.tabStyle === 'default',
      'sim-tabs-rectangle': getTheme.tabStyle === 'rectangle',
      'sim-tabs-card': getTheme.tabStyle === 'card',
      'sim-tabs-line': getTheme.tabStyle === 'line',
      'sim-tabs-smart': getTheme.tabStyle === 'smart',
    }"
    v-if="getTheme.isTabs"
  >
    <el-tabs
      v-model="curtrentTab"
      type="card"
      :class="[`sim-tabs--${getTheme.tabStyle}`]"
      @tab-click="onTabClick"
      @tab-remove="onTabRemove"
    >
      <el-tab-pane
        v-for="item in getVisitedRoutes"
        :key="item.path"
        :closable="!item.meta?.notClose"
        :name="item.path"
      >
        <template #label>
          <div @contextmenu.prevent="onShowTabMenu(item.path)">
            <SimIcon
              v-if="getTheme.isTabsIcon && item.meta && item.meta.icon"
              :icon-class="item.meta.icon"
            />
            <span v-if="item.meta && item.meta.title">
              {{ translate(item.meta?.title as string) }}
            </span>
          </div>
        </template>
      </el-tab-pane>
    </el-tabs>

    <el-dropdown @command="onCommand">
      <SimIcon icon-class="ri-equalizer-line" />

      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item v-for="(item, index) in commands" :command="item.command" :key="index">
            <SimIcon :icon-class="item.classNames" />
            {{ item.label }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <ul class="tab-menu" v-if="isContextMenu" :style="{ left: `${left}px`, top: `${top}px` }">
      <li
        v-for="(item, index) in commands"
        :key="index"
        :command="item.command"
        @click="onCommand(item.command)"
      >
        <SimIcon :icon-class="item.classNames" />
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>
