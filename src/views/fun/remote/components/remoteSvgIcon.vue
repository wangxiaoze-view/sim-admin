<script setup lang="ts">
  import { defineAsyncComponent } from 'vue'
  import { Loading, Error } from '../asyncComponent'

  const SvgIcon = defineAsyncComponent({
    loader: () => import('remote/svgIcon'),
    loadingComponent: () => Loading,
    errorComponent: () => Error,
    delay: 1000,
  })
</script>

<template>
  <el-col :md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
    <el-card shadow="hover">
      <div class="header">svg图标</div>

      <div class="content">
        <el-scrollbar>
          <div class="icons mb-20">
            <SvgIcon type="checkmark" />
            <SvgIcon type="doneAll" />
            <SvgIcon type="locak" />
            <SvgIcon type="naturalMode" />
          </div>
          <div class="icons mb-20">
            <SvgIcon type="checkmark" :isExtendTheme="false" />
            <SvgIcon type="doneAll" :isExtendTheme="false" />
            <SvgIcon type="locak" :isExtendTheme="false" />
            <SvgIcon type="naturalMode" :isExtendTheme="false" />
          </div>
          <div class="icons mb-20">
            <SvgIcon type="checkmark" :isExtendTheme="false" color="#008080" />
            <SvgIcon type="doneAll" :isExtendTheme="false" color="#008080" />
            <SvgIcon type="locak" :isExtendTheme="false" color="#008080" />
            <SvgIcon type="naturalMode" :isExtendTheme="false" color="#008080" />
          </div>
          <div class="icons mb-20">
            <SvgIcon type="checkmark" :isExtendTheme="false" color="#000000" />
            <SvgIcon type="doneAll" :isExtendTheme="false" color="#000000" />
            <SvgIcon type="locak" :isExtendTheme="false" color="#000000" />
            <SvgIcon type="naturalMode" :isExtendTheme="false" color="#000000" />
          </div>
        </el-scrollbar>
      </div>
    </el-card>
  </el-col>
</template>

<style scoped lang="scss">
  :deep() {
    .icons {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      gap: 10px;
    }
    .icon {
      width: 30px;
      height: 30px;
    }
  }
</style>
