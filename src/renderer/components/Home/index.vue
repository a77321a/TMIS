<template>
    <transition name="fade">
        <div id="index">
            <div class="outLogin">
                <transition name="fade">
                <Icon v-show="isShowBack" size="26" @click="$router.push({name:'login'})" type="md-arrow-back"/>
                </transition>
            </div>
            <div class="search-box">

            </div>
        </div>
    </transition>
</template>
<script>

    export default {
        data() {
            return {
                isShowBack:false
            }
        },
        mounted(){
            let _this = this
            window.addEventListener('mousemove',(event)=>{
                if(event.clientX <=80){
                    _this.isShowBack = true
                }else{
                    _this.isShowBack = false
                }
            },true)
            const asd =  function (){
                n = -1
                let arg = arguments.length > 0 ? arguments[0] :0
                function t(){
                    if(arg !==0){
                        this.n++
                    }else{
                        n +=arg
                    }
                    console.log(n)
                }
                t()
            }
            asd()
            asd()
        },
        methods: {
            throttle(func, delay){
                let timer = null;
                let startTime = Date.now();
                return function(){
                    let curTime = Date.now();
                    let remaining = delay - (curTime - startTime);
                    const context = this;
                    const args = arguments;
                    clearTimeout(timer);
                    if(remaining <= 0){
                        func.apply(context,args);
                        startTime = Date.now();
                    }else{
                        timer = setTimeout(func, remaining);
                    }
                }
            }
        },
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
        background-color: rgba(255,255,255,.6);
        .outLogin {
            position: absolute;
            top: 50%;
            bottom: 0;
            margin: auto 0;
            i {
                border-radius: 50%;
                transition: all .4s;
                &:hover {
                    background-color: #ccc;
                    transition: all .6s;
                    color: #ff9900;
                }
            }
        }
    }
</style>
