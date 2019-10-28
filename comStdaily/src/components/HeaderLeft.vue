<template>
  <div @click="returnHome">< 返回</div>
</template>

<script>
    export default {
        name: "HeaderLeft",
        methods:{
            returnHome(){
                this.$router.push("/");
            }
        }
    }
</script>

<style scoped>

</style>
