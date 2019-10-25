<template>
    <div class="header">
      <div class="left">
        <header-left></header-left>
      </div>
      <div class="title">
          {{title}}
      </div>
      <div class="right">
        <header-right></header-right>
      </div>
    </div>
</template>

<script>
  import headerLeft from "./headerLeft";
  import headerRight from "./headerRight";
    export default {
        name: "headerTitle",
        props:{
            title: String
        },
        components:{
            headerLeft: headerLeft,
            headerRight: headerRight
        }
    }
</script>

<style scoped lang="less">

  @import '~style/mainColor';

  .header{
    background-color: @mColor;
    padding-top: 0px;
    padding-bottom: 0px;
    text-align: center;
    color: @clfff;
    font-size: 18px;
    display: flex;
    justify-content: space-between;
  }
</style>
