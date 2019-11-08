<template>
  <div id="detailContent">
      <b-form-group
        label="提交人"
        label-for="examineFrom">
        <span id="examineFrom">{{detailData}}</span>
      </b-form-group>
<!--      <b-button type="submit" variant="primary">Submit</b-button>-->
<!--      <b-button type="reset" variant="danger">Reset</b-button>-->
  </div>
</template>

<script>
    export default {
        name: "detailContent",
        data(){
            return{
                detailData: ""
            }
        },
        methods: {

        },
        beforeMount() {

        },
        Mount(){

        }
    }
</script>

<style scoped>

</style>
