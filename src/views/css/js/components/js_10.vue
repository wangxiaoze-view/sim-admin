<script setup lang="ts">
  const onCopy = () => {
    const ele = document.querySelector('.clipboard-3 p') as HTMLElement

    // const tempTextarea = document.createElement("textarea");
    // tempTextarea.value = ele.innerText;
    // document.body.appendChild(tempTextarea);
    // tempTextarea.select();
    // ===== 这是一种做法，但是 execCommand 是废弃的api
    // document.execCommand("copy");
    // document.body.removeChild(tempTextarea);

    const range = document.createRange()
    range.selectNode(ele)
    const selection = window.getSelection() as Selection
    if (selection.rangeCount > 0) selection.removeAllRanges()
    selection.addRange(range)
  }

  const onPaste = () => {
    const ele = document.querySelector('.clipboard-3 .container') as HTMLDivElement
    const selection = window.getSelection() as Selection
    const selectedText = selection.toString()
    ele.innerHTML = selectedText
  }
</script>

<template>
  <div class="clipboard-3">
    <div class="handler">
      <p>
        在如此快节奏的社会里，哪怕仅仅是一个短暂的驻足也会打乱整天的计划，而走在车水马龙中的我们便任凭那美妙的四季一次又一次的从身边路过，慢慢地，人们就只知道到了某个季节，应该如何的增添衣物，却无人用心记录下这些美好的瞬间。
      </p>
      <el-button type="primary" @click="onCopy">复制</el-button>
      <el-button type="warning" @click="onPaste">粘贴</el-button>
    </div>
    <div class="container" contenteditable="true"></div>
  </div>
</template>

<style lang="scss" scoped>
  .clipboard-3 {
    .handler {
      margin-bottom: 20px;
    }
    .container {
      border: 1px solid var(--el-border-color);
      border-radius: 6px;
      padding: 10px;
      &:empty {
        min-height: 30px;
        cursor: pointer;
        &::before {
          content: '这里会展示粘贴的结果!';
        }
      }
    }
  }
</style>
