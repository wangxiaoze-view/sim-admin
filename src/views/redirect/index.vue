<template>
  <div class="redirect-container"></div>
</template>

<script lang="ts" setup>
  import { onBeforeMount } from 'vue'

  defineOptions({
    name: 'RedirectPage',
  })

  onBeforeMount(() => {
    setTimeout(() => {
      history.back()
    }, 500)
  })
</script>
