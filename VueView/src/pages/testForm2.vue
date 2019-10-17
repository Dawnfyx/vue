<template>
  <form-case :formData="formData"></form-case>
</template>

<script>

    import FormCase from '@/components/global/form/Formcase';

    export default {
        name: "testForm",
        data()  {
            return{
                formData: ""
            }
        },
        components: {
           FormCase: FormCase
        },
        methods: {
            getFormDataInfo(){
              this.$axios.get('http://localhost:8080/api/formData.json').then(this.getFormDataInfoSucc);
            },
            getFormDataInfoSucc(res){
                res = res.data;
                if(res){
                    const data = res;
                    this.formData = data;
                }
            }
        },
        mounted(){
           this.getFormDataInfo();
        }
    }
</script>

<style scoped>

</style>
