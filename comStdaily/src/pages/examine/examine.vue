<template>
  <div class="wrapper" id="wrapper">
    <header-title :title="title"></header-title>
    <child-search></child-search>
    <child-tabs :listData="listData"></child-tabs>
  </div>
</template>

<script>

    import axios from "axios";
    import headerTitle from "@/components/headerTitle";
    import childSearch from './components/search';
    import childTabs from './components/tabs'

    export default {
        name: "examine",
        data(){
            return{
                title: "审批",
                listData: {}
            }
        },
        components: {
            headerTitle: headerTitle,
            childSearch: childSearch,
            childTabs: childTabs
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

<style scoped lang="less">
  @import '~style/mainColor';

  .header{
      background-color: @mColor;
      color: @clfff;
      padding-top: 5px;
      text-align: center;
  }
</style>
