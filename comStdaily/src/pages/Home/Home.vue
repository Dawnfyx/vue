<template>
  <div class="wrapper">
    <div class="title">
      CRM-APP
    </div>
    <b-tabs content-class="mt-3">
      <b-tab title="消息"><p>I'm the first tab</p></b-tab>
      <b-tab title="Home" active>

        <div class="section" v-for="item of testArray">
          <div class="title">
            {{IconListData.title}}
          </div>
          <icon-list :IconListData="IconListData"></icon-list>
        </div>

      </b-tab>
      <b-tab title="设置"><p>I'm a disabled tab!</p></b-tab>
    </b-tabs>
  </div>
</template>

<script>
  import axios from 'axios'
  import IconGrid from '@/pages/Home/components/IconGrid'
  import FooterLink from '@/pages/Home/components/FooterLink'
  import IconList from '@/pages/Home/components/IconList'

  export default {
    name: "Home",
    data() {
      return {
        HomeData: {},
        IconListData: {
            title: "应用链接",
            content: [
                {
                    "name": "审批",
                    "desc": "examine and approve",
                    "imgUrl": "http://fangyaxi.cn/comStdaily/static/img/icon-01-sp.jpg",
                    "url": "/examine"
                },
                {
                    "name": "客户管理",
                    "desc": "customer manage",
                    "imgUrl": "http://fangyaxi.cn/comStdaily/static/img/icon-03-khgl.jpg",
                    "url": "/examine"
                },
                {
                    "name": "联系人",
                    "desc": "contacts",
                    "imgUrl": "http://fangyaxi.cn/comStdaily/static/img/icon-04-lxr.jpg",
                    "url": "/contact"
                }
            ]
        },
          testArray: [
            {

            },{

            },{

            },{

            },{

              }
          ]
      }
    },
    components:{
      IconGrid: IconGrid,
      FooterLink: FooterLink,
      IconList: IconList
    }
  }
</script>

<style lang="less">

  .wrapper{
    background-color: #25a4bb;

    & > .title{
      padding-top: 1rem;
      text-align: center;
    }
  }

  .tabs{
    .nav-tabs{
      width: 100%;
      border-bottom: none;
      position: fixed;
      left: 0;
      bottom: 0;
      background-color: #25a4bb;

      .nav-item{
        width: 33.333%;

        a{
          text-align: center;
          border: none 0;
          border-radius: 0;
          color: #fff;

          &.active{
            color: #25a4bb;
          }
        }
      }
    }
    .tab-content{
      .tab-pane{

      }
    }
  }

  .section{
      width: 100%;

      .title{
        line-height: 20px;
        background: #eee;
        text-indent: 10px;
        padding: 6px;
      }

  }
</style>
