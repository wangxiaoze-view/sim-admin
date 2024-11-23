<script lang="ts" setup>
  defineOptions({
    name: 'card_04',
    dir_name: 'card',
  })
</script>

<template>
  <div style="display: flex; align-items: centerl; justify-content: center; height: 100%">
    <div class="card_4"></div>
  </div>
</template>

<style lang="scss" scoped>
  @use 'sass:string';

  @function randomColor() {
    @return rgb(random(255), random(255), random(255));
  }

  @mixin randomImage($rows: 6, $cols: 6) {
    $bg: null;
    $position: null;

    $px: calc(100% / ($cols - 1));
    $py: calc(100% / ($rows - 1));

    @for $i from 0 through ($rows - 1) {
      @for $j from 0 through ($cols - 1) {
        @if ($bg) {
          $bg: $bg + string.unquote(',');
          $position: $position + string.unquote(',');
        }
        $color: randomColor();
        $bg: $bg + linear-gradient(to right, $color, $color);
        $position: $position + string.unquote('#{$j * $px} #{$i * $py}');
      }
    }
    background: {
      image: $bg;
      size: calc(100% / $cols) calc(100% / $rows);
      position: $position;
      repeat: no-repeat;
    }
  }

  .card_4 {
    width: 300px;
    height: 300px;
    margin: auto;
    border-radius: 10px;
    @include randomImage();
    animation: colorChange 1s infinite steps(10);
  }
  @keyframes colorChange {
    to {
      filter: hue-rotate(180deg);
    }
  }
</style>
