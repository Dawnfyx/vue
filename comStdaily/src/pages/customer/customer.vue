<template>
  <div>
    <header-title
      :title="title.title"
      :headerLeft="title.headerLeft"
      :headerRight="title.headerRight">
    </header-title>
    <child-search @searchValue="handleSearchValue"></child-search>
    <child-list :listData="listData"></child-list>
  </div>
</template>

<script>

    import headerTitle from "@/components/headerTitle";
    import childSearch from '@/components/inputSearch';
    import childList from './components/list';

    export default {
        name: "customer",
        data(){
            return {
                title: {
                    title: "客户管理",
                    headerLeft: true,
                    headerRight: true
                },
                listData: [],
                searchValue: ""
            }
        },
        components:{
            headerTitle: headerTitle,
            childSearch: childSearch,
            childList: childList
        },
        methods: {
            handleSearchValue(searchValue){
                this.searchValue = searchValue;
            },
            getEntityListData(){
                const viewId = "00000000-0000-0000-00AA-000010001001";
                const page = 1;
                const count = 50;
                const total = false
                let args = {viewId, page, count,total};
                this.$store.dispatch("actionsEntityListData", args)
            }
        },
        created(){

        },
        beforeMount(){
            // this.$store.dispatch('actionsCustomerEntityList');
        },
        mounted() {
            this.listData = this.$store.state.stateCustomerEntityList.Entities;
          // this.listData[0].Attributes[10].Value
          //   debugger
        }
    }
</script>

<style scoped lang="less">

  @import '~style/mainColor';

  .search{
    background-color: @mColorL;
    padding: 10px;
  }

</style>
