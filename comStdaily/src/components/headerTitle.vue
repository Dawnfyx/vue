<template>
    <div class="header">
      <div class="left"></div>
      <div class="title">
          {{title}}
      </div>
      <div class="right">

      </div>
    </div>
</template>

<script>
    export default {
        name: "headerTitle",
        props:{
            title: String
        }
    }
</script>

<style scoped lang="less">

  @import '~style/mainColor';

  .header{
    background-color: @mColor;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    text-align: center;
    color: @clfff;
    font-size: 18px;
  }
</style>
