<template>
  <div class="wrapper" id="wrapper">
    <loading :loadingShow="loadingShow"></loading>
    <header-title :title="title"></header-title>
    <section-item :IconListData="IconListData"></section-item>
    <footer-link :IconListData="IconListData"></footer-link>
  </div>
</template>

<script>
    import axios from 'axios'
    import {mapState, mapMutations, mapActions} from "vuex";
    import loading from "@/components/loading";
    import headerTitle from "@/components/headerTitle";
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
                loadingShow: true
            }
        },
        computed: {
            // 映射 this.EntityList 为 store.state.EntityList
            // 映射 this.LayoutForm 为 store.state.LayoutForm
            ...mapState([
                'stateEntityList',
                'stateLayoutForm'
            ]),
            // 映射 this.setInfo 为 this.$store.commit('setInfo')
            ...mapMutations([
                'mutationsEntityList',
                'mutationsEntityList2',
                'mutationsLayoutForm',
                'mutationsLayoutForm2'
            ]),
            // 映射 this.getInfo 为 this.$store.dispatch('getInfo')
            ...mapActions([
                'actionsEntityList',
                'actionsLayoutForm'
            ]),
            EntityListData: {
                get(){
                    if(localStorage.vuex){
                        return JSON.parse(localStorage.vuex).stateEntityList.data;
                    }
                }
            },
            LayoutFormData: {
                get(){
                    if(localStorage.vuex){
                        return JSON.parse(localStorage.vuex).stateLayoutForm.data;
                    }
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
            localStorageItemAddTime(itemname, item, time){
                localStorage.setItem(itemname, JSON.stringify({data: item, time: time}));
            }
        },
        watch: {
            EntityListData:{
                get(){
                    let curTime = new Date().getTime();
                    this.localStorageItemAddTime("EntityListData",JSON.parse(localStorage.vuex).stateEntityList.data, curTime);
                    this.localStorageetInervalRemove("EntityListData");
                }
            },
            LayoutFormData:{
                get(){
                    let curTime = new Date().getTime();
                    this.localStorageItemAddTime("LayoutFormData",JSON.parse(localStorage.vuex).stateLayoutForm.data, curTime);
                    this.localStorageetInervalRemove("LayoutFormData");
                }
            }
        },
        beforeMount() {
        },
        mounted() {
            // this.actionsEntityList;
            // this.actionsLayoutForm;
            this.mutationsEntityList2;
            this.mutationsLayoutForm2;
            this.loadingShow = false;
        }
    }
</script>

<style lang="less">

  @import '~style/mainColor';

  .wrapper {
    background-color: @clfff;
  }


</style>
