<template>
  <div>
    <b-tabs content-class="mt-3">
      <b-tab title="未审批" active>
        <child-search @change="handleSearchChange"></child-search>
        <child-list
          :listData="listData"
          :searchValue="searchValue"
          @labelHaveRead="handleLabelHaveRead"
          v-if="!searchValue"></child-list>
      </b-tab>
      <b-tab title="已审批">
        <child-search @change="handleSearchChange"></child-search>
        <child-list-have-read
          :labelHaveReadData="labelHaveReadData">
        </child-list-have-read>
      </b-tab>
      <!--<b-tab title="代理"><p>I'm a disabled tab!</p></b-tab>-->
    </b-tabs>
  </div>
</template>

<script>

    import childSearch from './search';
    import childList from '../components/list'; //这条路径有毒调了一个小时
    import childListHaveRead from '../components/listHaveRead'

    export default {
        name: "tabs",
        data(){
            return{
                searchValue: "",
                labelHaveReadData: []
            }
        },
        props: {
            listData: Object
        },
        components:{
            childSearch: childSearch,
            childList: childList,
            childListHaveRead: childListHaveRead
        },
        methods:{
          handleSearchChange(searchValue) {
              this.searchValue = searchValue;
          },
          handleLabelHaveRead(obj){
            this.labelHaveReadData.push(obj);
          }
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
