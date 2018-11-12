<template>
    <div class="login">
        <div class="loginbox">
            <h3 class="login-title">登录</h3>
            <div class="inputbox">
                <input type="text" v-model="userName">
                <input type="password" v-model="userPwd">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return{
                userName:'',
                userPwd:'',
                isRember:false,
            }
        },
        mounted() {
        },
        methods: {}
    }
</script>
<style scoped lang="less">
    .login {
        width: 100%;
        height: 100%;
        .loginbox {
            position: absolute;
            width: 530px;
            height: 310px;
            border-radius: 5px;
            background-color: rgba(255, 255, 255, .4);
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            .login-title {
                color: #333;
                height: 40px;
                margin-top: 5px;
                line-height: 40px;
                font-size: 22px;
                text-align: center;
            }
            .inputbox{
                margin-top: 10px;
                input{
                    display: block;
                    margin: 10px auto;
                    width: 300px;
                    outline: none;
                    height: 40px;
                    line-height: 40px;
                    padding-left: 10px;
                    &:hover{

                    }
                }
            }
        }
    }
</style>

