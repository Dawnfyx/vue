<template>
  <div>
    <div class="sectionitem" v-for="(items, key) of HomeDataList" :key="key">
      <div class="title">
        {{items.name}}
      </div>
      <div class="content">
      <div class="item" v-for="(item, key) of items.items" :key="key">
      <router-link :to="linkto[key]">
      <div class="icon-img">
      <img :src="item.icon" alt="" width="45%" height="auto">
      </div>
      <p class="icon-desc">{{item.name}}</p>
      </router-link>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "sectionItem",
        data(){
            return{
              linkto: ["/examine", "/contact", "/customer"],
              linkto2: {
                "1": "/examine",
                "2": "/customer",
                "3": "/contact"
              }
            }
        },
        props: {
          HomeData: Array
        },
        computed:{
          HomeDataList: {
            get(){
              return this.HomeData;
            }
          }
        }
    }
</script>

<style scoped lang="less">
  @import '~style/mainColor';

  .sectionitem {
    width: 100%;
    box-sizing: border-box;
    background-color: @clfff;
    padding: 2.5rem 1rem 0rem 1rem;

    .title {
      padding: 0 1.8rem;
      font-size: 1.3rem;
    }

    .content {
      background-color: @clfff;
      padding-top: 1rem;
      overflow: hidden;

      .item {
        width: 33.3333%;
        margin-bottom: 1.4rem;
        float: left;
      }

      .icon-img {
        margin-bottom: 0.5rem;
        text-align: center;

        img {
          border-radius: 5px;
        }
      }

      .icon-desc {
        margin-bottom: 0;
        text-align: center;
        font-size: 14px;
        color: @cl333;
      }
    }

  }
</style>
