<template>
  <div class="title">
    {{detailLayout[0].name}}
  </div>
</template>

<script>
    export default {
        name: "FormTitle",
        props: {
          detailLayout: String
        }
    }
</script>

<style scoped>
  .title{
    line-height: 20px;
    background: #eee;
    text-indent: 10px;
    padding: 6px;
  }
</style>
