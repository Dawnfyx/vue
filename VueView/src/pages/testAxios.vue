<template>
    <div>

    </div>
</template>

<script>

    export default {
        name: "testAxios",
        methods: {
          testAxiosGet(){
            this.fyxaxios.get('http://localhost:8080/api/tableInfo.json').then(this.handleGetInfoSucc)
            //axios.get('/api/tableInfo.json').then(this.handleGetInfoSucc)
          },
          handleGetInfoSucc(res){
            debugger
          }
        },
        mounted (){
          this.testAxiosGet()
        }
    }
</script>

<style scoped>

</style>
