<template>
  <div class="title">
    {{detailData}}
  </div>
</template>

<script>
    export default {
        name: "FormTitle",
        props:{
            detailData: String
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
