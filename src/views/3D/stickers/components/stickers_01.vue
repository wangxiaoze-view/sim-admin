<script setup lang="ts">
  import { TresCanvas, useTexture } from '@tresjs/core'
  import { OrbitControls } from '@tresjs/cientos'
  import { ref } from 'vue'

  defineOptions({
    name: 'texture_01',
  })

  const pbrTexture = await useTexture({
    map: `https://file.wangzevw.com/3d/stickers/01/Rock050_1K-JPG_Color.jpg`,
    displacementMap: `https://file.wangzevw.com/3d/stickers/01/Rock050_1K-JPG_Displacement.jpg`,
    roughnessMap: `https://file.wangzevw.com/3d/stickers/01/Rock050_1K-JPG_Roughness.jpg`,
    normalMap: `https://file.wangzevw.com/3d/stickers/01/Rock050_1K-JPG_NormalGL.jpg`,
    ambientOcclusion: `https://file.wangzevw.com/3d/stickers/01/Rock050_1K-JPG_AmbientOcclusion.jpg`,
  })

  const sphereRef = ref(null)
</script>

<template>
  <div class="container">
    <TresCanvas
      shadows
      clear-color="#82DBC5"
      preset="realistic"
      alpha
      power-preference="high-performance"
    >
      <OrbitControls />
      <TresPerspectiveCamera :position="[3, 3, 3]" :look-at="[0, 0, 0]" />
      <Suspense>
        <TresMesh ref="sphereRef" cast-shadow>
          <TresSphereGeometry :args="[1, 100, 100]" />
          <TresMeshStandardMaterial v-bind="pbrTexture" :displacement-scale="0.2" />
        </TresMesh>
      </Suspense>
      <TresDirectionalLight :intensity="1" v-light-helper />
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
