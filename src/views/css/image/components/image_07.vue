<script setup lang="ts">
  import { onMounted, ref } from 'vue'

  const rows = 26
  const cols = 10

  const itemSize = ref(0)

  // 生成随机颜色
  const getRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
  }

  // 获取父元素
  const getParent = () => {
    return document.querySelector('.image-7') as HTMLDivElement
  }

  // 获取所有形状元素
  const getShapes = () => {
    return document.querySelectorAll('.shape') as NodeListOf<HTMLDivElement>
  }
  const initDelPad = () => {
    // 这一步是将vitepress的边框去掉
    const parent = getParent()
    parent?.parentElement?.classList.add('del-pad')

    // 放在单文件 html中， 这一行不需要， 涉及到 itemSize 的都不需要
    // 这里是需要拿到这个盒子的宽度， 单文件中是屏幕的宽度
    const { width } = parent.getBoundingClientRect()
    itemSize.value = width / (cols - 1)
  }

  // 获取相邻位置
  const setNeighbor = (rowIndex: number, colIndex: number) => {
    return [
      [rowIndex - 1, rowIndex % 2 === 0 ? colIndex : colIndex - 1], //左上方
      [rowIndex - 1, rowIndex % 2 !== 0 ? colIndex : colIndex + 1], // 右上方

      [rowIndex, colIndex - 1], // 左侧
      [rowIndex, colIndex + 1], // 右侧

      [rowIndex + 1, rowIndex % 2 === 0 ? colIndex : colIndex - 1], // 左下方
      [rowIndex + 1, rowIndex % 2 !== 0 ? colIndex : colIndex + 1], // 右下方
    ]
  }

  const onMouseEnter = (e: MouseEvent, rowIndex: number, colIndex: number) => {
    getShapes().forEach((child) => {
      child.style.opacity = '0.4'
    })
    const target = e.target as HTMLDivElement
    target.classList.add('self-active')
    target.style.opacity = '1'

    setNeighbor(rowIndex, colIndex).forEach(([row, col]) => {
      const child = document.querySelector(
        `.row-box:nth-child(${row + 1}) .shape:nth-child(${col + 1})`
      ) as HTMLDivElement
      if (!child) return
      child.style.opacity = '1'
      child.classList.add('around-active')
    })
  }

  const onMouseLeave = () => {
    getShapes().forEach((child) => {
      child.style.opacity = '1'
      child.classList.remove('self-active')
      child.classList.remove('around-active')
    })
  }

  onMounted(initDelPad)
</script>

<template>
  <div class="image-7">
    <div
      class="row-box"
      v-for="(row, rowIndex) in rows"
      :key="rowIndex"
      :style="{
        transform: row % 2 === 0 ? `translateX(${-itemSize / 2}px)` : `translateX(0)`,
        marginTop: rowIndex > 0 ? `-${itemSize / 5}px` : 0,
      }"
    >
      <div
        class="shape"
        v-for="(col, colIndex) in cols"
        :key="colIndex"
        :style="{
          width: `${itemSize}px`,
          height: `${itemSize}px`,
          backgroundImage: `url(https://picsum.photos/200/300?random=${Math.random()}), linear-gradient(to bottom, ${getRandomColor()}, ${getRandomColor()})`,
        }"
        @mouseenter="onMouseEnter($event, rowIndex, colIndex)"
        @mouseleave="onMouseLeave"
      ></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  // 如果将此demo放在单文件， 这里的vw可以为100vw，  单文件html中 把下面注释的css代码放开即可

  // 这里需要时 每一行n个 减去1，不然最后一个显示空白
  // $cols: 9;
  // $size: 100vw / $cols;

  .image-7 {
    width: 100%;
    height: 400px;
    overflow: hidden;

    .row-box {
      display: flex;
      align-items: center;
      // &:nth-child(even) {
      // 	transform: translateX(-$size / 2);
      // }
      // &:nth-child(n + 2) {
      // 	margin-top: -$size / 5;
      // }
      .shape {
        flex-shrink: 0;
        // width: $size;
        // height: $size;
        background-color: #f0f0f0;
        clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 0% 75%, 0% 25%);
        cursor: pointer;
        transition: all 0.4s ease;

        &.self-active {
          transform: scale(1.1);
        }

        &.around-active {
          transform: scale(0.8);
        }
      }
    }
  }
</style>

<style lang="scss">
  .del-pad {
    padding: 0 !important;
  }
</style>
