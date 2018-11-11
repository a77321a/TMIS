<template>
  <div class="login">
      <div class="loginbox">
        <h3 class="login-title">登录</h3>
        <div class="inputbox"></div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    mounted(){
      console.log(1)
    },
    methods: {
      
    }
  }
</script>
<style lang="less">
  .login{
    width: 100%;
    height: 100%;
    .loginbox{
      position: absolute;
      width: 530px;
      height: 310px;
      border-radius: 5px;
      background-color: rgba(255,255,255,.4);
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      .login-title{
        color: #333;
        height: 40px;
        margin-top: 5px;
        line-height: 40px;
        font-size: 22px;
        text-align: center;
      }
    }
  }
</style>

