<template>
  <div class="wrapper">
    <loading :loadingShow="loadingShow"></loading>
    <header-title :title="title.title" :headerLeft="title.headerLeft"></header-title>
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
    import loading from "@/components/loading";
    import headerTitle from "@/components/headerTitle";
    import formTitle from '@/pages/examineDetail/components/FormTitle'
    import formItem from '@/pages/examineDetail/components/FormItem'

    export default {
        name: "TestForm",
        data() {
            return {
                title: {
                    title: "审批详情",
                    headerLeft: true
                },
                loadingShow: true,
                apiData: "new_salestest",
                formData: {}
            }
        },
        components: {
            loading: loading,
            headerTitle: headerTitle,
            formTitle: formTitle,
            formItem: formItem
        },
        methods: {
            getFormlocalStorageData() {
                this.formData = JSON.parse(localStorage.vuex).stateLayoutForm.tabs;
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
            this.loadingShow = false;
            this.getFormlocalStorageData();
        }
    }
</script>

<style scoped>
  .wrapper {
    /*border: 1px solid red;*/
  }



</style>
