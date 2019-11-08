<template>
 <div>
   <loading :loadingShow="loadingShow"></loading>
   <header-title
     :title="title.title"
     :headerLeft="title.headerLeft"
     :headerRight="title.headerRight"></header-title>
   <div class="decorateBg">
   </div>
   <p>联系人</p>
 </div>
</template>

<script>

    import loading from "@/components/loading";
    import headerTitle from "@/components/headerTitle";

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
            headerTitle: headerTitle
        },
        mounted() {
            this.loadingShow = false;
        }
    }
</script>

<style scoped>

</style>
