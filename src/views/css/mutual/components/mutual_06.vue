<script setup lang="ts">
  import { computed, onMounted, ref } from 'vue'
  const stepIndex = ref(0)
  const domRect = ref()
  const popupLayer = [
    { content: '.box2', title: '第一步', subTitle: '选中第二个格子' },
    { content: '.box1', title: '第二步', subTitle: '选中第一个格子' },
    { content: 'span', title: '第三步', subTitle: '选中文本Text' },
    { content: 'p', title: '最后一步', subTitle: '选中这个段落' },
  ]

  const getEL = computed(() => {
    return popupLayer[stepIndex.value]
  })

  const initEl = () => {
    popupLayer.forEach(({ content }) => {
      const dom: any = document.querySelector(`.popup-box ${content}`)
      if (dom) {
        dom.style.position = 'initial'
        dom.style.zIndex = 0
      }
    })
  }

  const positionPopup = () => {
    // 获取当前元素
    const { content } = getEL.value
    // 因为是在 vitepress ， 所有定位去掉父级的元素信息
    const current = document.querySelector('.popup-box')?.parentElement
    if (!current) return
    const parentRect = current.getBoundingClientRect()

    initEl()

    // 当前的元素信息
    const dom: any = document.querySelector(`.popup-box ${content}`)
    if (!dom) return
    dom.style.position = 'relative'
    dom.style.zIndex = 12
    const child = dom.getBoundingClientRect()

    domRect.value = {
      left: child.left - parentRect.left,
      top: child.top - parentRect.top,
      width: child.width,
      height: child.height,
    }
  }

  const onStep = (type: 'pre' | 'next' | 'finish') => {
    if (type === 'pre') {
      stepIndex.value--
      positionPopup()
    } else if (type === 'next') {
      stepIndex.value++
      positionPopup()
    } else if (type === 'finish') {
      domRect.value = null
      stepIndex.value = 0
    }
  }

  onMounted(positionPopup)
</script>

<template>
  <div class="popup-box">
    <div class="container">
      <div class="box box1">第一个格子</div>
      <div class="box box2">第二个格子</div>
      <div class="box box3">第三个格子</div>
      <div class="box box4">第四个格子</div>
      <div class="box box5">第五个格子</div>
    </div>
    <p>
      这是一个有趣的事情...

      <span>Text</span>
    </p>

    <div class="popup" v-if="domRect && popupLayer.length > 0">
      <div
        class="checked-box"
        :style="{
          left: domRect.left + 'px',
          top: domRect.top + domRect.height + 6 + 'px',
        }"
      >
        <header class="title">{{ getEL.title }}</header>
        <div class="subTitle">{{ getEL.subTitle }}</div>
        <div class="handler">
          <button v-if="stepIndex !== 0" @click="onStep('pre')">上一步</button>
          <button v-if="stepIndex === popupLayer.length - 1" @click="onStep('finish')">结束</button>

          <button v-else @click="onStep('next')">下一步</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .popup-box {
    position: relative;
    width: 100%;
    height: 500px;
    .container {
      padding-top: 40px;
      display: flex;
      align-items: center;

      .box {
        width: 100px;
        height: 40px;
        border: 1px solid var(--el-border-color);
        margin: 0 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--el-color-primary);
        color: #fff;
      }
    }

    p {
      margin-top: 20px;
      padding: 6px 10px;
      background: var(--el-color-primary);
      span {
        padding: 4px 10px;
        background: var(--el-bg-color);
      }
    }
    .popup {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      &::before {
        content: '';
        display: block;
        position: absolute;
        inset: 0;
        background-color: rgba($color: #000000, $alpha: 0.5);
      }

      .checked-box {
        min-width: 150px;
        position: absolute;
        z-index: 110;
        padding: 10px 14px;
        border-radius: 4px;
        z-index: 1;
        background-color: var(--el-bg-color);
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
        transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
        &::before {
          content: '';
          display: block;
          position: absolute;
          top: -4px;
          left: 30%;
          transform: translateX(-30%);
          width: 0;
          height: 0;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid var(--el-bg-color);
          z-index: 1;
        }
        .title {
          font-weight: bold;
          margin-bottom: 4px;
          border-bottom: 1px dashed #eee;
        }

        .subTitle {
          font-size: 12px;
        }
        .handler {
          border-top: 1px dashed #eee;
          padding: 4px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 10x;
          button {
            font-size: 12px;
            padding: 1px 4px;
            background-color: var(--el-color-primary);
            color: #fff;
            border-radius: 4px;
            border: 1px solid var(--el-color-primary);
          }
        }
      }
    }
  }
</style>
