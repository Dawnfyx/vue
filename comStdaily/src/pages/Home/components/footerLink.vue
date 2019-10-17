<template>
    <div class="footer">
      <div class="item"
           :class="{active: item.active == active}"
           v-for="(item, key) of IconListData.footer" :key="key"
      >
        <router-link :to="item.url">
          <div class="item-icon">
            <i class="fa" :class="item.icon"></i>
          </div>
        </router-link>
      </div>
      <!--<router-link to>-->
      <!--</router-link>-->
    </div>
</template>

<script>
    export default {
        name: "FooterLink",
        data(){
          return{
            active: "home"
          }
        },
        props: {
            IconListData: {}
        },
        methods:{
        }
    }
</script>

<style scoped lang="less">

  @import '~style/mainColor';

  .footer{
    width: 100%;
    height: 3rem;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: @mColor;
  }
  .footer .item{
    width: 33.33%;
    height: 100%;
    float: left;
  }
  .footer  .item.active{
    background-color: @mColorS;
  }
  .footer .item .item-icon{
    font-size: 20px;
    text-align: center;
    padding-top: 8px;
  }
  .footer .item .item-icon i{
    color: #fff;
  }
</style>
