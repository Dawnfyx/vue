<template>
  <b-tabs content-class="mt-3" class="info-tabs">
    <b-tab title="未读" active>
      <list-unread></list-unread>
    </b-tab>
    <b-tab title="全部">
      <list-all></list-all>
    </b-tab>
    <!--<b-tab title="代理"><p>I'm a disabled tab!</p></b-tab>-->
  </b-tabs>
</template>

<script>
  import listUnread from "./listUnread";
  import listAll from "./listAll";
  export default {
      name: "tabs",
      components:{
          listUnread: listUnread,
          listAll: listAll
      }
  }
</script>

<style lang="less">

  @import '~style/mainColor';

  .info-tabs {
    margin-top: -7rem;
    margin-left: 1.2rem;
    margin-right: 1.2rem;

    .nav-tabs {
      border-bottom: none 0;

      .nav-item {
        margin-bottom: 0px;
        padding-left: 1rem;

        a {
          background-color: transparent;
          border-color: transparent;
          margin-right: 0.5rem;
          padding: 0 0.3rem 0.3rem 0.3rem;
          color: @clfff;
        }

        .active {
          background-color: transparent;
          border-color: transparent;
          border-bottom: 0.2rem solid @clfff;
          color: @clfff;
        }
      }
    }

    .list-group {
      .list-group-item {
        margin-bottom: 1rem;
        border-radius: 0.5rem;

        .title {
          border-bottom: 1px solid @cleee;
          padding-bottom: 0.5rem;
          font-weight: 600;
          font-size: 1rem;

          .time{
            font-size: 0.8rem;
            float: right;
            color: @cl666;
          }
        }

        .content {
          padding-top: 0.6rem;
          color: @cl666;
        }
      }
    }
  }


</style>
