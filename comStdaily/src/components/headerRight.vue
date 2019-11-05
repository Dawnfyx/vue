<template>
  <div @click="handleModal()"> <i class="fa fa-ellipsis-h"></i></div>
</template>

<script>
    export default {
        name: "operationButton",
        methods:{
            handleModal(){
                this.$emit("toggle");
            }
        }
    }
</script>

<style scoped>

</style>
