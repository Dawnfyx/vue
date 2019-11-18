<template>
  <div class="wrapper">
    <loading :loadingShow="loadingShow"></loading>
    <header-title
      :title="title.title"
      :headerLeft="title.headerLeft"
      :headerRight="title.headerRight"></header-title>
    <div class="decorateBg" v-show="false">
    </div>
    <!--<p>{{detailData.Attributes}}</p>-->
    <!--<div v-for="(items, key) of detailData.Attributes">-->
      <!---->
    <!--</div>-->
    <detail-content :detailLayout="detailLayout" :detailData="detailData"></detail-content>
  </div>
</template>

<script>

  import {mapActions, mapMutations, mapState, mapGetters} from "vuex";
  import loading from "@/components/loading";
  import headerTitle from "@/components/headerTitle";
  import detailContent from "./components/detailContent";

  export default {
    name: "detail",
    data() {
      return {
        title: {
          title: "审批详情",
          headerLeft: true,
          headerRight: true
        },
        loadingShow: true,
        detailAllData: {}
      }
    },
    computed: {
      ...mapGetters([
        "gExamineLayoutFormAndDetail"
      ]),
      detailLayout: {
        get() {
          return this.detailAllData.layout;
        },
        set() {

        }
      },
      detailData: {
        get() {
          return this.detailAllData.data;
        },
        set() {

        }
      }
    },
    components: {
      loading: loading,
      headerTitle: headerTitle,
      detailContent: detailContent
    },
    methods: {
      getDetailData() {
        const id = this.$route.params.id;
        this.$store.dispatch("aExamineLayoutFormAndDetail", id);
        this.detailAllData = this.$store.state.sExamineLayoutFormAndDetail;
        console.log("this.detailAllData", this.detailAllData);
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
    watch: {
      gExamineLayoutFormAndDetail: function (newVal) {
        this.detailAllData = this.$store.state.sExamineLayoutFormAndDetail;
        this.loadingShow = false;
      }
    },
    created() {
      this.getDetailData();
    },
    beforeMount() {
    },
    mounted() {
    }
  }
</script>

<style scoped lang="less">

  @import '~style/mainColor';

  .wrapper {
    .decorateBg {
      width: 100%;
      height: 8rem;
      background-color: @mColor;
      overflow: hidden;
    }
  }

</style>
