<template>
  <div class="wrapper" id="wrapper">
    <header-title :title="title"></header-title>
    <section-item :IconListData="IconListData"></section-item>
    <footer-link :IconListData="IconListData"></footer-link>
  </div>
</template>

<script>
  import axios from 'axios'
  import {mapState, mapMutations, mapActions} from "vuex"
  import headerTitle  from "@/components/headerTitle";
  import sectionItem from '@/pages/Home/components/sectionItem'
  import footerLink from '@/pages/Home/components/footerLink'

  export default {
    name: "Home",
    data() {
      return {
        title: "CRM-APP",
        IconListData: {
            title: "应用链接",
            content: [
                {
                    "name": "审批",
                    "desc": "examine and approve",
                    "imgUrl": "http://fangyaxi.cn/api/img/icon-01-sp.jpg",
                    "url": "/examine"
                },
                {
                    "name": "客户管理",
                    "desc": "customer manage",
                    "imgUrl": "http://fangyaxi.cn/api/img/icon-03-khgl.jpg",
                    "url": "/customer"
                },
                {
                    "name": "联系人",
                    "desc": "contacts",
                    "imgUrl": "http://fangyaxi.cn/api/img/icon-04-lxr.jpg",
                    "url": "/contact"
                }
            ],
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
            ]
        },
        axiosEntityList:{},
        axiosLayoutForm:{}
      }
    },
    computed: {
        // 映射 this.EntityList 为 store.state.EntityList
        // 映射 this.LayoutForm 为 store.state.LayoutForm
        ...mapState([
            'EntityList',
            'LayoutForm'
        ]),
        // 映射 this.setInfo 为 this.$store.commit('setInfo')
        ...mapMutations([
            'setEntityListInfo',
            'setLayoutFormInfo'
        ]),
        // 映射 this.getInfo 为 this.$store.dispatch('getInfo')
        ...mapActions([
            'getEntityListInfo',
            'getLayoutFormInfo'
        ])
    },
    components:{
      headerTitle: headerTitle,
      sectionItem: sectionItem,
      footerLink: footerLink
    },
    methods:{
        removelocalStorage(key){
            // 定时24小时清除缓存
            let curTime = new Date().getTime();
            let data = localStorage.getItem(key);
            let dataObj = JSON.parse(data);
            let exp = 12*60*60*1000;
            if(curTime - dataObj.time > exp){
                debugger
            }
        }
    },
    watch:{
        EntityList(){
            console.log("API-EntityList 数据拿到");
            this.axiosEntityList = JSON.stringify(this.EntityList.data.data);
            localStorage.EntityList = JSON.stringify(this.EntityList.data.data);
            let curTime = new Date().getTime();
            localStorage.setItem('EntityList', JSON.stringify({data: this.EntityList.data.data, time: curTime}))
            this.removelocalStorage('EntityList');
        },
        LayoutForm(){
            console.log("API-LayoutForm 数据拿到");
            this.axiosLayoutForm = JSON.stringify(this.LayoutForm.data.data);
            localStorage.LayoutForm = JSON.stringify(this.LayoutForm.data.data);
        }
    },
    beforeMount() {
      this.getEntityListInfo;
      this.getLayoutFormInfo;
    }
  }
</script>

<style lang="less">

  @import '~style/mainColor';

  .wrapper{
    background-color: @clfff;
  }


</style>
