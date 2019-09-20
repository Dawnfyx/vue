<template>
  <div>

    <h2> 分页组件</h2>
    <pagination :currentPage.sync="currentPage" :limit.sync="limit" :totalCount="totalCount" :all="true" @turnPage="returnEvent"></pagination>
  </div>
</template>

<script>
  import Pagination from "@/components/global/Pagination";

    export default {
        name: "testPages",
        data(){
          return{
            currentPage: 1,//当前页码
            limit: 10,//每页显示条数
            totalCount: 100,//总页数
          }
        },
        components: {
          Pagination: Pagination,
        },
        watch:{
        },
        methods: {
          returnEvent(){
            debugger
          }
        }
    }
</script>

<style scoped>

</style>
