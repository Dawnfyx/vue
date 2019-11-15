<template>
  <div class="wrapper" id="wrapper">
    <loading :loadingShow="loadingShow"></loading>
    <header-title :title="title" @toggle="handleSidebar"></header-title>
    <section-item :HomeData="HomeData" :HomeLinkTo="HomeLinkTo"></section-item>
    <footer-link :footerData="footer"></footer-link>
  </div>
</template>

<script>
  import {mapState, mapMutations, mapActions} from "vuex";
  import loading from "@/components/loading";
  import headerTitle from "@/components/headerTitle";
  import sectionItem from '@/pages/Home/components/sectionItem';
  import footerLink from '@/pages/Home/components/footerLink';

  export default {
    name: "Home",
    data() {
      return {
        title: "主页",
        HomeLinkTo: {
          "合同管理": "/examine",
          "客户": "/customer",
          "联系人": "/contact"
        },
        footer: [
          {
            "icon": "fa-envelope",
            "desc": "信息",
            "url": "/info",
            "active": "info"
          },
          {
            "icon": "fa-star",
            "desc": "主页",
            "url": "/",
            "active": "home"
          },
          {
            "icon": "fa-cogs",
            "desc": "设置",
            "url": "/configs",
            "active": "configs"
          }
        ],
        sidebarShow: false,
        loadingShow: true
      }
    },
    computed: {
      // 映射 this.sHomePageData 为 store.state.sHomePageData
      ...mapState([
        'apiStrConfig',
        'sHomePageData'
      ]),
      ...mapActions([
        'aHomePageData'
      ]),
      HomeData: {
        get(){
          return JSON.parse(this.sHomePageData);
        },
        set(){

        }
      }
    },
    components: {
      loading: loading,
      headerTitle: headerTitle,
      sectionItem: sectionItem,
      footerLink: footerLink
    },
    methods: {
      isShowLoading(isShow){
        if(isShow){
          this.loadingShow = true;
        } else{
          this.loadingShow = false;
        }
      },
      // 本地缓存 定时24小时 清除缓存
      localStorageetInervalRemove(key) {
        let curTime = new Date().getTime();
        let data = localStorage.getItem(key);
        let dataObj = JSON.parse(data);
        let exp = 12 * 60 * 60 * 1000; //24小时
        if (curTime - dataObj.time > exp) {
          localStorage.removeItem(key)
        }
      },
      //本地缓存 添加时间
      localStorageItemAddTime(itemname, item, time) {
        localStorage.setItem(itemname, JSON.stringify({data: item, time: time}));
      },
      sidebarTaggle() {
        this.sidebarShow = !this.sidebarShow;
      },
      handleSidebar() {
        // console.log("sss");
        this.sidebarShow = !this.sidebarShow;
      },

      getHomeData() {
        this.aHomePageData;
      },
      getCustomerEntityViewAndList(){
        const pageData = {
          page: 1,
          count: 50,
          total: false
        }
        this.$store.dispatch("aCustomerEntityViewAndList", pageData);
      },
      getCustomerEntityList(){
        const viewId = "00000000-0000-0000-00AA-000010001001";
        const page = 1;
        const count = 50;
        const total = false
        let args = {viewId, page, count,total};
        this.$store.dispatch("actionsCustomerEntityList", args)
      },
      getCustomerLayoutForm(){
        const entName = "account";
        const formId = "8448B78F-8F42-454E-8E2A-F8196B0419AF";
        let args = {entName, formId};
        this.$store.dispatch("actionsCustomerLayoutForm", args);
      },
      getContactEntityList(){
        const viewId = "00000000-0000-0000-00AA-000010001003";
        const page = 1;
        const count = 50;
        const total = false
        let args = {viewId, page, count,total};
        this.$store.dispatch("actionsContactEntityList", args)
      },
      getContactLayoutForm(){
        const entName = "contact";
        const formId = "1FED44D1-AE68-4A41-BD2B-F13ACAC4ACFA";
        let args = {entName, formId};
        this.$store.dispatch("actionsContactLayoutForm", args)
      }
    },
    watch: {
      watchLayoutFormData(newval, oldval){
        if(newval == null){
          this.$store.state.stateLayoutViewData = oldval;
          console.log("return oldval", this.$store.state.stateLayoutViewData);
        }
      }
    },
    created() {
      this.getHomeData();
      this.getCustomerEntityViewAndList();

      // this.getCustomerEntityList();
      // this.getCustomerLayoutForm();
      // this.getContactEntityList();
      // this.getContactLayoutForm();
    },
    beforeMount() {
    },
    mounted() {
      this.isShowLoading(false);
    }
  }
</script>

<style lang="less">

  @import '~style/mainColor';

  .wrapper {
    background-color: @clfff;
  }


</style>
