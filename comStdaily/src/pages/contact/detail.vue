<template>
 <div>
   <loading :loadingShow="loadingShow"></loading>
   <header-title
     :title="title.title"
     :headerLeft="title.headerLeft"
     :headerRight="title.headerRight"></header-title>
   <div class="decorateBg">
   </div>
   <b-form @submit="onSubmit" @reset="onReset">
     <detail-content></detail-content>
   </b-form>
 </div>
</template>

<script>

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
                loadingShow: true,
            }
        },
        components:{
            loading: loading,
            headerTitle: headerTitle,
            detailContent: detailContent
        },
        methods:{
            onSubmit(){
                console.log("onSubmit")
            },
            onReset(){
                console.log("onReset")
            }
        },
        mounted() {
            this.loadingShow = false;
        }
    }
</script>

<style scoped>

</style>
