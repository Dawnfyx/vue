<template>
  <div class="wrapper" id="wrapper">
    <header-title :title="title"></header-title>
    <section-item :IconListData="IconListData"></section-item>
    <footer-link :IconListData="IconListData"></footer-link>
  </div>
</template>

<script>
  import axios from 'axios'
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
        }
      }
    },
    components:{
      headerTitle: headerTitle,
      sectionItem: sectionItem,
      footerLink: footerLink
    }
  }
</script>

<style lang="less">

  @import '~style/mainColor';

  .wrapper{
    background-color: @clfff;
  }


</style>
