<template>
    <div>
      <loading :loadingShow="loadingShow"></loading>
      <header-title
        :title="title.title"
        :headerLeft="title.headerLeft"
        :headerRight="title.headerRight"></header-title>
      <div v-for="(item, key) of customer.tabs" :key="key">
        <form-title :customer="item.name"></form-title>
        <form-item :customer="item.fields"></form-item>
      </div>
    </div>
</template>

<script>

    import axios from "axios";
    import loading from "@/components/loading";
    import headerTitle from "@/components/headerTitle";
    import FormTitle from "./components/FormTitle";
    import FormItem from "./components/FormItem";

    export default {
        name: "detail",
        data(){
            return{
              title: {
                title: "客户详情",
                headerLeft: true,
                headerRight: true
              },
              loadingShow: true,
              customer: {}
            }
        },
        components:{
          loading: loading,
          headerTitle: headerTitle,
          FormTitle: FormTitle,
          FormItem: FormItem
        },
        methods:{
          getDetailInfo(){
            const id = this.$route.params.id;
            const api = "LayoutFormAndDetail";
            const args = this.$store.state.apiData.customer;
            axios({
              method: "get",
              baseURL: "/api",
              url: api,
              params: {
                entName: args.entName,
                formId: args.formId,
                id: id,
              }
            }).then((response) => {
              debugger
            }).catch((error) => {
              console.log("axios catch Error", error.messages);
            })
          },
        },
        beforeMount(){
          this.getDetailInfo();
        },
        mounted() {
          this.loadingShow = false;
        }
    }
</script>

<style scoped>

</style>
