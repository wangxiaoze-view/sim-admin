<script setup lang="ts">
  import { ref } from 'vue'
  import { TresCanvas } from '@tresjs/core'
  import { OrbitControls, useGLTF } from '@tresjs/cientos'
  import { BasicShadowMap, NoToneMapping, SRGBColorSpace, Color } from 'three'

  const gl: any = {
    shadows: true,
    alpha: true,
    powerPreference: 'high-performance',
    shadowMapType: BasicShadowMap,
    outputColorSpace: SRGBColorSpace,
    toneMapping: NoToneMapping,
  }

  const colors = ['white', 'red', 'blue', 'pink', 'green']

  const lightRef = ref()

  const onChangeControls = (e: any) => {
    const { x, y, z } = e.object.position
    lightRef.value.position.set(x, y, z)
  }

  const onChangeColor = (color: string) => {
    lightRef.value.color = new Color(color)
  }

  const { scene } = await useGLTF(`https://file.wangzevw.com/3d/models/04/scene.gltf`, {
    draco: true,
  })
</script>

<template>
  <div class="container">
    <div class="container-left">
      <div class="color-box">
        <div
          class="color"
          v-for="item in colors"
          :key="item"
          :style="{ background: item }"
          @click="onChangeColor(item)"
        ></div>
      </div>
      <TresCanvas v-bind="gl">
        <OrbitControls enableDamping makeDefault @change="onChangeControls" />

        <TresPerspectiveCamera :position="[0.3, 0.7, 5]" />

        <TresMesh :position="[-0.5, -1, 0]">
          <primitive :object="scene" />

          <TresDirectionalLight
            ref="lightRef"
            :position="[2, 1, 0]"
            :intensity="3"
          ></TresDirectionalLight>
        </TresMesh>
      </TresCanvas>
    </div>
    <div class="container-right">
      <div class="right-content">
        <h2>最新款手机-2024-Plus</h2>
        <p class="mt-10">
          介绍:
          由xxx开发并发布的一款高性能,在科技与艺术的交响乐章中，智尊X1横空出世，重新定义了智能手机的边界。这不仅仅是一部手机，它是您探索世界、连接未来的钥匙。
        </p>
        <p class="mt-10">
          xxx不仅是科技的结晶，更是您品味与身份的象征。它不仅仅是通讯工具，而是您探索未知、记录美好、高效生活的伙伴。现在，就让我们一起，开启这场前所未有的智能之旅吧！
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .mt-10 {
    margin-top: 10px;
  }
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    color: #333;
    background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
    &-left {
      flex: 1;
      height: 100%;
      position: relative;

      .color-box {
        position: absolute;
        bottom: 40px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        z-index: 100;
        .color {
          width: 30px;
          height: 30px;
          border: 1px solid #eee;
          cursor: pointer;
          &:not(:last-of-type) {
            margin-right: 10px;
          }
        }
      }
    }
    &-right {
      flex: 1;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .right-content {
        padding: 20px;
        line-height: 1.5;
      }
    }
  }
</style>
