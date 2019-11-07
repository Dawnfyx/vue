<template>
  <div class="contacts" ref="wrapper">
    <!--Bscroll插件结构目录必须包一个DIV-->
     <div>
       <div v-for="(item, key) in contactList" :key="key">
          <div class="area">{{item}}</div>
         <!--          <div class="item" v-for="(item, key) in contactList" :key="key" :ref="key">-->
         <!--            <h3>联系人姓名：{{item}}</h3>-->
         <!--            <p v-show="false">{{item.spell}}</p>-->
         <!--          </div>-->
       </div>
     </div>
  </div>
</template>

<script>
    import Bscroll from 'better-scroll'

    export default {
        name: "contactList",
        data(){
            return{
                contactList: {}
            }
        },
        props: {
            contacts: Object,
            letter: String
        },
        computed:{

        },
        methods:{
            getContactListData(){
                this.contactList = this.$store.state.stateContactList.data;
            }
        },
        watch: {
          letter(){
            console.log("ContactList",this.letter);
            if(this.letter){
              const element = this.$refs[this.letter][0];
              this.scroll.scrollToElement(element);
            }
          }
        },
        beforeMount(){
            this.$store.dispatch('actionsContact')
        },
        mounted() {
            this.scroll = new Bscroll(this.$refs.wrapper)
            this.getContactListData();
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
