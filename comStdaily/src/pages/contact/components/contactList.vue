<template>
  <div class="contacts" ref="wrapper">
      <div>
          <div class="item" v-for="(item, key) in contacts" :key="key" :ref="key">
            <h3>联系人姓名：{{key}}</h3>
            <p>sss</p>
          </div>
      </div>
  </div>
</template>

<script>
    import Bscroll from 'better-scroll'

    export default {
        name: "contactList",
        props: {
            contacts: Object,
            letter: String
        },
        mounted: function () {
            this.scroll = new Bscroll(this.$refs.wrapper)
        },
        watch: {
          letter(){
            console.log("ContactList",this.letter);
            if(this.letter){
              const element = this.$refs[this.letter][0];
              this.scroll.scrollToElement(element);
            }
          }
        }
    }
</script>

<style scoped lang="less">

  @import '~style/mainColor';

  .contacts{
    padding: 0px 10px;
    overflow: hidden;
    position: absolute;
    top: 2.7rem;
    left: 0;
    right: 0;
    bottom: 0;

    .item{
      color: @cl333;

      h3{
        font-size: 16px;
        margin-top: 10px;
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
</style>
