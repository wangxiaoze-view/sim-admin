<script setup lang="ts">
  import { useIcon } from '~/src/hooks'

  defineOptions({
    name: 'IconPage',
  })
  const { colors, getTheme, icons, formModel, currentPage, pageSize, onChangePage, onInitIcons } =
    useIcon()
</script>
<template>
  <div class="icon-container mb-20">
    <el-alert type="warning" class="mb-20">
      <template #title>
        系统中所有的图标使用开源图标
        <a href="https://remixicon.com/" target="_blank">
          <code>RemixIcon</code>
          官网
        </a>
        ，支持不同平台的使用~
      </template>
    </el-alert>

    <el-form :model="formModel" inline>
      <el-form-item prop="" label="">
        <el-checkbox v-model="formModel.isColor" label="多色图标" border />
      </el-form-item>
      <el-form-item prop="" label="图标大小(px单位)">
        <el-slider v-model="formModel.fontSize" :min="16" :max="30" />
      </el-form-item>
    </el-form>

    <el-row :gutter="14">
      <el-col
        :lg="2"
        :xs="12"
        :sm="4"
        :md="4"
        :offset="0"
        class="mb-20"
        v-for="(item, index) in icons"
        :key="item.name"
      >
        <div class="card" :class="[getTheme.mode]">
          <component
            :is="item"
            :color="
              formModel.isColor
                ? colors[index]
                : getTheme.mode === 'dark'
                  ? '#dfdfdf'
                  : 'var(--el-text-color-regular)'
            "
            :size="formModel.fontSize + 'px'"
            :style="{ width: formModel.fontSize + 'px', height: formModel.fontSize + 'px' }"
          ></component>
        </div>
      </el-col>
    </el-row>
    <div class="text-right">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 50, 100, 200]"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="onInitIcons().length"
        @change="onChangePage"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .icon-container {
    a {
      color: var(--el-color-primary);
    }
    .card {
      border: 1px solid var(--el-border-color);
      display: flex;
      align-items: center;
      justify-content: center;
      height: 60px;
      cursor: pointer;
      svg {
        transition: all 0.5s ease-in-out;
      }
    }

    .text-right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    :deep() {
      .el-slider {
        width: 200px;
      }
    }
  }
</style>
