<script setup lang="ts">
  import Editor from '@tinymce/tinymce-vue'
  defineOptions({
    name: 'ComIdea',
  })

  const init = {
    toolbar_mode: 'sliding',
    language: 'zh_CN',
    plugins:
      'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
    toolbar:
      'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
    tinycomments_mode: 'embedded',
    tinycomments_author: 'Author name',
    mergetags_list: [
      { value: 'First.Name', title: 'First Name' },
      { value: 'Email', title: 'Email' },
    ],
    ai_request: (request: any, respondWith: any) =>
      respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
  }
</script>

<template>
  <div class="container">
    <Editor
      api-key="wx969ceo79juu6lqccsanl7bl8aw8n6qdmwvi88f74og2k09"
      :init="init"
      initial-value="Welcome to TinyMCE!"
    />
  </div>
</template>

<style lang="scss" scoped>
  .container {
    background-color: #fff;
    padding: 20px;
    border-radius: 4px;
  }
</style>
