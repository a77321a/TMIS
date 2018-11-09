<template>
  <div id="login">
      <div class="loginbox">

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
<style lang="stylus" scoped>
    #login{
        position: relative;
        width: 100%;
        height: 100%;
        .loginbox{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            height: 200px;
            width: 400px;
            background-color: rgba(255,255,255,.6);
        }
    }
</style>

