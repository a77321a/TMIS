<template>
        <div id="search">
            <div class="top-search">
                <input @keydown.enter="searchSong(true)" v-model="searchText" class="search-input" type="text">
                <Icon @click="searchSong(true)" size="26" type="ios-search" />
            </div>
            <transition name="fade">
                <div v-show="searchFlag" class="singer-content">
                    <span v-for="item,index in singerList">
                        <img :src="item.avatar_small" alt="">
                        {{item.name}}
                    </span>
                </div>
            </transition>
            <transition name="fade">
                <div v-show="!searchFlag" class="search-res">
                    <ul>
                        <li v-for="items,index in searchRes">
                            <p v-html="items.title"></p>
                            <span>{{items.author}}</span>
                        </li>
                    </ul>
                </div>
            </transition>
            <Page v-show="!searchFlag" @on-change="search" :total="totalPage" size="small" show-total />
        </div>
</template>

<script>
    import jsonp from 'jsonp'
    export default {
        name: "search",
        data(){
            return{
                searchText:'',
                searchRes:'baidu.ting.search.common&page_no=1&page_size=30&query=',
                searchUrl:'baidu.ting.artist.get72HotArtist&?=1&offset=0&limit=81',
                singerList:[],
                searchFlag:true,
                page:1,
                searchRes:[],
                totalPage:0
            }
        },
        mounted(){
            this.getSinger()
        },
        watch:{
            searchText:{
                handler:function (newVal) {
                    if(newVal===''){
                        this.searchFlag = true
                    }
                }
            }
        },
        methods:{
            search(val){
              this.page = val
                this.searchSong()
            },
            getSinger(){
                let url = BASE + this.searchUrl
                jsonp(url,(err,res)=>{
                    this.singerList = res.artist
                })
            },
            searchSong(param){
                if(param){
                    this.page = 1
                }
                let sr = `baidu.ting.search.common&page_size=7&query=${this.searchText}&page_no=${this.page}`
                let url = BASE + sr
                if(this.searchText===''){
                    return
                }
                jsonp(url,(err,res)=>{
                    this.searchFlag = false
                    this.searchRes = res.song_list
                    this.totalPage = Number(res.pages.total)
                })
            }
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
    #search{
        width: 100%;
        height: 100%;
        padding: 100px 0 0;
        .top-search{
            text-align: center;
            position: relative;
            width: 60%;
            margin: 0 auto;
            i{
                cursor: pointer;
                position: absolute;
                right: 10px;
                top: 7px;
            }
            .search-input{
                display: block;
                border-radius: 12px;
                padding-left: 10px;
                width: 100%;
                height: 42px;
                border: 1px solid rgba(224,224,224,.6);
                background-color: rgba(255,255,255,.8);
                transition: all .4s;
                outline: none;
                &:focus{
                    transition: all .4s;
                    border-color: aquamarine;
                }
                &:hover:not(:focus){
                    transition: all .4s;
                }
            }
        }
        .singer-content{
            font-size: 0;
            margin-top: 20px;
            padding: 0px 40px;
            span{
                cursor: pointer;
                display: inline-block;
                width: 10%;
                color: #fff000;
                height: 30px;
                font-size: 12px;
                line-height: 30px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin-right: 10px;
                text-align: center;
                margin-bottom: 10px;
                border-left: none;
                border-radius: 15px;
                transition: all .8s;
                border: 1px solid rgba(224,224,224,0);
                img{
                    float: left;
                    border: none;
                    font-size: 0;
                    display: block;
                    margin-right: 2px;
                    height: 30px;
                    width: 30px;
                }
                &:hover{
                    transition: all .8s;
                    border: 1px solid rgba(224,224,224,.6);
                    background-color: rgba(255,255,255,.2);
                }
            }
        }
        .search-res{
            font-size: 0px;
            margin-top: 20px;
            padding: 0px 40px;
            ul{
                width: 60%;
                margin: 0 auto;
                li{
                    display: block;
                    padding: 5px 0;
                    font-size: 12px;
                    color: rgba(255,255,255,.7);
                    span{
                        font-size: 10px;
                    }
                    p{
                        &:first-child{
                            color: #fff000;
                        }
                    }
                }
            }
        }
    }
    .ivu-page{
        float: right;
        margin-right: 30px;
        color: #fff !important;
        &>.ivu-page-total{
        }
        li{
            background-color: rgba(255,255,255,.2) !important;
        }
    }
</style>