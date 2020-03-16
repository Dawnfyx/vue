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
              <app-link :to="tomyread">
                  <i class="el-icon-paperclip"></i>
                  <span>我看过的</span>
              </app-link>
            </el-menu-item>
            <el-menu-item index="2">
              <app-link :to="toWorkshop">
                  <i class="el-icon-s-management"></i>
                  <span>我的收藏</span>
              </app-link>
            </el-menu-item>
            <el-menu-item index="3">
              <app-link :to="toTest">
                <i class="el-icon-bell"></i>
                <span>信息中心</span>
              </app-link>
            </el-menu-item>
            <el-menu-item index="4">
              <app-link :to="toDashboard">
                <i class="el-icon-notebook-2"></i>
                <span>相关讨论</span>
              </app-link>
            </el-menu-item>
            <el-menu-item index="5">
              <app-link :to="toreportform">
                <i class="el-icon-help"></i>
                <span>报表</span>
              </app-link>
            </el-menu-item>
            <el-menu-item index="6">
              <app-link :to="tomaketopage">
                <i class="el-icon-help"></i>
                <span>制作</span>
              </app-link>
            </el-menu-item>
            <el-menu-item index="7">
              <app-link :to="tobigscreen">
                <i class="el-icon-help"></i>
                <span>大屏</span>
              </app-link>
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
  import { isExternal } from '@/utils/validate'

  export default {
      name: "",
      data(){
          return{
              toDashboard: "/dashboard/index",

              tobigscreen: "/bigscreen/index",
              tomaketopage: "/maketopage/index",
              toreportform: "/reportform/index",
              tomyread: "/myread/index",

              toWorkshop: "/workshop/index",
              toTest: "/test/index",
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
          resolvePath(routePath) {
              if (isExternal(routePath)) {
                  return routePath
              }
              if (isExternal(this.basePath)) {
                  return this.basePath
              }
              return path.resolve(this.basePath, routePath)
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
      .el-menu-item{
        a{
          display: block;
          text-decoration: none;
          color: #333;
        }
      }
      .el-menu-item:focus,
      .el-menu-item:hover{
        background-color: #fff;
      }
  }

</style>
