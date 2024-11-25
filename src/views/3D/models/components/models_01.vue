<script setup lang="ts">
  import { ref, shallowRef, reactive } from 'vue'
  import * as THREE from 'three'
  import { TresCanvas } from '@tresjs/core'
  import { CameraControls, TransformControls } from '@tresjs/cientos'
  import { BasicShadowMap, NoToneMapping, SRGBColorSpace } from 'three'
  import { useGLTF } from '@tresjs/cientos'

  defineOptions({
    dir_name: 'models',
  })

  const gl: any = {
    // 画布颜色
    clearColor: '#82DBC5',
    // 是否启用阴影
    shadows: true,
    // 控制默认清除 alpha 值
    alpha: true,
    // 设置阴影映射类型
    shadowMapType: BasicShadowMap,
    // 定义输出编码
    outputColorSpace: SRGBColorSpace,
    // 定义渲染器使用的色调映射曝光。
    toneMapping: NoToneMapping,
    // 用户代理适合此WebGL上下文的GPU配置。
    powerPreference: 'high-performance',
  }

  const boxRef = shallowRef()
  const controlsState = reactive({
    minDistance: 0,
    maxDistance: 100,
  })
  const colors = ['blue', 'white', 'red', 'green', 'yellow']
  const lightRef = ref()

  const onChangeColor = (colorKey: string) => {
    lightRef.value.color = new THREE.Color(colorKey)
  }

  const { scene } = await useGLTF(`https://file.wangzevw.com/3d/models/01/scene.gltf`, {
    draco: true,
  })
</script>

<template>
  <div class="container">
    <div class="handler">
      <div class="handler-row">
        <div>颜色</div>
        <div>
          <span
            class="colors-item"
            v-for="item in colors"
            :key="item"
            :style="{ background: item }"
            @click="onChangeColor(item)"
          ></span>
        </div>
      </div>
    </div>

    <TresCanvas v-bind="gl">
      <TresPerspectiveCamera :position="[0, 0, 4]" />
      <CameraControls v-bind="controlsState" make-default />

      <TransformControls :object="lightRef" />

      <TresDirectionalLight ref="lightRef" :position="[0, 1, -1]" :intensity="3" v-light-helper>
        <TresMesh ref="boxRef" :position="[0, -2, -1]">
          <primitive :object="scene" />
        </TresMesh>

        <TresGridHelper :position="[0, -2, 0]" />
      </TresDirectionalLight>
    </TresCanvas>
  </div>
</template>

<style scoped lang="scss">
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    color: #fff;

    .handler {
      position: absolute;
      right: 6px;
      top: 6px;
      z-index: 100;
      background: #fff;
      padding: 14px;
      border-radius: 4px;

      &-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        color: #000;

        .colors-item {
          display: inline-block;
          width: 20px;
          height: 20px;
          border-radius: 2px;
          margin-left: 3px;
          cursor: pointer;
          border: 1px solid var(--el-border-color);
        }
      }
    }
  }
</style>
