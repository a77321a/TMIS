<template>
    <section class="login-wrap">
        <Form ref='form' class="login-form">
            <h3>登录</h3>
            <div class="fields">
                <Form-item prop="account" style="margin-bottom: 0">
                    <Input
                            class="field"
                            v-model="login.account"
                            placeholder="账号"
                            width="320px">
                    </Input>
                </Form-item>

                <Form-item prop="password" style="margin-bottom: 0">
                    <Input class="field"
                           v-model="login.password"
                           type="password"
                           placeholder="密码"
                           width="320px"
                           @keyup.native.enter="check">
                    </Input>
                </Form-item>
                <Checkbox v-model="remember" label="remember">记住账号</Checkbox>
            </div>
            <div class="submit">
                <Button
                        long
                        @click.native="check"
                        type="primary"
                        :loading="loading"
                >
                    {{ loading ? '登录中' : '登录' }}
                </Button>
            </div>
        </Form>
    </section>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                login: {
                    account: LocalStorage.get('userName')||'',
                    password: ''
                },
                remember: LocalStorage.get('remember')||false,
                loading: false
            }
        },
        methods: {
            check() {
                this.loading = true
                if (this.login.account === '') {
                    this.loading = false
                    return this.$Notice.error({
                        title: '用户名不能为空',
                        duration: 2
                    })
                }
                if (this.login.password === '') {
                    this.loading = false
                    return this.$Notice.error({
                        title: '密码不能为空',
                        duration: 2
                    })
                }
                else {
                    console.log(this.remember)
                    axios.get('../../static/userList.json').then((res)=>{
                        this.loading = false
                        if(res.data.password==this.login.password){
                            if(this.remember){
                                LocalStorage.set('userName',this.login.account)
                                LocalStorage.set('remember',this.remember)
                            }
                            setTimeout(() => {
                                this.$Notice.success({
                                    title: '登录成功',
                                    duration: 2
                                })
                            }, 1000)
                            this.$router.push({
                                name: 'index'
                            })
                        }
                    })

                }
            }
        },
        watch: {
            '$route'() {
                if (this.$route.name === 'login') {
                }
            }
        },
        created() {
        },
        mounted() {
        }
    }
</script>
<style scoped lang="less">
    .login-wrap {
        position: fixed;
        z-index: 0;
        top: 0;
        left: 0;
        overflow: hidden;
        width: 100%;
        height: 100%;
    }

    .login-form {
        position: absolute;
        z-index: 1;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        padding: 16px 20px 0;
        width: 360px;
        height: 252px;
        font-size: 14px;
        background: #fff;
        border: 1px solid #ccc;
        border-radius: 12px;
        box-shadow: 2px 2px 32px 1px rgba(0, 0, 0, .45);
        opacity: .75;
        h3 {
            margin-top: 0;
            margin-bottom: 0;
            padding: 12px 0;
            font-weight: normal;
            font-size: 22px;
            text-align: center;
        }
        .field {
            display: block;
            margin: 0 auto;
            padding: 6px 0;
        }
        .submit {
            padding: 12px 0;
        }
    }

    input {
        outline: none;
    }
</style>

