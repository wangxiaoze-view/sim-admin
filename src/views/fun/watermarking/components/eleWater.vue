<script setup lang="ts">
  import { reactive } from 'vue'

  defineOptions({
    name: 'FunWatermarking',
  })

  const config = reactive({
    content: 'sim-admin',
    font: {
      fontSize: 16,
      color: 'rgba(0, 0, 0, 0.15)',
    },
    zIndex: -1,
    rotate: -22,
    gap: [100, 100] as [number, number],
    offset: [] as unknown as [number, number],
  })
</script>

<template>
  <div>
    <el-form class="form" :model="config" label-width="100px" label-position="left">
      <el-form-item label="内容">
        <el-input v-model="config.content" />
      </el-form-item>
      <el-form-item label="颜色">
        <el-color-picker v-model="config.font.color" show-alpha />
      </el-form-item>
      <el-form-item label="字体大小">
        <el-slider v-model="config.font.fontSize" />
      </el-form-item>
      <el-form-item label="层级">
        <el-slider v-model="config.zIndex" />
      </el-form-item>
      <el-form-item label="旋转">
        <el-slider v-model="config.rotate" :min="-180" :max="180" />
      </el-form-item>
      <el-form-item label="间隔">
        <el-space>
          <el-input-number v-model="config.gap[0]" controls-position="right" />
          <el-input-number v-model="config.gap[1]" controls-position="right" />
        </el-space>
      </el-form-item>
      <el-form-item label="间距">
        <el-space>
          <el-input-number
            v-model="config.offset[0]"
            placeholder="offsetLeft"
            controls-position="right"
          />
          <el-input-number
            v-model="config.offset[1]"
            placeholder="offsetTop"
            controls-position="right"
          />
        </el-space>
      </el-form-item>
    </el-form>

    <el-watermark
      class="watermark"
      :content="config.content"
      :font="config.font"
      :z-index="config.zIndex"
      :rotate="config.rotate"
      :gap="config.gap"
      :offset="config.offset"
    >
      <div class="mark"></div>
    </el-watermark>
  </div>
</template>

<style lang="scss" scoped>
  .mark {
    height: 300px;
    background-color: var(--el-bg-color);
    border-top: 2px dashed var(--el-border-color);
  }
</style>
