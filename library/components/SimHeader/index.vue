<script lang="ts" setup>
  import SimIcon from '~/library/components/SimIcon/index.vue'
  import SimHeaderTools from '../SimHeaderTools/index.vue'
  import SimTabs from '../SimTabs/index.vue'
  import breadcumb from './components/breadcumb.vue'
  import { useChangeTheme } from '~/src/hooks'
  defineOptions({
    name: 'SimHeader',
  })

  const { getTheme, setTheme } = useChangeTheme()

  const zoomMenu = () => {
    setTheme({ collapse: !getTheme.value.collapse })
  }
</script>
<template>
  <div class="sim-header">
    <el-row class="sim-header--container">
      <el-col :span="24">
        <el-header class="sim-header--content">
          <el-row align="middle" class="sim-header--row">
            <el-col :lg="10" :md="10" :sm="9" :xl="14" :xs="8">
              <el-space wrap>
                <SimIcon
                  @click="zoomMenu"
                  v-if="
                    getTheme.layout === 'ordinary' ||
                    (getTheme.device === 'mobile' && getTheme.layout === 'float')
                  "
                  :icon-class="!getTheme.collapse ? 'ri-menu-fold-fill' : 'ri-menu-unfold-fill'"
                />
                <!-- 面包屑 -->
                <breadcumb />
              </el-space>
            </el-col>
            <el-col :lg="14" :md="14" :sm="15" :xl="10" :xs="16">
              <sim-header-tools />
            </el-col>
          </el-row>
        </el-header>
      </el-col>
    </el-row>
    <sim-tabs />
  </div>
</template>

<style scoped lang="scss">
  .sim-header {
    background-color: var(--el-bg-color);
    &--container {
      border-bottom: 1px solid var(--el-border-color-light);
    }
    &--content {
      padding: 0 16px;
      height: var(--el-header-height);
      .sim-header--row {
        height: 100%;
      }
    }
  }
</style>
