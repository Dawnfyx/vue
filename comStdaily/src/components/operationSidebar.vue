<template>
  <div id="SideMenu" data-status="opened" v-show="sidebarShow">
    <div class="toggler">
      <span class="glyphicon">侧边栏</span>
    </div>
    <div class="side-content">

    </div>
  </div>
</template>

<script>
    export default {
        name: "operationSidebar",
        props:{
            sidebarShow: Boolean
        }
    }
</script>

<style scoped lang="less">
  #SideMenu {
    width: 200px;
    height: 100%;
    position: fixed;
    right: 0px;
    top: 0px;

    .toggler {
      width: 25px;
      height: 65px;
      position: absolute;
      left: -26px;
      top: 50%;
      margin-top: -40px;
      background-color: #fff;
      -webkit-box-shadow: -1px 0 8px rgba(0, 0, 0, .175);
      box-shadow: -1px 0 8px rgba(0, 0, 0, .175);

      span {
        height: 100%;
        text-align: center;
        cursor: pointer;
      }

    }

    .side-content {
      width: 385px;
      height: 100%;
      background-color: #fff;
      -webkit-box-shadow: -1px 0 8px rgba(0, 0, 0, .175);
      box-shadow: -1px 0 8px rgba(0, 0, 0, .175);
    }

  }

</style>
