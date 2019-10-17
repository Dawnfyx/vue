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
  import formTitle from '@/pages/examineDetail/components/FormTitle'
  import formItem from '@/pages/examineDetail/components/FormItem'

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
      getFormDataInfo() {
        // this.$axios.get('http://localhost:8080/api/formData.json').then(this.getFormDataInfoSucc);
        axios.get('/api/formData.json').then(this.getFormDataInfoSucc)
      },
      getFormDataInfoSucc(res) {
        // debugger
        const data = res.data;
        if (data) {
          this.formData = data.tabs;
        }
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
      this.getFormDataInfo();
    }
  }
</script>

<style scoped>
  .wrapper{
    /*border: 1px solid red;*/
  }
</style>
