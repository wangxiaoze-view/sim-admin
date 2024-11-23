<script lang="ts" setup>
  import { TShape } from '~/src/enum'
  import { Shape } from './enum'

  defineOptions({
    name: 'SimSvg',
  })

  defineProps<{
    type: TShape | Shape
  }>()
</script>

<template>
  <svg
    v-if="type === TShape.RECTANGLE"
    width="24"
    height="24"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M42 8H6C4.89543 8 4 8.89543 4 10V38C4 39.1046 4.89543 40 6 40H42C43.1046 40 44 39.1046 44 38V10C44 8.89543 43.1046 8 42 8Z"
      fill="none"
      stroke="#444"
      stroke-width="4"
    />
  </svg>
  <svg
    v-if="type === TShape.DIAMOND"
    width="24"
    height="24"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M42 8H6C4.89543 8 4 8.89543 4 10V38C4 39.1046 4.89543 40 6 40H42C43.1046 40 44 39.1046 44 38V10C44 8.89543 43.1046 8 42 8Z"
      fill="none"
      stroke="#444"
      stroke-width="4"
    />
  </svg>
  <svg
    v-if="type === TShape.CIRCLE"
    width="24"
    height="24"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="24" cy="24" r="20" fill="none" stroke="#444" stroke-width="4" />
  </svg>
  <svg
    v-if="type === Shape.CLEAN"
    width="24"
    height="24"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#icon-9409d6e7c11bad3)">
      <path
        d="M44.7818 24.1702L31.918 7.09935L14.1348 20.5L27.5 37L30.8556 34.6643L44.7818 24.1702Z"
        fill="none"
        stroke="#444"
        stroke-width="4"
        stroke-linejoin="round"
      />
      <path
        d="M27.4998 37L23.6613 40.0748L13.0978 40.074L10.4973 36.6231L4.06543 28.0876L14.4998 20.2248"
        stroke="#444"
        stroke-width="4"
        stroke-linejoin="round"
      />
      <path
        d="M13.2056 40.072L44.5653 40.072"
        stroke="#444"
        stroke-width="4"
        stroke-linecap="round"
      />
    </g>
    <defs>
      <clipPath id="icon-9409d6e7c11bad3">
        <rect width="48" height="48" fill="#444" />
      </clipPath>
    </defs>
  </svg>
</template>
