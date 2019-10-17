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
        name: "AlpContacts",
        props: {
            contacts: Object,
            letter: String
        },
        mounted: function () {
            console.log(this.$props.contacts);
            this.scroll = new Bscroll(this.$refs.wrapper)
        },
        watch: {
          letter(){
            console.log("Contacts",this.letter);
            if(this.letter){
              const element = this.$refs[this.letter][0];
              this.scroll.scrollToElement(element);
            }
          }
        }
    }
</script>

<style scoped>
  .contacts{
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .item{
    background-color: coral;
    color: #ffffff;
  }
</style>
