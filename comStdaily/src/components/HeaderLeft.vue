<template>
  <div @click="returnHome"> <i class="fa fa-angle-left"></i></div>
</template>

<script>
    export default {
        name: "HeaderLeft",
        methods:{
            returnHome(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>

</style>
