<template>
    <div class="content">
        <div class="item" v-for="(item, key) of IconListData.content" :key="key">
          <router-link :to="item.url">
            <div class="icon-img">
              <img :src="item.imgUrl" alt="" width="50%" height="auto">
            </div>
            <p class="icon-desc">{{item.name}}</p>
          </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "IconList",
        props: {
            IconListData: Object
        },
        methods: {

        }
    }
</script>

<style scoped lang="less">
  .content{
    background-color: #ffffff;
    padding-top: 20px;
    overflow: hidden;

    .item{
      width: 25%;
      float: left;
    }

    .icon-img{
      text-align: center;

      img{
        border-radius: 5px;
      }
    }
    .icon-desc{
      text-align: center;
      color: #333333;
      font-size: 14px;
    }
  }

</style>
