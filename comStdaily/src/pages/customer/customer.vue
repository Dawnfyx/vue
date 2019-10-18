<template>
  <div>
    <header-title :title=title></header-title>
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
                title: "客户管理",
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
