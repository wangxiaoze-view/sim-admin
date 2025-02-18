<script setup lang="ts">
  import { defineAsyncComponent, ref } from 'vue'
  import { Loading, Error } from '../asyncComponent'

  const Rad = defineAsyncComponent({
    loader: () => import('remote/radioForCheck'),
    loadingComponent: () => Loading,
    errorComponent: () => Error,
    delay: 1000,
  })

  const model = ref('篮球')

  const radios = ref([
    { label: '篮球', value: '篮球' },
    { label: '足球', value: '足球' },
    { label: '排球', value: '排球' },
  ])
</script>

<template>
  <el-col :md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
    <el-card shadow="hover">
      <div class="header">单选</div>

      <div class="content">
        <el-scrollbar>
          <div class="mb-20">
            <el-radio-group v-model="model">
              <Rad :value="radio.value" v-for="(radio, index) in radios" :key="index">
                {{ radio.label }}
              </Rad>
            </el-radio-group>
          </div>

          <div class="mb-20">
            <el-radio-group v-model="model">
              <Rad
                :value="radio.value"
                v-for="(radio, index) in radios"
                :key="index"
                border
                isHideInput
              >
                {{ radio.label }}
              </Rad>
            </el-radio-group>
          </div>

          <div class="mb-20">
            <el-radio-group v-model="model">
              <Rad
                :value="radio.value"
                v-for="(radio, index) in radios"
                :key="index"
                border
                isIcon
                isHideInput
              >
                {{ radio.label }}
              </Rad>
            </el-radio-group>
          </div>

          <div class="mb-20">
            <el-radio-group v-model="model">
              <Rad
                :value="radio.value"
                v-for="(radio, index) in radios"
                :key="index"
                border
                isIcon
                isHideInput
                iconType="doneAll"
              >
                {{ radio.label }}
              </Rad>
            </el-radio-group>
          </div>

          <div class="mb-20">
            <el-radio-group v-model="model">
              <Rad :value="radio.value" v-for="(radio, index) in radios" :key="index" border>
                {{ radio.label }}
              </Rad>
            </el-radio-group>
          </div>

          <div class="mb-20">
            <el-radio-group v-model="model">
              <Rad :value="radio.value" v-for="(radio, index) in radios" :key="index" border isIcon>
                {{ radio.label }}
              </Rad>
            </el-radio-group>
          </div>
        </el-scrollbar>
      </div>
    </el-card>
  </el-col>
</template>

<style scoped lang="scss"></style>
