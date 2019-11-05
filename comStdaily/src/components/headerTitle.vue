<template>
    <div class="header">
      <div class="left">
        <header-left v-if="headerLeft"></header-left>
      </div>
      <div class="title">
          {{title}}
      </div>
      <div class="right">
        <header-right @toggle="taggolModal" v-if="headerRight"></header-right>
      </div>
      <!--提示框-->
      <tooltip-box :tooltipData="tooltipData"></tooltip-box>
    </div>
</template>

<script>

  import headerLeft from "./headerLeft";
  import headerRight from "./headerRight";
  import tooltipBox from "./tooltipBox";

    export default {
        name: "headerTitle",
        data(){
            return{
                tooltipData:{
                    title: "提示",
                    content: "请填写审批意见"
                }
            }
        },
        props:{
            title: {
                type: String,
                default: '标题'
            },
            headerLeft: {
                type: Boolean,
                default: false
            },
            headerRight: {
                type: Boolean,
                default: false
            }
        },
        components:{
            headerLeft: headerLeft,
            headerRight: headerRight,
            tooltipBox: tooltipBox,
        },
        methods:{
          taggolModal(){
              this.$bvModal.show("tooltipBox")
          }
        },
        mounted() {
        }
    }
</script>

<style scoped lang="less">

  @import '~style/mainColor';

  .header{
    background-color: @mColor;
    padding: 0.6rem 1.2rem;
    text-align: center;
    color: @clfff;
    font-size: 1.2rem;
    display: flex;
    justify-content: space-between;

    .title{
      margin: 0px auto;
    }
    .left{
      width: 2rem;
      font-size: 1rem;
    }
    .right{
      width: 2rem;
      font-size: 1rem;
    }
  }
</style>
