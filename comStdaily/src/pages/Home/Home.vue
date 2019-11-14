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
      // 映射 this.stateHomePageData 为 store.state.stateHomePageData
      ...mapState([
        'stateHomePageData',
        'stateLayoutFormData',
        'stateLayoutViewData',
        'stateLayoutFormAndDetailData',
        'stateEntityListData',
        'stateEntityDetailData',
        'stateEntityViewAndListData'
      ]),
      // 映射 this.mutationsHomePageData 为 this.$store.commit('mutationsHomePageData')
      ...mapMutations([
        'mutationsHomePageData',
        'mutationsLayoutFormData',
        'mutationsLayoutViewData',
        'mutationsLayoutFormAndDetailData',
        'mutationsEntityListData',
        'mutationsEntityDetailData',
        'mutationsEntityViewAndListData'
      ]),
      // 映射 this.actionsHomePageData 为 this.$store.dispatch('actionsHomePageData')
      ...mapActions([
        'actionsHomePageData',
        'actionsLayoutFormData',
        'actionsLayoutViewData',
        'actionsLayoutFormAndDetailData',
        'actionsEntityListData',
        'actionsEntityDetailData',
        'actionsEntityViewAndListData'
      ]),
      HomeData: {
        get() {
          return JSON.parse(this.stateHomePageData)
        }
      },
      watchLayoutFormData() {
        return this.$store.state.stateLayoutViewData
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
        this.actionsHomePageData;
      },
      getLayoutFormData(){
        const entName = "account";
        const formId = "8448B78F-8F42-454E-8E2A-F8196B0419AF";
        let args = {entName, formId};
        this.$store.dispatch("actionsLayoutFormData", args)
      },
      getLayoutViewData(){
        const entName = "account";
        const viewId = "00000000-0000-0000-00AA-000010001001";
        let args = {entName, viewId};
        this.$store.dispatch("actionsLayoutViewData", args)
      },
      getLayoutFormAndDetailData(){
        const entName = "account";
        const formId = "8448B78F-8F42-454E-8E2A-F8196B0419AF";
        const id = "d074552e-c8fe-e911-8ace-cdf603c00096";
        let args = {entName, formId, id};
        this.$store.dispatch("actionsLayoutFormAndDetailData", args)
      },
      getEntityListData(){
        const viewId = "00000000-0000-0000-00AA-000010001001";
        const page = 1;
        const count = 50;
        const total = false
        let args = {viewId, page, count,total};
        this.$store.dispatch("actionsEntityListData", args)
      },
      getEntityDetailData(){
        const entName = "account";
        const id = "d074552e-c8fe-e911-8ace-cdf603c00096";
        let args = {entName, id};
        this.$store.dispatch("actionsEntityDetailData", args)
      },
      getEntityViewAndListData(){
        const entName = "account";
        const viewId = "00000000-0000-0000-00AA-000010001001";
        let args = {entName, viewId};
        this.$store.dispatch("actionsEntityViewAndListData", args)
      },
      getAllData(){
        // this.actionsHomePageData;
        // this.actionsLayoutFormData;
        // this.actionsLayoutViewData;
        // this.actionsLayoutFormAndDetailData;
        // this.actionsEntityListData;
        // this.actionsEntityDetailData;
        // this.actionsEntityViewAndListData;
      },
      getCustomerEntityList(){
        const viewId = "00000000-0000-0000-00AA-000010001001";
        const page = 1;
        const count = 50;
        const total = false
        let args = {viewId, page, count,total};
        this.$store.dispatch("actionsCustomerEntityList", args)
      },
      getContactEntityList(){
        const viewId = "00000000-0000-0000-00AA-000010001003";
        const page = 1;
        const count = 50;
        const total = false
        let args = {viewId, page, count,total};
        this.$store.dispatch("actionsContactEntityList", args)
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
      this.getLayoutFormData();
      this.getLayoutViewData();
      this.getLayoutFormAndDetailData();
      this.getEntityListData();
      this.getEntityDetailData();
      this.getEntityViewAndListData();

      this.getCustomerEntityList();
      this.getContactEntityList();
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
