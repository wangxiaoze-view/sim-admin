<script setup lang="ts">
  import { nextTick, ref } from 'vue'
  import { VueDraggable } from 'vue-draggable-plus'
  const drag = ref(false)

  const list = ref(
    Array.from({ length: 10 }, (_, index) => ({
      name: `Abby${index + 1}`,
      id: index + 1,
    }))
  )

  function onStart() {
    drag.value = true
  }
  function onEnd() {
    nextTick(() => {
      drag.value = false
    })
  }
  function sort() {
    list.value.sort((a, b) => a.id - b.id)
  }
</script>
<template>
  <el-button @click="sort" type="primary" class="mb-20">还原</el-button>
  <VueDraggable
    v-model="list"
    :animation="150"
    target=".sort-target"
    class="row"
    @start="onStart"
    @end="onEnd"
  >
    <TransitionGroup
      type="transition"
      tag="ul"
      :name="!drag ? 'fade' : undefined"
      class="sort-target"
    >
      <li v-for="item in list" :key="item.id" class="list-group-item">
        {{ item.name }}
      </li>
    </TransitionGroup>
  </VueDraggable>
</template>

<style>
  .fade-move,
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: scaleY(0.01) translate(30px, 0);
  }

  .row {
    ul {
      margin: 0;
      padding: 0;
      list-style: none;

      .list-group-item {
        height: 60px;
        padding: 0 14px;
        display: flex;
        align-items: center;
        background-color: var(--el-color-primary);
        color: var(--el-color-white);
        border-radius: 4px;
        margin-bottom: 20px;
      }
    }
  }
</style>
