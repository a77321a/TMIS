<template>
  <div id="app"  style="-webkit-app-region: no-drag">
    <div class="header" style="-webkit-app-region: drag"></div>
      <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  /* CSS */
  @import './common/css/reset.css';
   html, body {
    height: 100%;
    width: 100%;
    min-height: 100%;
  } 
  body {
    font-family: "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
    -webkit-user-select: none;
    -webkit-app-region: drag;
    cursor: default;
    min-width: 450px;
    background-color: #fdfdfd;
    overflow: hidden;
  }
  #app {
    height: 100%;
    background: url('./common/images/indexbgc.jpg') no-repeat;
    background-size: cover;
    overflow: hidden;
  }
  .header{
    position: fixed;
    height: 20px;
    top: 0;
    left: 0;
    width: 100%;
  }
  
</style>
