<template>
  <div class="reccomand">
   <barcommon class="bar-commons" :barItem="barItem"></barcommon>
   <swiper :banners="bannerImg"></swiper>
   <el-card>
   <homecardmusci :cardmusci="cardmusci"></homecardmusci>
   <newsonggrounding :newsonggrounding="newsonggrounding"></newsonggrounding>
   <songrank :rankdata=" rankdata" :imglist="headerimg"></songrank>
   </el-card>
  </div>
</template>

<script type="text/javascript">
import {request} from '@/network/index.js'

import swiper from "@/common/swipers/swiper"
import barcommon from "@/common/bar/BarCommon"

import homecardmusci from'./recamandProps/HomeCardMusci'
import newsonggrounding from'./recamandProps/NewSongGrounding'
import songrank from './recamandProps/SongRank'

export default {
 created(){
   this.getcardmusci()
    this.getsongGrounding()
    this.getsongrank()
    this.getBanner()
   },
  data() {
    return {
     cardmusci:[],
     newsonggrounding:[],
     headerimg:[],
     rankdata:{
       'top':{list:[]},
       'new':{list:[]},
       'sell':{list:[]}
     },
     bannerImg:[],
      barItem:['推荐','排行榜','歌单','主播电台','歌手','新碟上架'],
     
    }
  },
  components: {
  homecardmusci,
  newsonggrounding,
  songrank,
  swiper,
  barcommon
  },
  methods:{
     async getBanner(){
     const {data:res}=await request({ url:'/banner',params:{tyep:0}})
     console.log(res)
     this.bannerImg=res.banners
    },
    async getcardmusci(){
    const{data:res}= await request({url:'/top/playlist',params:{limit:8,order:'hot'}})
    const{data:res1}= await request({url:'/top/album',params:{limit:8,type:'hot'}})
    console.log(res1)
    console.log(res)
    this.cardmusci=res.playlists
    },
    async getsongGrounding(){
    const{data:res}= await request({url:'/album/newest'})
    console.log(res)
    this.newsonggrounding=res.albums.slice(0,10)
    console.log(this.newsonggrounding)
    },
   async getsongrank(){
    const{data:res}= await request({url:'/toplist'})
    console.log(res)
    this.headerimg=res.list.slice(0,3)
   const{data:res1}=await  request({url:'/playlist/detail',params:{id:res.list[0].id}})
   this.rankdata['top'].list=res1.playlist.tracks.slice(0,10)
   console.log(this.rankdata['top'].list)
   const{data:res2}=await  request({url:'/playlist/detail',params:{id:res.list[1].id}})
   this.rankdata['new'].list=res2.playlist.tracks.slice(0,10)
  
   const{data:res3}=await  request({url:'/playlist/detail',params:{id:res.list[2].id}})
   this.rankdata['sell'].list=res3.playlist.tracks.slice(0,10)
   


    }
  }
}
</script>

<style  scoped>
.el-card{
    width: 1024px;
    background-color: white;
    margin: 0 auto;
    position: relative;
}
.bar-commons{
  width: 100%;
  height: 40px;
}
</style>
