<template>
  <div>
    <h2>Login页面 </h2>
    <h3>权限管理设置</h3>
    <div class="login">
      <div class="login-item">
        <label for="username"></label>
        <input
          id="username"
          type="text"
          placeholder-class="input-class"
          placeholder="请输入您的账号"
          v-model="form.username"
        >
      </div>
      <div class="login-item">
        <label for="password"></label>
        <input
          id="password"
          type="password"
          placeholder-class="input-class"
          placeholder="请输入您的密码"
          v-model="form.password"
        >
      </div>
      <div class="login-btn" @click="login()">登录</div>
    </div>
  </div>
</template>

<script>

  import store from "../store";

    export default {
        name: "login",
        data (){
            return{
                form: {
                  username: "",
                  password: ""
                },
                log: []
            }
        },
        methods: {
            login(){
                if (!this.form.username && !this.form.password){
                    alert("请填写账号密码");
                    return false;
                }
                // debugger
                setTimeout(() => {
                    store.commit("loginLevel", {
                      userStatus: 1,
                      userLevel: 0
                    })
                });

                // const that = this;
                // setTimeout(() => {
                //   store.commit("login", {
                //     account: that.form.account,
                //     password: that.form.password
                //   });
                //   store.commit("setMemberInfo", {
                //     userStatus: 0,
                //     vipLevel: 0
                //   });
                //   that.$router.push("./");
                // }, 500);

            }
        }
    }
</script>

<style scoped>
  .login{
      border: 1px solid red;
      padding: 20px;
      margin: 20px;
  }
  .login .login-item{
      width: 200px;
      margin-top: 0px;
      margin-right: auto;
      margin-bottom: 10px;
      margin-left: auto;
  }
  .login .login-item label{
      width: 100%;
      float: left;
  }
  .login .login-item input{
      width: 100%;
  }
  .login-btn{
      width: 200px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      margin: 0px auto;
      color: #ffffff;
      background-color: #0000ff40;
      border: 1px solid #0000ff40;
  }
</style>
