<template>
  <div class="sectionitem">
    <div v-for="item of testArray">
      <div class="title">
        {{IconListData.title}}
      </div>
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
    </div>
  </div>
</template>

<script>
    export default {
        name: "sectionItem",
        data(){
           return{
               testArray: [
                   {

                   },{

                   },{

                   },{

                   },{

                   }
               ]
           }
        },
        props: {
            IconListData: Object
        },
    }
</script>

<style scoped lang="less">
  @import '~style/mainColor';

  .sectionitem {
    width: 100%;
    background-color: @clfff;
    padding-bottom: 4rem;

    .title {
      line-height: 20px;
      background: @cleee;
      text-indent: 10px;
      padding: 6px;
    }

    .content {
      background-color: @clfff;
      padding-top: 20px;
      overflow: hidden;

      .item {
        width: 25%;
        float: left;
      }

      .icon-img {
        text-align: center;

        img {
          border-radius: 5px;
        }
      }

      .icon-desc {
        text-align: center;
        color: @cl333;
        font-size: 14px;
      }
    }

  }
</style>
