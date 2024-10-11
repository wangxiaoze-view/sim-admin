<template>
  <div class="content">
    <h1>Rsbuild with Vue</h1>
    <p v-if="false" class="aaa" id="222">Start building amazing things with Rsbuild.</p>
  </div>
</template>

<style scoped>
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    line-height: 1.1;
    text-align: center;
  }

  .content h1 {
    font-size: 3.6rem;
    font-weight: 700;
  }

  .content p {
    font-size: 1.2rem;
    font-weight: 400;
    opacity: 0.5;
  }
</style>
