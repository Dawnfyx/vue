<template>
  <div>
    <header-title
      :title="title.title"
      :headerLeft="title.headerLeft"
      :headerRight="title.headerRight"></header-title>
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
            }
        },
        beforeMount(){
            this.$store.dispatch('actionsCustomer');
        },
        mounted() {
            this.listData = this.$store.state.stateCustomerList.customer;
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
