<template>
  <div class="navbar">
    <breadcrumb id="breadcrumb-container" class="breadcrumb-container" ></breadcrumb>
    <div class="right-menu">
      <el-button size="mini" class="new-add">新建</el-button>
    </div>
  </div>
</template>

<script>

    import Breadcrumb from '@/components/Breadcrumb'

    export default {
        components:{
            Breadcrumb,
        }
    }
</script>

<style lang="less" scoped>



  .navbar {
    height: 50px;
    overflow: hidden;

  .app-breadcrumb.el-breadcrumb{
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 8px;
    float: left;
  }

    .right-menu {
      height: 100%;
      float: right;

      .new-add {
        margin-top: 10px;
        margin-right: 10px;
      }

    }
  }

</style>
