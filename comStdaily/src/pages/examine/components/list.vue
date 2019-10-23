<template>
  <div>
<!--    <p>ssss</p>-->
    <b-list-group class="list">
<!--      :href="'./#/ExamineDetail/'+item.id"-->
      <b-list-group-item
        class="flex-column align-items-start"

        v-for="(item, key) of viewListData.data" :key="key"
        @click="handleLabelHaveRead(key)"
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
        data(){
            return{
                labelHaveReadObj: [],
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
                    if(sessionStorage.listData){
                        return JSON.parse(sessionStorage.listData);
                    } else {
                        return this.listData
                    }
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
            },
            handleLabelHaveRead(key){
                this.labelHaveReadObj = this.listData.data[key];
                this.labelHaveReadData.push(this.labelHaveReadObj);
                this.$emit("labelHaveRead", this.labelHaveReadObj);
                if(this.labelHaveReadData != null){
                    sessionStorage.setItem('listHaveReadData', JSON.stringify(this.labelHaveReadData));
                }
                this.listData.data.splice(key, 1);
                if(this.listData != null){
                    sessionStorage.setItem('listData', JSON.stringify(this.listData));
                }
            },
            initUrlDetail(idStr){//截取8位字段
                return idStr.substring(0, 8);
            }
        },
        watch: {
            searchValue(){
                console.log("examine-list", this.searchValue);
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
