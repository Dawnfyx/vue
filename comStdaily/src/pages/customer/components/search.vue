<template>
  <div class="search">
    <b-form-input size="sm" placeholder="search"></b-form-input>
  </div>
</template>

<script>
    export default {
        name: "search"
    }
</script>

<style scoped lang="less">

  @import '~style/mainColor';

  .search{
    background-color: @mColorL;
    padding: 10px;
  }

</style>
