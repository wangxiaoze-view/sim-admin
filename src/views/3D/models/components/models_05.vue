<script setup lang="ts">
  import { ref } from 'vue'
  import { TresCanvas, useRenderLoop } from '@tresjs/core'
  import { useGLTF } from '@tresjs/cientos'
  import { BasicShadowMap, NoToneMapping, SRGBColorSpace } from 'three'
  import model from './model.vue'
  const gl: any = {
    shadows: true,
    alpha: true,
    powerPreference: 'high-performance',
    shadowMapType: BasicShadowMap,
    outputColorSpace: SRGBColorSpace,
    toneMapping: NoToneMapping,
  }

  const lightRef = ref()
  const containerRef = ref()

  const sceneRef = ref()

  const { scene } = await useGLTF(`https://file.wangzevw.com/3d/models/05/scene.gltf`, {
    draco: true,
  })

  const { onLoop } = useRenderLoop()
  onLoop(({ elapsed }) => {
    sceneRef.value.rotation.y = Math.sin(elapsed) * 0.5
  })
</script>

<template>
  <div class="container" ref="containerRef">
    <div class="can">
      <TresCanvas v-bind="gl">
        <TresPerspectiveCamera :position="[0, 0, 10]" />

        <TresMesh :position="[-0.5, -1, 0]" :scale="[0.4, 0.4, 0.4]">
          <primitive :object="scene" ref="sceneRef"></primitive>
        </TresMesh>

        <TresGridHelper :position="[-0.5, -1, 0]" />
        <TresDirectionalLight
          ref="lightRef"
          :position="[2, 1, 0]"
          :intensity="3"
        ></TresDirectionalLight>
      </TresCanvas>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .mt-10 {
    margin-top: 10px;
  }
  .container {
    width: 100%;
    height: 500px;
    position: relative;
    color: #333;
    background-image: linear-gradient(to top, #d9afd9 0%, #97d9e1 100%);

    .can {
      position: absolute !important;
      inset: 0;
      width: 100%;
      height: 100%;
    }
  }
</style>
