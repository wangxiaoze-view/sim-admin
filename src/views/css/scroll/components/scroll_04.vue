<script lang="ts" setup>
  import { ref } from 'vue'
  const isOver = ref(false)
</script>

<template>
  <div class="scroll_4" :class="{ over: isOver }">
    <p>
      万物之景始于春，多少人待得春风来抹去冬日里的那最后一簇寒冷，带来春日的温暖，多少人待得春雨来滋润秋日里所凋零的花朵，绽放出春的美丽。归南的大雁欣然飞回，为湛蓝的天空添上了一抹纯真的颜色。泥泞的小路旁映衬着点点花朵正为路上的行人撒下些许殷红，来消除旅途中的疲乏。花瓣上剔透的露珠悄然落在旅人的身上，不时散发着淡淡的清香，耳边偶尔传来几声悦耳的鸟鸣，这才让人发觉这正是秋日里最美的写照。
    </p>
    <div class="more" @click="isOver = !isOver">
      {{ !isOver ? '展开' : '收起' }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @mixin base {
    max-height: 40px;
    overflow: hidden;
    position: relative;
    border: 1px solid #eee;
    padding: 12px;
    animation: setOver 1ms;
  }
  .scroll_4 {
    @include base;
    --isOver: false;
    scroll-timeline: --over;
    animation-timeline: --over;

    &.over {
      max-height: none;
      .more {
        visibility: visible !important;
      }
    }

    p {
      margin-top: 0;
    }

    .more {
      position: absolute;
      bottom: 0;
      visibility: hidden;
      width: 100%;
      text-align: center;
      background: linear-gradient(90deg, #ddd, #eee);
    }
  }

  @keyframes setOver {
    from,
    to {
      --isOver: true;
    }
  }

  @container style(--isOver: true) {
    .scroll_4 .more {
      visibility: visible;
    }
  }
</style>
