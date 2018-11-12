<template>
    <transition name="fade">
        <div id="index">
            <div class="outLogin">
                <Icon size="26" @click="$router.push({name:'login'})" type="md-arrow-back"/>
            </div>
            欢迎
        </div>
    </transition>
</template>
<script>

    export default {
        data() {
            return {}
        },
        methods: {},
        watch: {
            '$route'() {
            }
        },
        created() {
            // wmic.DiskDrive().then(disk => {
            //     this.diskInfo = disk
            // })
        }
    }
</script>
<style lang="less" scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

    #index {
        height: 100%;
        width: 100%;
        background-color: #fff;
        .outLogin {
            position: absolute;
            top: 50%;
            bottom: 0;
            margin: auto 0;
            i {
                border-radius: 50%;
                transition: all .4s;
                &:hover {
                    background-color: #fff;
                    transition: all .6s;
                    color: #ff9900;
                }
            }
        }
    }
</style>
