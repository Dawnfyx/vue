<template>
  <!--tabs-->
  <b-tabs content-class="mt-3" id="examineTabs">
    <b-tab active>
      <template v-slot:title>
        <i class="icon"></i>
        <span class="icon-text">我的审批</span>
      </template>
      <input-search @searchValue="handleSearchChange"></input-search>
      <child-list :listData="listData" :searchValue="searchValue"></child-list>
    </b-tab>
    <b-tab>
      <template v-slot:title>
        <i class="icon"></i>
        <span class="icon-text">已审批</span>
      </template>
      <input-search @searchValue="handleSearchChangeHaveRead"></input-search>
      <child-list-have-read :searchValueHaveRead="searchValueHaveRead">
      </child-list-have-read>
    </b-tab>
    <!--<b-tab title="代理"><p>I'm a disabled tab!</p></b-tab>-->
  </b-tabs>
</template>

<script>

    import inputSearch from "@/components/inputSearch";
    import childList from './listAll'; //这条路径有毒调了一个小时
    import childListHaveRead from '../components/listHaveRead'

    export default {
        name: "tabs",
        data(){
            return{
                searchValue: "",
                searchValueHaveRead: ""
            }
        },
        props: {
            listData: Array
        },
        components:{
            inputSearch: inputSearch,
            childList: childList,
            childListHaveRead: childListHaveRead
        },
        methods:{
          handleSearchChange(searchValue){
              this.searchValue = searchValue;
          },
          handleSearchChangeHaveRead(searchValue){
              this.searchValueHaveRead = searchValue;
          }
        }
    }
</script>

<style lang="less">

  @import '~style/mainColor';

  #examineTabs{
    margin-top: -7rem;
    margin-left: 1.2rem;
    margin-right: 1.2rem;

    & > div:first-child{
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
      background-color: @clfff;
      overflow: hidden;
    }

    .nav-tabs{
      border: 1px solid rgba(0,0,0,.125);
      border-bottom: 0;
      padding-top: 10px;
      padding-left: 10px;
      padding-right: 10px;
      /*justify-content: center;*/

      .nav-item{
        width: 50%;
        margin-bottom: 0px;

        & + .nav-item{
          border-left: 1px solid @cleee;
        }
        &:first-child a{
          padding-right: 0px;
        }
        &:last-child a{
          padding-left: 0px;
        }
        a{
          border: none 0;
          text-align: center;
          color: @cl666;
          .icon{
            width: 2.6rem;
            height: 3rem;
            display: block;
            margin: 0px auto;
            background-color: @cleee;
          }
          .icon-text{
            font-size: 10px;
          }
        }

        .active{
          .icon-text{
            font-weight: 600;
          }
        }
      }
    }

    .tab-content{
      .tab-pane{
        margin-top: -1rem;

        .list-box{
          border-left: @borderVal;
          margin-left: 1rem;
          padding-top: 1rem;

          .dot{
            width: 8px;
            height: 8px;
            display: block;
            float: left;
            background-color: @mColor;
            border-radius: 5px;
            margin-left: -2.6rem;
          }
        }

        .list-group {
          padding-left: 1rem;

          .list-group-item {
            margin-bottom: 1rem;
            border-radius: 0.5rem;
            border: @borderVal;
          }
        }
      }
    }

    .search{
      background-color: @clfff;
      border: 1px solid rgba(0,0,0,.125);
      border-top: 0;
      border-bottom-left-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
      overflow: hidden;
      padding-top: 0.5rem;
      padding-left: 3rem;
      padding-right: 3rem;
      padding-bottom: 1rem;

      input{
        border-radius: 1rem;
        padding-left: 30px;
      }
    }
  }
</style>
