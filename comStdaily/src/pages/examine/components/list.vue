<template>
  <div>
<!--    <p>ssss</p>-->
    <b-list-group class="list">
<!--      :href="'./#/ExamineDetail/'+item.id"-->
      <b-list-group-item
        class="flex-column align-items-start"

        v-for="(item, key) of viewListData" :key="key"
        @click="handleLabelHaveReadData(item, key)"
      >
        <h5 class="mb-1">姓名：{{viewValue('new_name', item.attributes)}}</h5>
        <small>时间：{{viewValue('new_testtime', item.attributes)}}</small>
        <small>Id: <span ref="itemId">{{item.id}}</span></small>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
    export default {
        name: "list",
        data(){
            return{
                labelHaveReadObj: {},
                labelHaveReadData: []
            }
        },
        props:{
            listData: Object,
            searchValue: String
        },
        computed:{
            viewListData:{
                get(){
                    console.log("list-localStorage-EntityListData", localStorage.EntityListData);
                    if(localStorage.EntityListData){
                        return JSON.parse(localStorage.EntityListData).data.data;
                    } else {
                        return this.listData
                    }
                }
            }
        },
        methods:{
            viewValue(name, dataArray){
                let text = "";
                for(let i=0; i<=dataArray.length; i++){
                    if(dataArray[i].name == name ){
                        let text = dataArray[i].value;
                        return text;
                    }
                }
                return  text;
            },
            //事件以后数据分两个记录mutationsExamineListData 和 mutationsExamineListHaveReadData
            handleLabelHaveReadData(item, key){
                debugger
                for(let i=0;i<=this.labelHaveReadData.length; i++){
                    console.log(this.labelHaveReadData[i].id + "=======" + item.id);
                    if(this.labelHaveReadData[i].id == item.id){
                        return;
                    }
                }
                this.labelHaveReadObj = item;
                this.labelHaveReadData.push(this.labelHaveReadObj);
                localStorage.ExamineListData = JSON.stringify(this.labelHaveReadData);
                this.viewListData.splice(key, 1);
                localStorage.ExamineListHaveReadData = JSON.stringify(this.viewListData);
            },
            initUrlDetail(idStr){//截取8位字段
                return idStr.substring(0, 8);
            }
        },
        watch: {
            viewListData(){
                console.log("这里是watch");
                debugger
            }
        },
        mounted() {

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
