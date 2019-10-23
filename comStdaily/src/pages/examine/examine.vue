<template>
  <div class="wrapper" id="wrapper">
    <loading :loadingShow="loadingShow"></loading>
    <header-title :title="title"></header-title>
    <child-tabs :listData="listData"></child-tabs>
  </div>
</template>

<script>

    import axios from "axios";
    import loading from "@/components/loading";
    import headerTitle from "@/components/headerTitle";
    import childTabs from './components/tabs';

    export default {
        name: "examine",
        data() {
            return {
                title: "审批",
                listData: {},
                loadingShow: true
            }
        },
        components: {
            loading: loading,
            headerTitle: headerTitle,
            childTabs: childTabs
        },
        methods: {
            getLocalStorageListData() {
                this.listData = JSON.parse(localStorage.EntityList).data;
            }
        },
        mounted() {
            this.getLocalStorageListData();
            this.loadingShow = false;
        }
    }
</script>

<style scoped lang="less">
  @import '~style/mainColor';

  .header {
    background-color: @mColor;
    color: @clfff;
    padding-top: 5px;
    text-align: center;
  }
</style>
