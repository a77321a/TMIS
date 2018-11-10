<template>
  <div id="app" >
    <div class="header" style="-webkit-app-region: drag"></div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
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
    /* 设置滚动条的样式 */
  ::-webkit-scrollbar {
    width: 1px;
  }
  /* 滚动槽 */
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px #dddee1;
    border-radius: 10px;
  }
  /* 滚动条滑块 */
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #dddee1;
    -webkit-box-shadow: inset 0 0 6px #dddee1;
  }
  ::-webkit-scrollbar-thumb:window-inactive {
    background: #dddee1;
  }
</style>
