<template>
  <div>
    <div class="search">
      <b-form-input
        size="sm"
        placeholder="搜索"
        v-model="keyword"
      ></b-form-input>
    </div>
    <div class="search-content"
         ref="search"
         v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="(item, key) of viewListData"
          :key="key"
        >id:{{item.id}}</li>
        <li class="search-item border-bottom" v-show="hasListData">
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
        props:{
            listData: Array
        },
        computed:{
            viewListData:{
                get(){
                    if(this.$store.state.stateExamineListData.length > 0){
                        return this.$store.state.stateExamineListData;
                    } else{
                        return  JSON.parse(localStorage.vuex).stateEntityList.data;
                    }
                }
            },
            hasListData:{
                get(){
                    return !this.viewListData.length
                }
            }
        },
        methods: {
            handleKeyPress(){
                console.log("change", this.keyword);
                this.$emit("change", this.keyword);
            }
        },
        filters: {
            currency: function (value) {
                return value+ "=====";
            }
        },
        watch:{
            keyword(NewVal, oldVal){
                this.$emit("change", this.keyword);
               if(!!this.keyword){
                   const result = []
                   this.viewListData.forEach((value)=>{
                       if (value.id.indexOf(this.keyword) > -1) {
                           result.push(value);
                       }
                   })
               }
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
