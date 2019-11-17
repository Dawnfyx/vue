<template>
   <div>
     <loading :loadingShow="loadingShow"></loading>
     <header-title
       :title="title.title"
       :headerLeft="title.headerLeft"
       :headerRight="title.headerRight"></header-title>
     <div class="decorateBg">
     </div>
     <div v-for="(item, key) of detailLayout.Fields" :key="key">
       {{item}}
       <form-item :detailLayout="item" :detailData="detailData"></form-item>
     </div>
   </div>
</template>

<script>

    import {mapActions, mapMutations, mapState, mapGetters} from "vuex";
    import loading from "@/components/loading";
    import headerTitle from "@/components/headerTitle";
    import detailContact from "./components/detailContent";
    import formItem from "./components/FormItem";

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
                detailAllData: {},
                contact: {},
            }
        },
        components:{
            loading: loading,
            headerTitle: headerTitle,
            detailContact: detailContact,
            formItem: formItem
        },
        computed:{
            ...mapGetters([
                "gContactLayoutFormAndDetail"
            ]),
            detailLayout: {
                get(){
                    return this.detailAllData.layout;
                },
                set(){

                }
            },
            detailData: {
                get(){
                    return this.detailAllData.data;
                },
                set(){

                }
            }
        },
        methods:{
            //拿到联系人详情数据
            getDetailInfo() {
                const id = this.$route.params.id;
                this.$store.dispatch("aContactLayoutFormAndDetail", id);
                this.detailAllData = this.$store.state.sContactLayoutFormAndDetail;
            },
            onSubmit(){
                console.log("onSubmit")
            },
            onReset(){
                console.log("onReset")
            }
        },
        watch:{
            gContactLayoutFormAndDetail: function(newVal) {
                this.detailAllData = this.$store.state.sContactLayoutFormAndDetail;
                this.loadingShow = false;
            }
        },
        created(){
            this.getDetailInfo();
        },
        beforeMount(){
        },
        mounted() {
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
