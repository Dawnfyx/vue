<template>
  <div class="contacts" ref="wrapper">
    <!--Bscroll插件结构目录必须包一个DIV-->
     <div>
       <div class="contact-list">
         <div v-for="(items, key) in contactList" :key="key">
           <div class="area" :ref="key">{{key}}</div>
           <div class="item-list">
             <router-link to="/contact/detail/111">
               <div class="item" v-for="(item, key) in items">
                 <h3>{{item.name}}</h3>
                 <p v-show="false">{{item.spell}}</p>
               </div>
             </router-link>
           </div>
         </div>
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
            }
        },
        props: {
            contacts: Object,
            letter: String
        },
        computed:{
            contactList:{
                get(){
                    return this.contacts;
                }
            }
        },
        methods:{
        },
        watch: {
          letter(){
            console.log("ContactList letter",this.letter);
            if(this.letter){
              const element = this.$refs[this.letter][0];
              this.scroll.scrollToElement(element);
            }
          }
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
