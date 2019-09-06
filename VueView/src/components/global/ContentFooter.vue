<template>
  <footer class="main-footer">
    <div class="pull-right hidden-xs">
      <b>Version</b>
      {{version}}
    </div>
    <strong>
      Copyright &copy; 2016-2017
      <br >
      <a href="http://www.ewpower.com.cn/" target="_blank">
        优文途新科技（上海）有限公司 提供技术支持
      </a>
    </strong>
  </footer>
</template>

<script>
    export default {
        name: "ContentFooter",
        props:{
          version: String
        }
    }
</script>

<style scoped>

</style>
