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
    import axios from "axios"
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
                listData: {}
            }
        },
        components:{
            headerTitle: headerTitle,
            childSearch: childSearch,
            childList: childList
        },
        methods: {
            getListData() {
                // axios.get('/api/auditData.json').then(this.getAuditDataInfoSucc)
                const api = 'Crmapp/EntityList?ent=new_salestest'
                axios({
                    method: "get",
                    baseURL:"/api",
                    url: api
                }).then(this.getListDataSucc)
                    .catch(error=>{
                        console.log("Error", error.message);
                    })
            },
            getListDataSucc(res) {
                const data = res.data;
                if (data.data) {
                    this.listData = data.data;
                }
            },
        },
        mounted() {
            this.getListData();
        }
    }
</script>

<style scoped>

</style>
