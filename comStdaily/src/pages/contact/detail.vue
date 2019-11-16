<template>
 <div>
   <loading :loadingShow="loadingShow"></loading>
   <header-title
     :title="title.title"
     :headerLeft="title.headerLeft"
     :headerRight="title.headerRight"></header-title>
   <div class="decorateBg">
   </div>
   <div id="detailContent" class="detailContent">
     {{contact.tabs}}
     <!--<b-form @submit="onSubmit" @reset="onReset">-->
        <!--<detail-content :contact="contact"></detail-content>-->
     <!--</b-form>-->
   </div>
 </div>
</template>

<script>

    import axios from "axios";
    import loading from "@/components/loading";
    import headerTitle from "@/components/headerTitle";
    import detailContent from "./components/detailContent";

    export default {
        name: "detail",
        data(){
            return{
                title: {
                    title: "联系人详情",
                    headerLeft: true,
                    headerRight: true
                },
                contact: {},
                loadingShow: true,
            }
        },
        components:{
            loading: loading,
            headerTitle: headerTitle,
            detailContent: detailContent
        },
        methods:{
            getDetailInfo(){
                const id = this.$route.params.id;
                const  api = "contact/detail/" + id;
                axios({
                    method: "get",
                    baseURL: "/api",
                    url: api
                }).then((res)=>{
                    this.contact = res.data.data.contact[0];
                }).catch((error)=>{
                    console.log("Error", error.messages);
                })
            },
            onSubmit(){
                console.log("onSubmit")
            },
            onReset(){
                console.log("onReset")
            },
            getLayoutFormDetail(){
              this.contact = this.$store.state.stateContactLayoutForm;
              console.log(this.contact.tabs);
            }
        },
        beforeMount(){
            this.getLayoutFormDetail();
        },
        mounted() {
            this.loadingShow = false;
        }
    }
</script>

<style scoped lang="less">

  @import '~style/mainColor';

  .detailContent{
    background-color: @cleee;
    padding: 1.2rem;

    form {
      border: @borderVal;
      border-radius: 0.5rem;
      background-color: @clfff;
    }
  }
</style>
