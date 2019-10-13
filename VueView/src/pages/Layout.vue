<template>
  <div class="wrapper" id="wrapper">
    <side-bar></side-bar>
    <div class="main-content" style="min-height: 768px;">
      <nav-bar></nav-bar>
      <content-header :contentHeader="contentHeader"  @click="leftSideHide()"></content-header>
      <div  @click="leftSideHide()" style="height: 768px">
        <p>zheshi layout</p>
        <hr style="border:3px solid #ff000088;">
        <h2> 分页组件开发</h2>
        <pagination :currentPage="11" :limit="30" :totalCount="120" :all="true"></pagination>
      </div>
      <content-footer :version="version"  @click="leftSideHide()"></content-footer>
    </div>
  </div>
</template>

<script>
  import ContentHeader from "@/components/global/ContentHeader"
  import ContentFooter from "@/components/global/ContentFooter"
  import Pagination from "@/components/global/Pagination"
  import NavBar from "@/components/global/NavBar"
  import SideBar from "@/components/global/SideBar"

  export default {
    name: "Layout",
    data() {
      return {
        isShowSide: "",
        contentHeader: {
          title: "",
          subTitle: ""
        },
        version: "0.0.1"
      }
    },
    components: {
      ContentHeader: ContentHeader,
      ContentFooter: ContentFooter,
      Pagination: Pagination,
      NavBar: NavBar,
      SideBar: SideBar
    },
    watch: {

    },
    methods: {
      leftSideToggle() {
        let id = document.getElementById("wrapper");
        if (this.isShowSide) {
          id.classList.add("left-side-show");
          this.$store.commit("leftSideToggle")
          this.isShowSide = this.$store.state.config.leftSideStatus;
        } else {
          id.classList.remove("left-side-show");
          this.$store.commit("leftSideToggle")
          this.isShowSide = this.$store.state.config.leftSideStatus;
        }
      },
      leftSideHide() {
        this.$store.commit("leftSideHide");
        this.leftSideToggle();
      },
    },
    computed: {
    },
    mounted: function () {
      this.$data.isShowSide = this.$store.state.config.leftSideStatus;
    },
    beforeMount: function(){
      this.$data.contentHeader = this.$store.state.config.contentHeader;
    }
  }
</script>

<style scoped>


</style>
