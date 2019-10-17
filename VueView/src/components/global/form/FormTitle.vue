<template>
  <div class="title">
    {{formData.name}}
  </div>
</template>

<script>
    export default {
        name: "FormTitle",
        props:{
          formData: Object
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
