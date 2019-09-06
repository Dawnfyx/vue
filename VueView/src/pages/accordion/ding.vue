<template>
  <div>
    <button @click="doDing">钉一下</button>
  </div>
</template>

<script>
    export default {
        name: "ding",
        methods: {
          doDing(){
            alert("sss");
          }
        }
    }
</script>

<style scoped>

</style>
