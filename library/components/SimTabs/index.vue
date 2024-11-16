<script lang="ts" setup>
  import { watch, ref, watchEffect } from 'vue'
  import { useRoute } from 'vue-router'
  import { translate } from '~/src/i18n'
  import type { TabPaneName } from 'element-plus'
  import { useMouse, useChangeTheme, useVisiteRoutes } from '~/src/hooks'
  import SimIcon from '~/library/components/SimIcon/index.vue'

  defineOptions({
    name: 'SimTabs',
  })

  const route = useRoute()

  const tabMenu = ref(false)
  const hoverTabActive = ref('')
  const left = ref(0)
  const top = ref(0)

  // 使用hooks获取鼠标位置
  const { x, y } = useMouse()

  const { getTheme } = useChangeTheme()

  const { curtrentTab, getVisitedRoutes, initNoCloseRoutes, addVisitedRoutes } = useVisiteRoutes()

  // 这里需要固定一个用于展示欢迎页
  const handlerNotClosePage = (routes: any[]) => {
    routes.forEach((item) => {
      if (item.meta?.notClose) handlerAddTab(item)
      if (item.children && item.children.length) handlerNotClosePage(item.children)
    })
  }

  const aaa = ref<any>([])
  // 添加标签页
  const handlerAddTab = (route: any) => {}

  // 跳转tab的最后一个
  const toLastTabRoute = () => {}

  // 点击标签页
  const onTabClick = (tab: any) => {}

  // 删除标签页
  const onTabRemove = (name: TabPaneName) => {}

  const onHandlerTabRoutes = (command: string, path: string = '') => {
    switch (command) {
      case 'close-left':
        break
      case 'close-right':
        break
      case 'close-others':
        break
      case 'close-all':
        break
    }
  }
  // 下拉菜单操作
  const onCommand = (command: string) => {
    onHandlerTabRoutes(command)
  }

  // tab右鍵显示tab的菜单
  const onShowTabMenu = (path: string) => {
    hoverTabActive.value = path
    tabMenu.value = true
    left.value = x.value
    top.value = y.value
  }

  // 关闭右键的菜单
  const onCloseTabMenu = () => {
    hoverTabActive.value = ''
    tabMenu.value = false
  }

  // 点击tab菜单
  const onClickTabMenu = (command: string) => {
    onHandlerTabRoutes(command, hoverTabActive.value)
  }

  // 初始化欢迎页
  // handlerNotClosePage(_routes.value)

  watch(
    () => route.fullPath,
    () => {
      // 需要将不关闭的显示在最前方
      initNoCloseRoutes()
      addVisitedRoutes(route)
    },
    {
      immediate: true,
    }
  )

  watchEffect(() => {
    if (hoverTabActive.value) {
      document.body.addEventListener('click', onCloseTabMenu)
    } else {
      document.body.removeEventListener('click', onCloseTabMenu)
    }
  })
</script>

<template>
  <div class="sim-tabs--container" v-if="getTheme.isTabs">
    <div class="sim-tabs">
      <el-tabs
        v-model="curtrentTab"
        :class="[`sim-tabs--${getTheme.tabStyle}`]"
        type="card"
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
    </div>

    <el-dropdown @command="onCommand">
      <sim-icon class="cursor-icon" icon-class="ri-equalizer-line sim-icon" color="#000" />

      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="close-left">
            <i class="ri-arrow-left-line sim-icon"></i>
            关闭左侧
          </el-dropdown-item>
          <el-dropdown-item command="close-right">
            <i class="ri-arrow-right-line sim-icon"></i>
            关闭右侧
          </el-dropdown-item>
          <el-dropdown-item command="close-others">
            <i class="ri-rest-time-line sim-icon"></i>
            关闭其他
          </el-dropdown-item>
          <el-dropdown-item command="close-all">
            <i class="ri-close-line sim-icon"></i>
            关闭全部
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <ul class="tab-menu" v-if="tabMenu" :style="{ left: left + 'px', top: top + 'px' }">
      <li @click="onClickTabMenu('close-left')">
        <i class="ri-arrow-left-line sim-icon"></i>
        关闭左侧
      </li>
      <li @click="onClickTabMenu('close-right')">
        <i class="ri-arrow-right-line sim-icon"></i>
        关闭右侧
      </li>
      <li @click="onClickTabMenu('close-others')">
        <i class="ri-rest-time-line sim-icon"></i>
        关闭其他
      </li>
      <li @click="onClickTabMenu('close-all')">
        <i class="ri-close-line sim-icon"></i>
        关闭全部
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
  .sim-tabs--container {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    padding: 0 14px;
    height: var(--el-tab-height);

    :deep(.sim-tabs) {
      width: calc(100% - 35px);
      .el-tabs__header {
        margin-bottom: 0;
        border: none;

        .el-tabs__nav {
          border: none;

          .el-tabs__item {
            border: none;

            &:hover,
            &.is-active {
              background-color: var(--el-color-primary-light-9);
            }
          }
        }
      }
    }

    .sim-tabs--icon {
      margin-right: 4px;
    }

    .el-sim--icon {
      vertical-align: middle;
      margin-right: 4px;
    }

    .tab-menu {
      position: fixed;
      z-index: 500;
      list-style: none;
      padding: 0;
      border-radius: 6px;
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.05);
      li {
        padding: 10px 20px;
        font-size: 14px;
        &:hover {
          cursor: pointer;
          background: var(--el-color-primary-light-9);
        }
      }
    }
  }
</style>
