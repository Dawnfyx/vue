<template>
   <div class="wrapper" id="wrapper">
     <!--头部-->
     <nav-bar></nav-bar>
     <side-bar></side-bar>
     <div class="main-content">

       <content-header :contentHeader="contentHeader"></content-header>
       <div>zheshi layout</div>

     </div>
     <content-footer :version="version"></content-footer>
   </div>
</template>

<script>
    import ContentHeader from "@/components/global/ContentHeader"
    import ContentFooter from "@/components/global/ContentFooter"
    import NavBar from "@/components/global/NavBar"
    import SideBar from "@/components/global/SideBar"

    export default {
        name: "Layout",
        data(){
            return{
              contentHeader: {
                title: "大标题",
                subTitle: "小标题"
              },
              version: "0.0.1"
            }
        },
        components: {
          ContentHeader: ContentHeader,
          ContentFooter: ContentFooter,
          NavBar: NavBar,
          SideBar: SideBar
        }
    }
</script>

<style scoped>


</style>
