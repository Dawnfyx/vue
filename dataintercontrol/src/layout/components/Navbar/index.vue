<template>
  <div class="navbar">
    <div class="right-menu">
      <el-button size="mini" class="new-add">新建</el-button>
      <breadcrumb id="breadcrumb-container" class="breadcrumb-container" ></breadcrumb>
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
