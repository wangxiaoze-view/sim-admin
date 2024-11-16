<script lang="ts" setup>
  import { storeToRefs } from 'pinia'
  import SimHeaderTools from '../SimHeaderTools/index.vue'
  import SimLogo from '../SimLogo/index.vue'
  import SimMenu from '../SimMenu/index.vue'
  import SimTabs from '../SimTabs/index.vue'
  import { useChangeTheme } from '~/src/hooks'
  import { useRoutesStore } from '~/src/stores/modules/routes'

  defineOptions({
    name: 'SimRowHeader',
  })
  const { getMenuRoutes } = useRoutesStore()
  const { getActiveMenu } = storeToRefs(useRoutesStore())

  const { getTheme } = useChangeTheme()
</script>

<template>
  <div class="sim-header">
    <el-row class="sim-header--container">
      <el-col :span="24">
        <el-header class="sim-header--content">
          <el-row align="middle" class="sim-header--row">
            <el-col :lg="4" :md="5" :sm="3" :xl="4" :xs="4">
              <SimLogo :is-collapse="getTheme.device === 'desktop'" />
            </el-col>
            <el-col :lg="12" :md="12" :sm="13" :xl="12" :xs="12">
              <el-menu
                class="sim-menu"
                :collapse-transition="false"
                :default-active="getActiveMenu"
                mode="horizontal"
              >
                <SimMenu
                  v-for="(item, index) in getMenuRoutes"
                  :key="index + item.name"
                  :item="item"
                />
              </el-menu>
            </el-col>

            <el-col :lg="8" :md="7" :sm="8" :xl="8" :xs="8">
              <SimHeaderTools />
            </el-col>
          </el-row>
        </el-header>
      </el-col>
    </el-row>

    <el-row>
      <el-col :offset="0" :span="24"><sim-tabs /></el-col>
    </el-row>
  </div>
</template>
