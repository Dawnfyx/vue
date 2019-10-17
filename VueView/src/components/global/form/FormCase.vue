<template>
  <div>
    <div v-show="false">
      {{formData}}
    </div>
    <b-container fluid class="pages">
        <h2>Test Test Test</h2>

    </b-container>
  </div>
</template>

<script>
    export default {
        name: "FormCase",
        props:{
          formData: Object
        }
    }
</script>

<style scoped>
  .pages{
    background-color: #fff;
  }
</style>
