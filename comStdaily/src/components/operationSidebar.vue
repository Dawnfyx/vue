<template>
  <div id="SideMenu" v-show="sidebartoggle">
    <div class="toggler">
      <span class="glyphicon" @click="toggleSidebar">侧边栏</span>
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
        },
        computed:{
          sidebartoggle:{
              get(){
                  return this.sidebarShow
              }
          }
        },
        methods:{
            toggleSidebar(){
                this.$emit("toggle")
            }
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
    z-index: 2;

    .toggler {
      width: 25px;
      height: 80px;
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
    .toggler{
      font-size: 1rem;
      background-color: red;
    }
  }

</style>
