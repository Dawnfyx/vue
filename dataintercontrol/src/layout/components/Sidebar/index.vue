<template>
      <div>
        <userColumn />
        <el-scrollbar>
          <el-menu
            default-active="1"
            class="el-menu-vertical"
            @open="handleOpen"
            @close="handleClose">
            <el-menu-item index="1">
              <div @click="listToLink(toTest)">
                <i class="el-icon-paperclip"></i>
                <span>我看过的</span>
              </div>
            </el-menu-item>
            <el-menu-item index="2">
              <div @click="listToLink(toWorkshop)">
                <i class="el-icon-s-management"></i>
                <span slot="title">我的收藏</span>
              </div>
            </el-menu-item>
            <el-menu-item index="3">
              <div @click="listToLink(toDashboard)">
                <i class="el-icon-bell"></i>
                <span slot="title">信息中心</span>
              </div>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-help"></i>
              <span slot="title">相关讨论</span>
            </el-menu-item>
            <!--            <el-submenu index="5">-->
            <!--              <template slot="title">-->
            <!--                <i class="el-icon-location"></i>-->
            <!--                <span>导航一</span>-->
            <!--              </template>-->
            <!--              <el-menu-item-group>-->
            <!--                <template slot="title">分组一</template>-->
            <!--                <el-menu-item index="1-1">选项1</el-menu-item>-->
            <!--                <el-menu-item index="1-2">选项2</el-menu-item>-->
            <!--              </el-menu-item-group>-->
            <!--              <el-menu-item-group title="分组2">-->
            <!--                <el-menu-item index="1-3">选项3</el-menu-item>-->
            <!--              </el-menu-item-group>-->
            <!--              <el-submenu index="1-4">-->
            <!--                <template slot="title">选项4</template>-->
            <!--                <el-menu-item index="1-4-1">选项1</el-menu-item>-->
            <!--              </el-submenu>-->
            <!--            </el-submenu>-->
          </el-menu>
          </el-col>
        </el-scrollbar>
      </div>
</template>

<script>

  import userColumn from "./userColumn"
  import appLink from './link'

  export default {
      name: "",
      data(){
          return{
              toTest: "/test/index",
              toDashboard: "/dashboard/index",
              toWorkshop: "/workshop/index"
          }
      },
      components:{
          userColumn,
          appLink
      },
      methods: {
          handleOpen(key, keyPath) {
              console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
              console.log(key, keyPath);
          },
          listToLink(to){
              if(this.$route.path == to){
                  return;
              }
              this.$router.push(to);
          }
      }
  }
</script>

<style lang="less" scoped>

  @color1: #ebedef;
  @color2: #409EFF;

  .el-menu{
      background-color: @color1;

      .is-active{
        background-color: #fff;
        border-left: 8px solid @color2;
      }
      .el-menu-item:focus,
      .el-menu-item:hover{
        background-color: #fff;
      }
  }

</style>
