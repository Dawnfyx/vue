<template>
  <form v-valid.prevent="submit">
    <div>有并且“只有一个”prevent修饰符，submit为最后提交的方法</div>
    <p>姓名<input type="text" required pattern=".{1,4}" data-required="请填写姓名" data-pattern="你的姓能超过4个字！！！" /></p>
    <div>data-为自定义错误信息</div>
    <p>年龄<input type="text" required pattern="\d+" data-pattern="要填数字啊！！！" /></p>
    <p>h5验证邮箱<input type="email" data-type="邮箱！邮箱！邮箱！" />(IE9不行）</p>
    <p>邮箱<input type="email" pattern="\w+(?:\.\w+)*@\w+(?:\.\w+)+" data-pattern="正则邮箱验证出错！" />(兼容IE9，必须得正则）</p>
    <p>
      性别<select name="sex" required data-required="别闹！快选！">
      <option value="">性别 </option>
      <option value="0">男</option>
      <option value="1">女</option>
    </select>
    </p>
    <p>输入密码：<input type="password" v-model="pwd" required pattern="[\x00-\xff]{6,}" @change="comparePwd" ref="pwd" /></p>
    <p>核对密码：<input type="password" v-model="repwd" required pattern="[\x00-\xff]{6,}" @change="comparePwd" /></p>
    <p>单选一<input type="radio" name="aa" value="" /></p>
    <p>单选二<input type="radio" name="aa" value="" required />radio随便加一个required即可，全加也行</p>

    <p>多选一<input type="checkbox" name="bb" value="" required /><br />
      多选二<input type="checkbox" name="bb" value="" required /></p>
    <p><input type="submit" value="提交" /></p>
  </form>
</template>

<script>
    export default {
        name: "validator",
        data () {
          return {
            pwd:'',
            repwd:''
          }
        },

        methods:{
          comparePwd(){
            if(this.repwd&&this.pwd){
              if(this.pwd===this.repwd){
                this.$refs.pwd.setMessage("");
              }
              else
              {
                this.$refs.pwd.setMessage("两次密码不一致！");
              }
            }
          },
          submit(){
            console.log("submit");
            console.log(this.pwd);
          }
        }
    }
</script>

<style scoped>

</style>
