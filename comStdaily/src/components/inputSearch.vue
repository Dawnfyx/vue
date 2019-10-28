<template>
  <div class="search">
    <b-form-input
      size="sm"
      placeholder="搜索"
      v-model="keyword"
    ></b-form-input>
  </div>
</template>

<script>
    export default {
        name: "inputSearch",
        data(){
            return{
                keyword: ""
            }
        },
        watch:{
            keyword(NewVal, oldVal){
                this.$emit("searchValue", this.keyword);
                // if(!!this.keyword){
                //     const result = [];
                //     this.viewListData.forEach((value)=>{
                //         if (value.id.indexOf(this.keyword) > -1) {
                //             result.push(value);
                //         }
                //     })
                // }
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
</style>
