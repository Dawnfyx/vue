<template>
    <div>
      <loading :loadingShow="loadingShow"></loading>
      <header-title
        :title="title.title"
        :headerLeft="title.headerLeft"
        :headerRight="title.headerRight"></header-title>
      <div class="decorateBg">
      </div>
      <div v-for="(item, key) of detailLayout.tabs" :key="key">
        <form-title :detailData="item.name"></form-title>
        <form-item :detailLayout="item.fields" :detailData="detailData"></form-item>
      </div>
    </div>
</template>

<script>

    import {mapActions, mapMutations, mapState, mapGetters} from "vuex";
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
              detailAllData: {},
              customer: {}
            }
        },
        components:{
          loading: loading,
          headerTitle: headerTitle,
          FormTitle: FormTitle,
          FormItem: FormItem
        },
        computed:{
            ...mapGetters([
                "gCustomerLayoutFormAndDetail"
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
          //拿到客户详情数据
            getDetailInfo() {
              const id = this.$route.params.id;
              this.$store.dispatch("aCustomerLayoutFormAndDetail", id);
              this.detailAllData = this.$store.state.sCustomerLayoutFormAndDetail;
          },
        },
        watch: {
            gCustomerLayoutFormAndDetail: function(newVal) {
                this.detailAllData = this.$store.state.sCustomerLayoutFormAndDetail;
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
  .title{

  }
  .content{
    margin: 1.2rem;
  }
</style>
