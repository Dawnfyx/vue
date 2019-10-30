<template>
  <div class="sectionitem">
    <div class="title">
      {{IconListData.title}}
    </div>
    <div class="content">
      <div class="item" v-for="(item, key) of IconListData.content" :key="key">
        <router-link :to="item.url">
          <div class="icon-img">
            <img :src="item.imgUrl" alt="" width="45%" height="auto">
          </div>
          <p class="icon-desc">{{item.name}}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "sectionItem",
        props: {
            IconListData: Object
        },
    }
</script>

<style scoped lang="less">
  @import '~style/mainColor';

  .sectionitem {
    width: 100%;
    box-sizing: border-box;
    background-color: @clfff;
    padding: 2.5rem 1rem;

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
