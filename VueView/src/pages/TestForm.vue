<template>
 <div class="wrapper">
   <div v-for="(item, key) of formData">
     <form-title :formData="formData[key]"></form-title>
     <form-item :formData="formData[key]"></form-item>
   </div>
 </div>
</template>

<script>
  import formTitle from '@/components/global/form/FormTitle'
  import formItem from '@/components/global/form/FormItem'

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
        this.$axios.get('http://10.20.100.158/Crmapp/LayoutForm?ent=' + this.apiData).then(this.getFormDataInfoSucc);
      },
      getFormDataInfoSucc(res) {
        debugger
        const data = res.data;
        if (data) {
          this.formData = data.tabs;
        }
      }
    },
    mounted() {
      this.getFormDataInfo();
    }
  }
</script>

<style scoped>
  .wrapper{
    border: 1px solid red;
  }
</style>
