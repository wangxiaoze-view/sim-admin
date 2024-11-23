<script setup lang="ts">
  import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from 'three'
  import { TresCanvas } from '@tresjs/core'
  import { OrbitControls } from '@tresjs/cientos'

  defineOptions({
    name: 'object_02',
  })
  const gl = {
    clearColor: '#82DBC5',
    shadows: true,
    alpha: true,
    shadowMapType: BasicShadowMap,
    outputColorSpace: SRGBColorSpace,
    toneMapping: NoToneMapping,
  }
</script>

<template>
  <div class="container">
    <TresCanvas v-bind="gl">
      <OrbitControls />
      <TresPerspectiveCamera :position="[1, 2, 2]" :look-at="[0, 0, 0]" />
      <TresMesh cast-shadow>
        <TresBoxGeometry :args="[1, 1, 1]" />
        <TresMeshToonMaterial color="#4F4F4F" />
      </TresMesh>
      <TresMesh :position="[2, -2, 0]">
        <TresSphereGeometry />
        <TresMeshToonMaterial color="#FBB03B" />
      </TresMesh>

      <TresMesh receive-shadow :position="[0, -3, 0]" :rotation="[-Math.PI / 2, 0, 0]">
        <TresPlaneGeometry :args="[10, 10, 10, 10]" />
        <TresMeshStandardMaterial color="#f7f7f7" />
      </TresMesh>

      <TresAmbientLight :intensity="1" />
      <TresDirectionalLight cast-shadow :position="[0, 2, 0]" :intensity="1" />
    </TresCanvas>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
