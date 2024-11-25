<script setup lang="ts">
  type QueueDataType = (next: (values: number[]) => void) => void
  class Queue {
    private index: number = 0
    constructor(private queue: QueueDataType[] = []) {}

    runTask() {
      const currentTask = this.queue[this.index]
      if (!currentTask) return
      currentTask(this.nextTask)
    }
    nextTask(values: number[]) {
      if (this.index >= this.queue.length) return
      Promise.resolve().then(() => {
        const el = document.createDocumentFragment()
        values.forEach((_, index) => {
          const div = document.createElement('div')
          div.textContent = index.toString()
          div.classList.add('data-item')
          el.appendChild(div)
        })
        document.querySelector('.data-box .content-box')?.appendChild(el)
      })
      this.index++
      const currentTask = this.queue[this.index]
      if (!currentTask) return
      currentTask(this.nextTask)
    }
  }
  // 20w数据
  const max = 20 * 10000
  // 每页1w条数据显示
  const pageSize = 1000
  // 模拟生成的数据
  const data = Array.from({ length: max }, (_, index) => {
    return (next: any) => {
      setTimeout(() => {
        next.call(
          queue,
          Array.from({ length: pageSize }, (_, index) => index).map(() => 0)
        )
      }, 0)
    }
  })

  const queue = new Queue(data)

  const onClick = () => queue.runTask()
</script>

<template>
  <div class="data-box">
    <blockquote>模拟一次性创建20w条数据</blockquote>
    <el-button type="primary" @click="onClick">创建</el-button>
    <div class="content-box"></div>
  </div>
</template>

<style scoped lang="scss">
  .data-box {
    height: 500px;
    overflow-y: auto;

    .content-box {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      gap: 10px;

      :deep(.data-item) {
        padding: 10px;
        height: 100px;
        border-radius: 4px;
        border: 1px solid var(--el-border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: cadetblue;
        color: #fff;
        font-size: 30px;
      }
    }
  }
</style>
