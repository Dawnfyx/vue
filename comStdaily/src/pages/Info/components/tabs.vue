<template>
  <b-tabs content-class="mt-3" class="info-tabs">
    <b-tab title="未读" active>
      <b-list-group>
        <b-list-group-item>
          <div class="title">
            客户分派通知
          </div>
          <div class="content">
           有一个新通知
          </div>
        </b-list-group-item>
        <b-list-group-item>
          <div class="title">
            客户分派通知
          </div>
          <div class="content">
            有一个新通知
          </div>
        </b-list-group-item>
        <b-list-group-item>
          <div class="title">
            客户分派通知
          </div>
          <div class="content">
            有一个新通知
          </div>
        </b-list-group-item>
        <b-list-group-item>
          <div class="title">
            客户分派通知
          </div>
          <div class="content">
            有一个新通知
          </div>
        </b-list-group-item>
        <b-list-group-item>
          <div class="title">
            客户分派通知
          </div>
          <div class="content">
            有一个新通知
          </div>
        </b-list-group-item>
        <b-list-group-item>
          <div class="title">
            客户分派通知
          </div>
          <div class="content">
            有一个新通知
          </div>
        </b-list-group-item>
      </b-list-group>
    </b-tab>
    <b-tab title="全部">
    </b-tab>
    <!--<b-tab title="代理"><p>I'm a disabled tab!</p></b-tab>-->
  </b-tabs>
</template>

<script>
    export default {
        name: "tabs"
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
          padding-bottom: 0.8rem;
          font-weight: 600;
        }

        .content {
          padding-top: 0.6rem;
        }
      }
    }
  }


</style>
