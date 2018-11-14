<template>
    <transition name="fade">
        <div id="index">
            <Spin size="large" fix v-if="spinShow"></Spin>
            <div class="outLogin">
                <transition name="fade">
                    <Icon v-show="isShowBack" size="26" @click="$router.push({name:'login'})" type="md-arrow-back"/>
                </transition>
            </div>
            <div class="main-content">
                <Row type="flex" justify="center" class="code-row-bg">
                    <Col span="4">
                        <!--新歌-->
                        <div class="u-list">
                            <div class="list-title">
                                <img :src="lastImg" alt="">
                            </div>
                            <ul class="list-content">
                                <li v-for="item,index in laststList">
                                    <a href="javascript:void(0)">{{item.album_title}}</a>
                                    <span class="rank">{{item.author}}</span>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col span="4">
                        <!--热歌-->
                        <div class="u-list">
                            <div class="list-title">
                                <img :src="hotImg" alt="">
                            </div>
                            <ul class="list-content">
                                <li v-for="item,index in hotList">
                                    <a href="javascript:void(0)">{{item.album_title}}</a>
                                    <span class="rank">{{item.author}}</span>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col span="4">
                        <!--流行-->
                        <div class="u-list">
                            <div class="list-title">
                                <img :src="faceImg" alt="">
                            </div>
                            <ul class="list-content">
                                <li v-for="item,index in faceList">
                                    <a href="javascript:void(0)">{{item.album_title}}</a>
                                    <span class="rank">{{item.author}}</span>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col span="4">
                        <!--经典-->
                        <div class="u-list">
                            <div class="list-title">
                                <img :src="classicImg" alt="">
                            </div>
                            <ul class="list-content">
                                <li v-for="item,index in classicList">
                                    <a href="javascript:void(0)">{{item.album_title}}</a>
                                    <span class="rank">{{item.author}}</span>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <div class="search">
                    <Icon title="搜索更多歌曲" color="rgba(255,255,255,.4)" size="26" type="ios-search" />
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    import jsonp from 'jsonp'
    export default {
        data() {
            return {
                isShowBack:false,
                spinShow:false,
                searchText:'',
                strUrl:'baidu.ting.billboard.billList', //列表
                shareUrl:'baidu.ting.artist.get72HotArtist&offset=0&limit=10',
                recommendUrl:`baidu.ting.billboard.billList&type=1&offset=0&size=10`,
                searchUrl:'baidu.ting.search.catalogSug',
                lastImg:'',
                hotImg:'',
                classicImg:'',
                faceImg:'',
                laststList:[],
                hotList:[],
                classicList:[],
                faceList:[]
            }
        },
        mounted(){
            this.getMusicList()
            let _this = this
            window.addEventListener('mousemove',(event)=>{
                if(event.clientX <= 80 && event.clientY >= 120){
                    _this.isShowBack = true
                }else{
                    _this.isShowBack = false
                }
            },true)
        },
        methods: {
            getMusicList(){
                this.spinShow = true
                let url = BASE + `baidu.ting.billboard.billList&offset=0&size=10&type=`
                jsonp(url+1,{},(err,res)=>{
                    if(res.error_code===22000){
                        this.laststList = res.song_list
                        this.lastImg = res.billboard.pic_s192
                        jsonp(url+2,{},(er,rs)=>{
                            if(rs.error_code===22000){
                                this.hotList = rs.song_list
                                this.hotImg = rs.billboard.pic_s192
                                jsonp(url+25,{},(rr,re)=>{
                                    if(re.error_code===22000){
                                        this.faceList = re.song_list
                                        this.faceImg = re.billboard.pic_s192
                                        jsonp(url+22,{},(erer,es)=>{
                                            this.spinShow = false
                                            if(es.error_code===22000){
                                                this.classicList = es.song_list
                                                this.classicImg = es.billboard.pic_s192
                                                this.spinShow = false
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            },
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
        .main-content{
            padding: 40px 0;
            height: 100%;
            font-size: 0;
            .ivu-col{
                transition: all .6s;
                &:hover{
                    width: 21%;
                    transition: all .6s;
                }
            }
            .u-list{
                background-color: rgba(0,0,0,.3);
                height: 430px;
                .list-title{
                    font-size: 0px;
                    text-align: center;
                    img{
                        display: block;
                        float: left;
                        margin: 0;
                        padding: 0;
                        border: 0;
                        width: 100%;
                        height: 100px;
                    }
                }
                .list-content{
                    li{
                        display: inline-block;
                        font-size: 0;
                        width: 100%;
                        &>span.rank{
                            display: inline-block;
                            font-size: 10px;
                            padding-left: 10px;
                        }
                        a{
                            width: 100%;
                            padding-left: 5px;
                            font-size: 12px;
                            display: inline-block;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                    }
                }
            }
            .search{
                position: absolute;
                width: 30px;
                height: 30px;
                left: 0;
                right: 0;
                bottom: 20px;
                margin: auto;
                i {
                    cursor: pointer;
                    border-radius: 50%;
                    transition: all .4s;
                    &:hover {
                        background-color: rgba(255,255,255,.6);
                        transition: all .6s;
                        color: rgba(0,0,0,1) !important;
                    }
                }
            }
        }
    }
</style>
