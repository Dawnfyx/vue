<template>
  <div>
    <div class="search">
      <b-form-input
        size="sm"
        placeholder="search"
        v-model="keyword"
        @change="handleKeyPress"></b-form-input>
    </div>
    <div class="search-content"
         ref="search"
         v-show="keyword">
      <ul>
<!--        <li-->
<!--          class="search-item border-bottom"-->
<!--          v-for="item of list"-->
<!--          :key="item.id"-->
<!--          @click="handleCityClick(item.name)"-->
<!--        >{{item.name}}</li>-->
        <li class="search-item border-bottom">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "search",
        data(){
            return{
                keyword: ""
            }
        },
        methods: {
            handleKeyPress(){
                console.log("change", this.keyword);
                this.$emit("change", this.keyword);
            }
        }
    }
</script>

<style scoped lang="less">

  @import '~style/mainColor';

  .search{
    background-color: @mColorL;
    padding: 10px;
  }
  .search-content{
    ul{
      padding-left: 0px;

      li{
        padding: 5px 10px;
      }
    }
  }

</style>
