<template>
  <div class="main-div">
    <div class="login-div">
      <div class="login">
        <h3>欢迎使用企业管理平台</h3>
        <el-input v-model="userName" prefix-icon="el-icon-user" placeholder="用户名/手机号"></el-input>
        <el-input v-model="passWord" show-password prefix-icon="el-icon-lock" placeholder="密码"></el-input>
        <div class="pass-div">
          <div>
             <input type="checkbox" style="vertical-align:middle;">
          <span>记住密码</span>
          </div>
          <span>忘记密码？</span>
        </div>
        <el-button type="primary" @click="loginFunc" :disabled="disable">{{disable?'登录中':'登录'}}</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      userName: "",
      passWord: "",
      disable:false
    };
  },
  methods:{
    loginFunc(){
      // if(){

      // }
      this.disable=true
    },
  }
};
</script>
<style lang="scss" scoped>
@import "./loginScss";
</style>