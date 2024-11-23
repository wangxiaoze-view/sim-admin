<script lang="ts" setup></script>

<template>
  <div class="scroll_5">
    <div class="scroll">
      <div style="height: 500px">在这里滚动，查看下方</div>
    </div>
    <p>万物之景始于春。</p>
  </div>
</template>

<style lang="scss" scoped>
  @use 'sass:string';

  @function randomNum($max, $min: 0, $u: 1) {
    @return ($min + random($max)) * $u;
  }

  @function randomColor() {
    @return rgb(randomNum(205, 50), randomNum(255), randomNum(255));
  }

  @function randomLinear($count, $width) {
    $value: '';

    @for $i from 0 through ($count - 1) {
      $j: $i - 1;
      $value: $value + randomColor() + string.unquote(' #{$j * $width}px #{$i * $width}px,');
    }

    @return linear-gradient(90deg, string.unquote(#{$value}) randomColor() 0 100%);
  }

  .scroll_5 {
    padding: 14px;
    background: #1d1e1f;
    color: #fff;

    timeline-scope: --my-scroller;

    .scroll {
      height: 200px;
      overflow: scroll;
      scroll-timeline-name: --my-scroller;
      box-shadow: inset 0 0 0 1px #fff;
    }
    p {
      margin: auto;
      font-size: 14px;
      line-height: 2;
      width: 600px;
      background: randomLinear(72, 25);
      background-clip: text;
      color: transparent;
      animation: colorChange steps(8);
      animation-timeline: --my-scroller;
      font-weight: bold;
    }
  }

  @keyframes colorChange {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: -112px 0;
    }
  }
</style>
