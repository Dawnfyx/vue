<template>
  <div class="contacts" ref="wrapper">
    <!--Bscroll插件结构目录必须包一个DIV-->
    <div>
      <div class="contact-list">
        <!--<div-->
        <!--style="border-bottom: 1px solid red;"-->
        <!--v-for="item of contactName">-->
          <!--<p>{{getfindKey(item.Attributes)}}</p>-->
        <!--</div>-->
        <!--<div v-for="(items, key) in contactList" :key="key">-->
        <!--<div class="area" :ref="key">{{key}}</div>-->
        <div class="item-list" v-for="(item, key) in contactName" :key="key">
          <router-link to="/contact/detail/111">
          <div class="item">
            <h3>{{getfindKey(item.Attributes)}}</h3>
            <p v-show="false">{{item.spell}}</p>
          </div>
          </router-link>
        </div>
        <!--</div>-->
      </div>
    </div>
  </div>
</template>

<script>

  import Bscroll from 'better-scroll'

  export default {
    name: "contactItem",
    data() {
      return {}
    },
    props: {
      contacts: Array,
    },
    computed: {
      contactName: {
        get() {
          return this.contacts;
        }
      }
    },
    methods: {
      getfindKey(item) {
        for(var i=0; i<item.length; i++){
          if(item[i].Key == "fullname"){
            return item[i].Value
          }
        }
      }
    },
    watch: {
    },
    mounted() {
      this.scroll = new Bscroll(this.$refs.wrapper);
    }
  }
</script>


<style scoped lang="less">

  @import '~style/mainColor';

  .contacts{
    background-color: @cleee;
    padding: 0 1.2rem;
    overflow: hidden;
    position: absolute;
    top: 3rem;
    left: 0;
    right: 0;
    bottom: 0;


    .area{
      padding-top: 0.5rem;
      padding-left: 0.5rem;
      padding-bottom: 0.5rem;
      font-size: 1.2rem;
    }

    .item-list{
      background-color: @clfff;

      .item{
        color: @cl333;
        padding: 0.8rem;

        h3{
          font-size: 16px;
          margin-bottom: 0px;
        }
        p{
          margin-bottom: 0px;
        }

        &.item{
          border-top: 1px solid @cleee;
        }
      }
    }
  }
</style>
