<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html,
  body{
    height: 100%;
  }

  #app{
    height: 100%;
  }

  .el-tabs{
    padding: 0px 10px;

    /deep/ .el-tabs__header{
      margin-bottom: 0px;
    }
  }
</style>
