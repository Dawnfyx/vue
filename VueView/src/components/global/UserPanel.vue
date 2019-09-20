<template>
  <div class="user-panel" @click="test()">
    <div class="pull-left image">
      <img alt="User Image" class="img-circle" :src="user.avatar_url">
    </div>
    <div class="pull-left info">
      <p>
        {{ user.name }} {{ user.level }}
      </p>
      <a href="#">
        <i class="fa fa-circle text-success"></i>
        Online
      </a>
    </div>
  </div>
</template>

<script>
  import userImg from "img/logo.png";

  export default {
      name: "UserPanel",
      data(){
          return{
              user: {
                "name": "",
                "avatar_url": userImg,
                "level": ""
              }
          }
      },
      methods:{
         userLevel(userlevel){
           switch (parseInt(userlevel)) {
               case 0:
                    this.$data.user.level = "员工0000"
                    return;
               case 1:
                   this.$data.user.level = "经理1111"
                   return;
               case 2:
                   this.$data.user.level = `老板2222`
                   return;
               default:
                   this.$data.user.level = "员工0000"
                   return;
             }
         },
      },
      beforeMount : function () {
         this.$data.user.name = this.$store.state.config.userinfo.name;
         this.userLevel(this.$store.state.config.userinfo.userLevel);
      }
  }
</script>

<style scoped>

</style>





