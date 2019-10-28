<template>
  <div>
<!--    {{viewListData}}-->
    <b-list-group class="list">
      <b-list-group-item
        class="flex-column align-items-start"
        :href="'./#/ExamineDetail/'+item.id"
        v-for="(item, key) of viewListData" :key="key"
      >
        <h5 class="mb-1">姓名：{{viewDataValue('new_name', item.attributes)}}</h5>
        <small>时间：{{viewDataValue('new_testtime', item.attributes)}}</small>
        <small>Id: <span ref="itemId">{{item.id}}</span></small>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>

    export default {
        name: "listRead",
        computed:{
            viewListData:{
                get(){
                    if(this.$store.state.stateExamineListHaveRead.length > 0){
                         return this.$store.state.stateExamineListHaveRead
                    } else{
                        return  JSON.parse(localStorage.vuex).stateEntityList.data;
                    }
                },
                set(val){
                   console.log("computed", val);
                }
            }
        },
        methods:{
            viewDataValue(name, dataArray){
                let text = "";
                for(let i=0; i<=dataArray.length; i++){
                    if(dataArray[i].name == name ){
                        let text = dataArray[i].value;
                        return text;
                    }
                }
                return  text;
            }
        },
        watch: {
            viewListData(){
                console.log("这里是 viewListData watch");
            }
        },
        mounted(){
        }
    }
</script>

<style scoped lang="less">

  @import '~style/mainColor';


  .list-group{
    a{
      border: none;

      & + a{
        border-top: 1px solid @cleee;
      }
    }
  }
  .list .info{
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
  }
  .list .list-group-item small{
    width: 100%;
    float: left;
  }
  .list .mb-1{
    font-size: 16px;
  }
</style>
