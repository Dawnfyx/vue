<template>
 <div>
   <h2>loading组件</h2>
   <ewp-loading :loadBox="loadBox" :loadError="loadError" :data="tableList" @refresh="returnEvent">
     <ul slot="data">
       <li v-for="item in tableList">{{item.name}}</li>
     </ul>
   </ewp-loading>
 </div>
</template>

<script>

  import ewpLoading from "@/components/global/Loading";

    export default {
        name: "testLoading",
        data(){
            return{
              loadBox: true,
              loadError: true,
              tableList: [
                {
                  "name": "sssss",
                  "info": "aaaaa"
                },
                {
                  "name": "wwwww",
                  "info": "eeeee"
                },
                {
                  "name": "rrrrr",
                  "info": "ttttt"
                }
              ],
            }
        },
        components: {
          ewpLoading: ewpLoading
        },
        watch:{
            returnVal(newVal, oldVal){
              console.log("returnVal=====", newVal, oldVal);
            }
        },
      methods: {
        returnEvent (){
          //此处更新
          debugger
        }
      }
    }
</script>

<style scoped>

</style>
