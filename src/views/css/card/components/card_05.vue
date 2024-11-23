<script lang="ts" setup>
  defineOptions({
    name: 'card_05',
    dir_name: 'card',
  })
</script>

<template>
  <div style="display: flex; align-items: centerl; justify-content: center; height: 100%">
    <div class="card_5"></div>
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

  $str: 'ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz123456789';
  $len: str-length($str);

  @function randomChar() {
    $r: random($len);
    @return str-slice($str, $r, $r);
  }

  @function randomChars($number) {
    $value: '';

    @if ($number > 0) {
      @for $i from 1 through $number {
        $value: $value + randomChar();
      }
    }
    @return $value;
  }

  .card_5 {
    width: 300px;
    height: 300px;
    margin: auto;
    position: relative;
    border-radius: 10px;
    color: #fff;
    font-size: 50px;
    line-height: 50px;
    font-weight: bold;
    letter-spacing: 25px;
    word-wrap: break-word;
    animation: colorChange 1s infinite steps(10);

    &::before {
      --content1: '#{randomChars(36)}';
      --content2: '#{randomChars(36)}';
      --content3: '#{randomChars(36)}';
      --content4: '#{randomChars(36)}';
      --content5: '#{randomChars(36)}';
      --content6: '#{randomChars(36)}';
      --content7: '#{randomChars(36)}';
      --content8: '#{randomChars(36)}';
      --content9: '#{randomChars(36)}';
      content: randomChars(36);
      @include randomImage();
      position: absolute;
      inset: 0;
      color: transparent;
      background-clip: text;
      animation: contentChange 1.5s infinite linear;
    }
  }
  @keyframes colorChange {
    to {
      filter: hue-rotate(180deg);
    }
  }
  @keyframes contentChange {
    10% {
      content: var(--content1);
    }
    20% {
      content: var(--content2);
    }
    30% {
      content: var(--content3);
    }
    40% {
      content: var(--content4);
    }
    50% {
      content: var(--content5);
    }
    60% {
      content: var(--content6);
    }
    70% {
      content: var(--content7);
    }
    80% {
      content: var(--content8);
    }
    90% {
      content: var(--content9);
    }
  }
</style>
