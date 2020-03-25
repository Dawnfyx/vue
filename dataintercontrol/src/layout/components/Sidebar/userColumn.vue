<template>
  <div class="sidebar-user-container">
      <router-link to="/">
        <div class="sidebar-user-info">
          <img v-if="userLogin" :src="userLogin" alt="" />
        </div>
        <div class="sidebar-user-name">
          khsogosd
        </div>
      </router-link>
  </div>
</template>

<script>

    import userLogin from '@/assets/img/i_ifLogin.png';

    export default {
        name: "",
        data() {
            return {
                userLogin: userLogin
            }
        }
    }
</script>

<style lang="less" scoped>

  /*@import "~styles/color_all.less"*/

  @color1: #409EFF;

  .sidebar-user-container{
    position: relative;
    width: 100%;
    height: 70px;
    line-height: 70px;
    box-sizing: border-box;
    background-color: #fff;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    overflow: hidden;

    .sidebar-user-info{
      width: 50px;
      height: 50px;
      border: 2px solid @color1;
      border-radius: 50px;
      box-sizing: border-box;
      margin-left: 20px;
      overflow: hidden;
      float: left;

      img{
        width: 100%;
        height: 100%;
        background-color: #ccc;
      }
    }
    .sidebar-user-name{
      width: 100px;
      height: 50px;
      line-height: 50px;
      font-size: 20px;
      float: left;
      margin-left: 10px;
    }
  }

</style>
