<script lang="ts" setup></script>

<template>
  <div class="scroll_5">
    <div class="scroll">
      <div style="height: 500px">在这里滚动，查看下方</div>
    </div>
    <p>
      <span>
        万物之景始于春，多少人待得春风来抹去冬日里的那最后一簇寒冷，带来春日的温暖，多少人待得春雨来滋润秋日里所凋零的花朵，绽放出春的美丽。归南的大雁欣然飞回，为湛蓝的天空添上了一抹纯真的颜色。泥泞的小路旁映衬着点点花朵正为路上的行人撒下些许殷红，来消除旅途中的疲乏。花瓣上剔透的露珠悄然落在旅人的身上，不时散发着淡淡的清香，耳边偶尔传来几声悦耳的鸟鸣，这才让人发觉这正是秋日里最美的写照。
      </span>
    </p>
  </div>
</template>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Carter+One&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Sofia+Sans&display=swap');
  .scroll_5 {
    padding: 14px;
    background: #1d1e1f;
    color: #fff;
    timeline-scope: --my-scroller;
    font-family: 'Roboto Mono', monospace;

    .scroll {
      height: 200px;
      overflow: scroll;
      scroll-timeline-name: --my-scroller;
      box-shadow: inset 0 0 0 1px #fff;
    }
    p {
      display: inline;
      margin: 0 auto;
      width: 600px;
      color: #fff;
      span {
        font-family: 'Roboto Mono', monospace;
        color: #fff;
        font-size: 14px;
        line-height: 2;
        /* 数字需要计算， 这段文字的长度 * 20字体大小  */
        background: linear-gradient(90deg, #fc0 0 2674px, #fff 0 5348px);
        background-position: 0 0;
        background-size: 5348px 100%;
        background-repeat: no-repeat;
        background-clip: text;
        color: transparent;
        animation: colorChange steps(191);
        animation-timeline: --my-scroller;
        font-weight: bold;
      }
    }
  }

  @keyframes colorChange {
    0% {
      background-position: -2674px 0;
    }
    100% {
      background-position: 0 0;
    }
  }
</style>
