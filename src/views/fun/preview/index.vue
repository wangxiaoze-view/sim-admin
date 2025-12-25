<script setup lang="ts">
  import { ref } from 'vue'

  import VueOfficeDocx from '@vue-office/docx/lib/v3'
  import VueOfficeExcel from '@vue-office/excel/lib/v3'
  import VueOfficePdf from '@vue-office/pdf/lib/v3'

  import '@vue-office/docx/lib/v3/style.css'
  import '@vue-office/excel/lib/v3/style.css'
  import { link } from '~/src/config'

  defineOptions({
    name: 'FunPreview',
  })

  const { previewImages, test_admin_doc, test_admin_excel, test_admin_pdf } = link
  const activeName = ref('first')
</script>

<template>
  <!-- TODO: 后期重构，处理#1部分问题 -->
  <el-card class="mb-20" shadow="hover">
    <el-tabs v-model="activeName">
      <el-tab-pane label="docx文件预览" name="first">
        <vue-office-docx :key="activeName" :src="test_admin_doc" style="height: 100vh" />
      </el-tab-pane>
      <el-tab-pane label="excel文件预览" name="second">
        <vue-office-excel :key="activeName" :src="test_admin_excel" style="height: 100vh" />
      </el-tab-pane>
      <el-tab-pane label="pdf文件预览" name="third">
        <vue-office-pdf :key="activeName" :src="test_admin_pdf" style="height: 100vh" />
      </el-tab-pane>
      <el-tab-pane label="图片预览" name="fourth">
        <el-image
          style="width: 100px; height: 100px"
          :src="previewImages[0]"
          :zoom-rate="1.2"
          :max-scale="7"
          :min-scale="0.2"
          :preview-src-list="previewImages"
          :initial-index="4"
          fit="cover"
        />
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>
