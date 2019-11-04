<template>
  <div class="wrapper" id="wrapper">
    <loading :loadingShow="loadingShow"></loading>
    <header-title
      :title="title.title"
      :headerLeft="title.headerLeft"
      :headerRight="title.headerRight"></header-title>
    <div class="decorateBg">
    </div>
    <child-tabs :listData="listData"></child-tabs>
  </div>
</template>

<script>

    import loading from "@/components/loading";
    import headerTitle from "@/components/headerTitle";
    import childTabs from './components/tabs';

    export default {
        name: "examine",
        data() {
            return {
                title: {
                    title: "审批",
                    headerLeft: true,
                    headerRight: true
                },
                loadingShow: true
            }
        },
        components: {
            loading: loading,
            headerTitle: headerTitle,
            childTabs: childTabs
        },
        computed:{
            listData(){
                if(!!localStorage.vuex){
                    localStorage.EntityList = JSON.stringify(JSON.parse(localStorage.vuex).stateEntityList.data);
                    return JSON.parse(localStorage.vuex).stateEntityList.data;
                }
            }
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

</style>
