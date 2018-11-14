<template>
    <div id="app" style="-webkit-app-region: no-drag">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    // style="-webkit-app-region: drag"
    import {app} from 'electron'

    export default {
        name: 'app',
        data() {
            return {
                curIndex: -1,
                app: require('electron').ipcRenderer
            }
        },
        methods: {
            handleClick(param) {
                switch (param){
                    case 'min':
                        this.app.send('window-min');
                        break;
                    case 'max':
                        this.app.send('window-max');
                        break;
                    case 'close':
                        this.app.send('window-close');
                        break;
                }
            }
        }
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
    li{
        list-style-type: none;
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
        box-shadow: 0 0 10px rgba(0, 0, 0, 1);
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 4px;
    }

    .window-btn {
        float: right;
        position: relative;
        z-index: 999;
    }

    .window-btn i {
        /*display: inline-block;*/
        /*width: 24px;*/
        /*height: 24px;*/
        transition: all 1s;
    }

    .handleHover {
        transition: all .4s;
        color: #fff;
        background-color: rgba(0,0,0,.6);
    }

    .handleHoverClose {
        transition: all .4s;
        color: #ed4014;
        background-color: rgba(0,0,0,.6);
    }

</style>
