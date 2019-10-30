<template>
    <div class="header">
      <div class="left">
        <header-left v-if="headerLeft"></header-left>
      </div>
      <div class="title">
          {{title}}
      </div>
      <div class="right">
        <header-right @toggle="handleSidebar" v-if="headerRight"></header-right>
      </div>
      <!--抽屉-->
      <operation-sidebar :sidebarShow="sidebarShow" @toggle="handleSidebar"></operation-sidebar>
    </div>
</template>

<script>
  import headerLeft from "./headerLeft";
  import headerRight from "./headerRight";
  import operationSidebar from "@/components/operationSidebar";

    export default {
        name: "headerTitle",
        data(){
            return{
                sidebarShow: false
            }
        },
        props:{
            title: {
                type: String,
                default: '标题'
            },
            headerLeft: {
                type: Boolean,
                default: false
            },
            headerRight: {
                type: Boolean,
                default: false
            }
        },
        components:{
            headerLeft: headerLeft,
            headerRight: headerRight,
            operationSidebar: operationSidebar
        },
        methods:{
            handleSidebar(){
                this.sidebarShow = !this.sidebarShow
            }
        }
    }
</script>

<style scoped lang="less">

  @import '~style/mainColor';

  .header{
    background-color: @mColor;
    padding: 0.6rem 1.2rem;
    text-align: center;
    color: @clfff;
    font-size: 1.2rem;
    display: flex;
    justify-content: space-between;

    .title{
      margin: 0px auto;
    }
    .left{
      width: 2rem;
      font-size: 1rem;
    }
    .right{
      width: 2rem;
      font-size: 1rem;
    }
  }
</style>
