<template>
  <div>
<!--    <p>ssss</p>-->
    <b-list-group class="list">
<!--      :href="'./#/ExamineDetail/'+item.id"-->
      <b-list-group-item
        class="flex-column align-items-start"
        :href="'./#/ExamineDetail/'+item.id"
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
            listData: Array,
            searchValue: String
        },
        computed:{
            viewListData:{
                get(){
                    // if(localStorage.vuex){
                    //     localStorage.EntityListData = JSON.stringify(JSON.parse(localStorage.vuex).stateEntityList.data);
                    //     return JSON.parse(localStorage.vuex).stateEntityList.data;
                    // } else {
                    //     return this.listData
                    // }
                    // debugger
                    if(this.$store.state.stateExamineListData.length > 0){
                        return this.$store.state.stateExamineListData
                    }
                },
                set(){

                }
            }
        },
        methods:{
            viewValue(name, dataArray){
               if(dataArray != undefined){
                   let text = "";
                   for(let i=0; i<=dataArray.length; i++){
                       if(dataArray[i].name == name ){
                           let text = dataArray[i].value;
                           return text;
                       }
                   }
                   return  text;
               } else {
                   return  ""
               }
            },
            //事件以后数据分两个记录mutationsExamineListData 和 mutationsExamineListHaveReadData
            handleLabelHaveReadData(item, key){
                this.labelHaveReadObj = item;
                // if (this.labelHaveReadData.length > 0){
                //     let taggle = true;
                //     for(let i=0; i<= this.labelHaveReadData.length; i++){
                //         // debugger
                //         if(this.labelHaveReadData[i] == item){
                //             taggle = false
                //             console.log("taggle", taggle, this.labelHaveReadData[i], item);
                //             return
                //         }
                //     }
                //     if(taggle){
                //         this.labelHaveReadData.push(this.labelHaveReadObj);
                //     }
                //     // console.log(this.labelHaveReadData);
                // } else {
                //     this.labelHaveReadData.push(this.labelHaveReadObj);
                // }
                localStorage.ExamineListData = JSON.stringify(this.labelHaveReadObj);
                this.$store.commit("mutationsExamineListHaveReadData", this.labelHaveReadObj);
                // debugger
                this.viewListData.splice(key, 1);
                localStorage.ExamineListHaveReadData = JSON.stringify(this.viewListData);
                this.$store.commit("mutationsExamineListData", this.viewListData);
            },
            initUrlDetail(idStr){//截取8位字段
                return idStr.substring(0, 8);
            }
        },
        watch: {
            viewListData(){
                console.log("这里是watch");
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
