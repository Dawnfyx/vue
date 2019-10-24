<template>
 <div class="wrapper">
   <b-form @submit="onSubmit" @reset="onReset">
     <div v-for="(item, key) of formData">
       <form-title :formData="formData[key]"></form-title>
       <form-item :formData="formData[key]"></form-item>
     </div>
     <b-button type="submit" variant="primary">审批</b-button>
     <b-button type="reset" variant="danger">重置</b-button>
   </b-form>
 </div>
</template>

<script>
  import axios from 'axios'
  import formTitle from './components/DetailFormTitle'
  import formItem from './components/DetailFormItem'

  export default {
    name: "TestForm",
    data() {
      return{
        apiData: "new_salestest",
        formData: {}
      }
    },
    components: {
      formTitle: formTitle,
      formItem: formItem
    },
    methods: {
      getFormlocalStorageData(){
          this.formData = JSON.parse(localStorage.LayoutForm).data.tabs;
      },
      onSubmit(evt) {
        evt.preventDefault()
        alert("提交数据")
        this.$router.back(-1)
      },
      onReset(evt) {
        evt.preventDefault()
      }
    },
    mounted() {
      this.getFormlocalStorageData();
    }
  }
</script>

<style scoped>
  .wrapper{
    /*border: 1px solid red;*/
  }
</style>
