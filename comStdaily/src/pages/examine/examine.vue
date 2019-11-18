<template>
  <div class="wrapper" id="wrapper">
    <loading :loadingShow="loadingShow"></loading>
    <header-title
      :title="title.title"
      :headerLeft="title.headerLeft"
      :headerRight="title.headerRight"></header-title>
    <div class="decorateBg" v-show="false">
    </div>
    <list :listLayout="listLayout" :listData="listData"></list>
  </div>
</template>

<script>

    import loading from "@/components/loading";
    import headerTitle from "@/components/headerTitle";
    import childTabs from './components/tabs';
    import list from "./components/list";

    export default {
        name: "examine",
        data() {
            return {
                title: {
                    title: "合同",
                    headerLeft: true
                },
                loadingShow: true,
                EntityViewAndList: {}
            }
        },
        components: {
            loading: loading,
            headerTitle: headerTitle,
            childTabs: childTabs,
            list: list
        },
        computed:{
            listLayout:{
                get(){
                    return this.EntityViewAndList.layout;
                },
                set(){

                }
            },
            listData:{
                get(){
                    return this.EntityViewAndList.data;
                },
                set(){

                }
            }
        },
        created(){
            this.EntityViewAndList = this.$store.state.sExamineEntityViewAndList;
            console.log(this.EntityViewAndList);
        },
        beforeMount(){
        },
        mounted() {
            this.loadingShow = false;
        }
    }
</script>

<style scoped lang="less">

  @import '~style/mainColor';

  .header {
    background-color: @mColor;
    color: @clfff;
    text-align: center;
  }

  .decorateBg {
    width: 100%;
    height: 8rem;
    background-color: @mColor;
    overflow: hidden;
  }
  .itemList{

  }

</style>
