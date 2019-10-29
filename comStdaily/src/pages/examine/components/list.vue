<template>
  <div>
    <input-search @searchValue="handleSearchChange"></input-search>
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

    import inputSearch from "@/components/inputSearch";
    export default {
        name: "list",
        data(){
            return{
                searchValue: "",
                labelHaveReadObj: {},
                labelHaveReadData: []
            }
        },
        props:{
            listData: Array
        },
        components:{
            inputSearch: inputSearch
        },
        computed:{
            parentsearchValue: {
                get(){
                    return this.searchValue;
                }
            },
            viewListData:{
                get(){
                    var searchVal = this.searchValue;
                    if(this.$store.state.stateExamineList.length > 0){
                        return this.$store.state.stateExamineList.filter((item)=>{
                            return item.id.indexOf(this.searchValue) > -1
                        })
                    } else {
                        // return JSON.parse(localStorage.vuex).stateEntityList.data.filter((item)=>{
                        //     // console.log(item.id, this.searchValue);
                        //     return item.id.indexOf(this.searchValue) > -1
                        // });
                        return  this.listData;
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
                   return  "";
               }
            },
            //事件以后数据分两个记录mutationsExamineListData 和 mutationsExamineListHaveReadData
            handleLabelHaveReadData(item, key){
                this.labelHaveReadObj = item;
                localStorage.ExamineList = JSON.stringify(this.labelHaveReadObj);
                this.$store.commit("mutationsExamineListHaveRead", this.labelHaveReadObj);
                // debugger
                console.log("before", this.viewListData)
                this.viewListData.splice(key, 1);
                console.log("aftre", this.viewListData)
                localStorage.ExamineListHaveRead = JSON.stringify(this.viewListData);
                this.$store.commit("mutationsExamineList", this.viewListData);
            },
            handleSearchChange(value){
                this.searchValue = value;
            },
            initUrlDetail(idStr){//截取8位字段
                return idStr.substring(0, 8);
            }
        },
        watch: {
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
