<template>
  <div>
    <header-title
      :title="title.title"
      :headerLeft="title.headerLeft"
      :headerRight="title.headerRight"></header-title>
    <child-search></child-search>
    <child-list :listData="listData"></child-list>
  </div>
</template>

<script>

    import headerTitle from "../../components/headerTitle";
    import childSearch from './components/search';
    import childList from './components/list'

    export default {
        name: "customer",
        data(){
            return {
                title: {
                    title: "客户管理",
                    headerLeft: true,
                    headerRight: true
                },
                listData: []
            }
        },
        components:{
            headerTitle: headerTitle,
            childSearch: childSearch,
            childList: childList
        },
        methods: {

        },
        beforeMount(){
            this.$store.dispatch('actionsCustomer');
        },
        mounted() {
            this.listData = this.$store.state.stateCustomerList.customer;
        }
    }
</script>

<style scoped>

</style>
