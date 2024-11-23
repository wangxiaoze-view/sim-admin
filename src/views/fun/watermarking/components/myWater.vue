<script setup lang="ts">
  import { nextTick, onMounted, reactive, watch } from 'vue'
  import { IWaterRemark, useWatermaking } from '~/src/hooks'

  const fontWeigh = [
    'normal',
    'bold',
    'bolder',
    'lighter',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
  ]

  const state: { watermark: IWaterRemark } = reactive({
    watermark: {
      text: 'sim-admin',
      color: '#333333',
      fontSize: 12,
      fontWeight: 'bold',
    },
  })

  const { watermark } = useWatermaking()

  const onCreate = () => {
    watermark.set(state.watermark, document.querySelector('.mark'))
  }

  onMounted(onCreate)

  watch(
    () => state.watermark,
    () => {
      nextTick(onCreate)
    },
    { immediate: true, deep: true }
  )
</script>

<template>
  <el-alert
    title="可以调整以下配置从而预览水印状态"
    type="success"
    center
    class="mb-20"
    :closable="false"
  />

  <div class="handler">
    <el-form label-width="100px" v-model="state.watermark">
      <el-form-item label="水印文字">
        <el-input
          v-model="state.watermark.text"
          placeholder="请输入水印文字"
          clearable
          :maxlength="5"
        />
      </el-form-item>
      <el-form-item label="水印颜色">
        <el-color-picker v-model="state.watermark.color" placeholder="请选择水印颜色" />
      </el-form-item>
      <el-form-item label="水印字体大小">
        <el-input-number v-model="state.watermark.fontSize" :min="12" :max="30" />
      </el-form-item>
      <el-form-item label="水印字体粗细">
        <el-select v-model="state.watermark.fontWeight">
          <el-option :label="item" :value="item" v-for="item in fontWeigh" :key="item" />
        </el-select>
      </el-form-item>
    </el-form>
  </div>

  <div class="mark"></div>
</template>

<style lang="scss" scoped>
  .mark {
    height: 300px;
    background-color: var(--el-bg-color);
    border-top: 2px dashed var(--el-border-color);
  }
</style>
