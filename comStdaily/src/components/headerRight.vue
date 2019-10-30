<template>
  <div @click="handleSidebar"> <i class="fa fa-ellipsis-h"></i></div>
</template>

<script>
    export default {
        name: "operationButton",
        methods:{
            handleSidebar(){
                this.$emit("toggle")
            }
        }
    }
</script>

<style scoped>

</style>
