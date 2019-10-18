<template>
  <div>
    <b-tabs content-class="mt-3" v-if="!searchValue">
      <b-tab title="未审批" active>
        <child-list :listData="listData" :searchValue="searchValue"></child-list>
      </b-tab>
      <b-tab title="已审批"><p>I'm the second tab</p></b-tab>
      <b-tab title="代理"><p>I'm a disabled tab!</p></b-tab>
    </b-tabs>
  </div>
</template>

<script>
    import childList from '../components/list' //这里路径调到要吐血。。。我调了一个小时

    export default {
        name: "tabs",
        props: {
            listData: Object,
            searchValue: String
        },
        components:{
            childList: childList
        }
    }
</script>

<style lang="less">

  @import '~style/mainColor';

  .tabs{

    .nav-tabs{
      background-color: @cleee;
      padding-top: 10px;
      padding-bottom: 10px;
      justify-content: center;

      .nav-item{
        margin-bottom: 0px;

        a{
          border-color: #dee2e6;
          border-radius: 0px;
          padding: 2px 15px;

          &:first-child{

          }
          &:last-child{

          }
        }
      }
    }

    .tab-content{
      .tab-pane{
        margin-top: -1rem;
      }
    }
  }
</style>
