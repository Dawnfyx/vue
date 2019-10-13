<template>
  <div>
    <div class="item">
      <!--<router-link to="/TestForm">-->
        <!--跳转返回-->
      <!--</router-link>-->
      <span @click="$router.back(-1)">跳转返回</span>
    </div>
    <div class="search">
      <b-form-input class="search-input" v-model="keyword" type="text" placeholder="搜索"></b-form-input>
    </div>
    <h3>搜索 Value=={{keyword}}</h3>
  </div>

</template>

<script>
    export default {
        name: "testSearch",
        data(){
           return {
              keyword: ""
           }
        }
    }
</script>

<style scoped>
  .item{
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    font-size: 20px;
  }
  .search{
    height: 36px;
    padding: 2px 5px;
    background: red;
  }
  .search-input{
    box-sizing: border-box;
    width: 100%;
    height: 32px;
    padding: 2px 1px;
    line-height: 32px;
    text-align: center;
    border-radius: 6px;
    color: #666;
  }
</style>
