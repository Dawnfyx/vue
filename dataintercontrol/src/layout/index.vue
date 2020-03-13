<template>
  <div class="app-wrapper">
<!--    this is layout pages-->
    <sidebar class="sidebar-container"/>

    <div class="main-container">
      <div>
        <navbar/>
<!--        <tags-view/>-->
      </div>
      <app-main/>
    </div>

  </div>
</template>

<script>

    import {AppMain, Navbar, Sidebar, TagsView} from './components';

    export default {
        name: 'layout',
        components: {
            AppMain,
            Navbar,
            Sidebar,
            TagsView
        },
    }
</script>

<style lang="less" scoped>

  @color1: #ebedef;

  #app {
    .app-wrapper {
      position: relative;
      height: 100%;
      width: 100%;
    }
    .sidebar-container {
      -webkit-transition: width 0.28s;
      transition: width 0.28s;
      width: 210px !important;
      background-color: @color1;
      height: 100%;
      position: fixed;
      font-size: 0px;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 1001;
      overflow: hidden;
    }
    .main-container {
      min-height: 100%;
      -webkit-transition: margin-left .28s;
      transition: margin-left .28s;
      margin-left: 210px;
      position: relative;
    }

    .app-main{

    }
  }

</style>
