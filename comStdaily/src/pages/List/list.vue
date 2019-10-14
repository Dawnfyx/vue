<template>
<div>
  <b-list-group class="list">
    <b-list-group-item href="./#/detail" class="flex-column align-items-start"
      v-for="(item, key) of listData.data" :key="key"
    >
      <h5 class="mb-1">姓名：{{getDataValue('new_name', item.attributes)}}</h5>
      <small>时间：{{getDataTime('new_testtime', item.attributes)}}</small>
      <small>Id:{{item.id}}</small>
    </b-list-group-item>
  </b-list-group>
</div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "list",
        data(){
          return{
            listData: "",
            name: ""
          }
        },
        components:{
            name(){

            }
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
            },
            getDataTime(name, dataArray) {
              let text = "";
              for(let i=0; i<=dataArray.length; i++){
                if (dataArray[i].name == name) {
                  text = dataArray[i].value;
                  let reg = /^\/Date\((.*)\)\/$/;
                  let value = text.replace(reg, '$1');


                }
              }
            },
             getAuditDataInfo() {
                // axios.get('/api/auditData.json').then(this.getAuditDataInfoSucc)
                const api = 'Crmapp/EntityList?ent=new_salestest'
                axios({
                  method: "get",
                  baseURL:"/api",
                  url: api
                }).then(this.getAuditDataInfoSucc)
                  .catch(error=>{
                    console.log("Error", error.message);
                  })
            },
            getAuditDataInfoSucc(res) {
                const data = res.data;
                if (data.data) {
                  this.listData = data.data;
                }
            }
        },
        mounted(){
           this.getAuditDataInfo()
        }
    }
</script>

<style scoped>
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
