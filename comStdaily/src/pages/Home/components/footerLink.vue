<template>
  <div class="footer">
    <div class="item"
         :class="{active: item.active == active}"
         v-for="(item, key) of footerData" :key="key"
    >
      <router-link :to="item.url">
        <div class="item-icon">
          <i class="fa" :class="item.icon"></i>
        </div>
        <div class="item-text">
          {{item.desc}}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "FooterLink",
        data() {
            return {
                active: "home"
            }
        },
        props: {
          footerData: Array
        },
        methods: {},
        mounted(){
          // debugger
        }
    }
</script>

<style scoped lang="less">

  @import '~style/mainColor';

  .footer {
    width: 100%;
    height: 3.5rem;
    box-shadow: 0px 1px 3px @cl333;
    padding-top: 0.5rem;
    position: fixed;
    left: 0;
    bottom: 0;

    .item {
      width: 33.33%;
      height: 100%;
      text-align: center;
      float: left;

      &.active {
        .item-icon i{
          color: @mColor;
        }
        .item-text{
          color: @mColor;
        }
      }

      .item-icon i {
          width: 1.6rem;
          height: 1.6rem;
          line-height: 1.6rem;
          color: @mColorL;
        }

      .item-text{
        font-size: 8px;
        color: @mColorL;
      }
    }
  }

</style>
