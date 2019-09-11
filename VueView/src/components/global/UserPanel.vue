<template>
  <div class="user-panel" @click="test()">
    <div class="pull-left image">
      <img alt="User Image" class="img-circle" :src="user.avatar_url">
    </div>
    <div class="pull-left info">
      <p>
        {{ user.name }}
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
                "avatar_url": userImg
              }
          }
      },
      methods:{
         test(){
            debugger
         }
      },
      beforeMount : function () {
         this.$data.user.name = this.$store.state.config.userinfo.name;
      }
  }
</script>

<style scoped>

</style>
