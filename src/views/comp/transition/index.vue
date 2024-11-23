<script setup lang="ts">
  defineOptions({
    name: 'ComTransition',
  })
</script>

<template>
  <el-row :gutter="20">
    <el-col :lg="6" :md="12" :offset="0" class="mb-20">
      <el-card class="sim-gruid--item" shadow="hover">
        <div class="content content_1"></div>
      </el-card>
    </el-col>
    <el-col :lg="6" :md="12" :offset="0" class="mb-20">
      <el-card class="sim-gruid--item" shadow="hover">
        <div class="content content_2"></div>
      </el-card>
    </el-col>
    <el-col :lg="6" :md="12" :offset="0" class="mb-20">
      <el-card class="sim-gruid--item" shadow="hover">
        <div class="content content_3"></div>
      </el-card>
    </el-col>
    <el-col :lg="6" :md="12" :offset="0" class="mb-20">
      <el-card class="sim-gruid--item" shadow="hover">
        <div class="content content_4"></div>
      </el-card>
    </el-col>
    <el-col :lg="6" :md="12" :offset="0" class="mb-20">
      <el-card class="sim-gruid--item" shadow="hover">
        <div class="content content_5"></div>
      </el-card>
    </el-col>

    <el-col :lg="6" :md="12" :offset="0" class="mb-20">
      <el-card class="sim-gruid--item" shadow="hover">
        <div class="content content_6"></div>
      </el-card>
    </el-col>

    <el-col :lg="6" :md="12" :offset="0" class="mb-20">
      <el-card class="sim-gruid--item" shadow="hover">
        <div class="content content_7"></div>
      </el-card>
    </el-col>
    <el-col :lg="6" :md="12" :offset="0" class="mb-20">
      <el-card class="sim-gruid--item" shadow="hover">
        <div class="content content_8"></div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
  .container {
    padding: 20px;
    border-radius: 4px;
    background-color: #fff;

    .sim-gruid--item {
      margin-bottom: 20px;
      .sim-entrance--header,
      .content {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
  :deep(.el-card__body) {
    height: 300px;
    justify-content: center;
    display: flex;
    align-items: center;
    cursor: pointer;

    .content {
      width: 200px;
      height: 200px;
      justify-content: center;
      background-color: var(--el-color-primary);
      border-radius: 6px;
      transition: all 0.3s ease-in-out;

      &_2 {
        background-color: bisque;
      }
      &_3 {
        background-color: rgb(255, 255, 0);
      }
      &_4 {
        background-color: rgb(32, 116, 241);
      }
      &_5 {
        background-color: rgb(245, 70, 236);
      }
      &_6 {
        background-color: rgb(194, 79, 127);
      }
      &_7 {
        background-color: rgb(166, 162, 221);
      }
      &_8 {
        background-color: rgb(226, 187, 102);
      }
    }

    &:hover {
      .content_1 {
        transform: translate3d(0, -10px, 0);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        border-radius: 50%;
      }

      .content_2 {
        transform: translateX(-100px);
      }

      .content_3 {
        transform: translateX(100px);
      }

      .content_4 {
        transform: translateY(100px);
      }

      .content_5 {
        transform: scale(1.2);
      }

      .content_6 {
        transform: rotate(180deg);
      }

      .content_7 {
        transform: skew(30deg);
      }

      .content_8 {
        transform: matrix(1, 0.5, 0.5, 1, 0, 0);
      }
    }
  }
</style>
