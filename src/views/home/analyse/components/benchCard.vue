<template>
  <el-row :gutter="20">
    <el-col :lg="6" :md="12" :offset="0">
      <el-card class="sim-gruid--item mb-20" shadow="hover">
        <div class="header">
          <span>营销额</span>
          <el-tag type="primary">周</el-tag>
        </div>

        <div class="content">
          <b>$172,000</b>
        </div>

        <div class="bottom">
          <span>总销售额</span>
          <span>$172,000</span>
        </div>
      </el-card>
    </el-col>
    <el-col :lg="6" :md="12" :offset="0">
      <el-card class="sim-gruid--item mb-20" shadow="hover">
        <div class="header">
          <span>订单量</span>
          <el-tag type="warning">日</el-tag>
        </div>
        <div class="content">
          <b>$172,000</b>
        </div>

        <div class="bottom">
          <span>总订单量</span>
          <span>$172,000</span>
        </div>
      </el-card>
    </el-col>
    <el-col :lg="6" :md="12" :offset="0">
      <el-card class="sim-gruid--item mb-20" shadow="hover">
        <div class="header">
          <span>活跃用户</span>
          <el-tag type="danger">月</el-tag>
        </div>
        <div class="content">
          <b>572,000</b>
        </div>

        <div class="bottom">
          <span>每日活跃用户</span>
          <span>2,000</span>
        </div>
      </el-card>
    </el-col>
    <el-col :lg="6" :md="12" :offset="0">
      <el-card class="sim-gruid--item mb-20" shadow="hover">
        <div class="header">
          <span>访问数</span>
          <el-tag type="info">年</el-tag>
        </div>
        <div class="content">
          <b>1,232,000</b>
        </div>

        <div class="bottom">
          <span>总访问数</span>
          <span>1,232,000</span>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'SimBenchCard',
  })
</script>

<style lang="scss" scoped>
  .sim-gruid--item {
    .sim-entrance--header,
    .content,
    .bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .content {
      b {
        font-size: var(--el-padding-sapce-large);
      }
    }
    .bottom {
      margin-top: 10px;
      color: #999;
      font-size: 14px;
    }
  }
</style>
