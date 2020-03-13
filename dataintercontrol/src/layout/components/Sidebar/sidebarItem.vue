<template>
  <div v-if="true">

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
    <el-menu-item index="5">
      <i class="el-icon-help"></i>
      <span slot="title">报表</span>
    </el-menu-item>
    <el-menu-item index="6">
      <i class="el-icon-help"></i>
      <span slot="title">制作</span>
    </el-menu-item>
    <el-menu-item index="7">
      <i class="el-icon-help"></i>
      <span slot="title">大屏</span>
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

    <app-link :to="resolvePath(onlyOneChild.path)">
      <el-menu-item index="4">
        <i class="el-icon-help"></i>
        <span slot="title">相关讨论</span>
      </el-menu-item>
    </app-link>
  </div>
</template>

<script>

    import appLink from './link'

    export default {
        name: "",
        components:{
            appLink,
        },
        methods:{
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

<style scoped>

</style>
