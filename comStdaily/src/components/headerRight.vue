<template>
    <b-button @click.prevent="handleSidebar">AAA</b-button>
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
  * { touch-action: none; }
  .btn {
    background: transparent;
    border-color: transparent;
    padding: 3px;
    float: right;
  }
</style>
