<template>
  <div>
<!--    {{listData}}-->
    <b-list-group class="list">
      <b-list-group-item href="./#/detail" class="flex-column align-items-start"
                         v-for="(item, key) of listData.data" :key="key"
      >
        <h5 class="mb-1">姓名：{{getDataValue('new_name', item.attributes)}}</h5>
        <small>时间：{{getDataValue('new_testtime', item.attributes)}}</small>
        <small>Id:{{item.id}}</small>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>

    export default {
        name: "list",
        props:{
            listData: Object
        },
        methods:{
            getDataValue(name, dataArray){
                let text = "";
                for(let i=0; i<=dataArray.length; i++){
                    if(dataArray[i].name == name ){
                        let text = dataArray[i].value;
                        return text;
                    }
                }
                return  text;
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
