<template>
    <div>
      <h3>test</h3>
      <div>{{apiData}}</div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "test",
        data(){
          return{
              apiData: ""
          }
        },
        methods: {
          getIndexInfo() {
            axios({
              method: "get",
              baseURL:"/api",
              url:"Crmapp/LayoutForm?ent=new_salestest"
            }).then(this.getIndexInfoSucc)
              .catch(error=>{
                console.log("Error", error.message);
              })
          },
          getIndexInfoSucc(res) {
            if(res.data){
              const data = res.data;
              this.apiData = data.data;
            }
          }
        },
        mounted() {
          this.getIndexInfo()
        }
    }
</script>

<style scoped>

</style>
