<template>
  <div>
    <b-list-group class="list">
      <b-list-group-item
        class="flex-column align-items-start"
        :href="'./#/ExamineDetail/'+item.id"
        v-for="(item, key) of listData.data" :key="key"
        @click="labelRead(key)"
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
        name: "list",
        props:{
            listData: Object,
            searchValue: String
        },
        computed:{
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
            },
            labelRead(key){
                let id = this.$refs.itemId[key].innerText;
                for(let i = 0;  i< this.listData.data.length; i++){
                    if(this.listData.data[i].id === id){
                        this.listData.data[i].read = true;
                        this.$store.commit("setEntityListInfo",  this.listData)
                    }
                }
            },
            initUrlDetail(idStr){//截取8位字段
                return idStr.substring(0,8);
            }
        },
        watch: {
            searchValue(){
                console.log("examine-list", this.searchValue);
            }
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
