<template>
  <div class="new-song-ground">
    <barcommon class="bar-commons" :barItem="barItem"></barcommon>
      <div class="new-song-ground--content">
        <navbar :title="title" class="nav-bar"></navbar>
        <div class="new-song-ground-sj">
         <songgrounditem v-for="(item,index) in albums" :key="index" :groundData="item"></songgrounditem>
        </div>
        <navbar :title="titles" class="nav-bar1">
            <div class="second-title-wrapper" slot="bar-nav-second-title">
                <div class="second-title" v-for="(item,index) in secondTile" :key="index" @click="chaosecat(index)"> <a href="javascript:;">{{item}}</a></div>
            </div>
        </navbar>
        <router-view></router-view>
      </div>
  </div>
</template>

<script type="text/javascript">

import navbar from './newsonggroundingprops/navbar'
import songgrounditem from './newsonggroundingprops/SongGroundItem'
import barcommon from "@/common/bar/BarCommon"

import {request} from '@/network/index.js'

export default {
  data() {
    return {
      title:'热门新碟',
      albums:[],
      titles:'全部新碟',
      secondTile:['全部','华语','欧美','韩国','日本'],
      barItem:['推荐','排行榜','歌单','主播电台','歌手','新碟上架'],
      
    }
  },
  created(){
      this.getnewsonggroundingData()
     
  },
  components: {
    navbar,
    songgrounditem,
    barcommon
  },
  methods:{
    async  getnewsonggroundingData(){
     const{data:res}=await request({url:'/album/newest'})
     console.log(res)
     this.albums=res.albums.slice(0,10)
      },
    
      chaosecat(index){
          switch(index){
              case 0:
                this.$router.push({path:'/discover/album/m',query:{area:'ALL'}})
                  break;
              case 1:
                this.$router.push({path:'/discover/album/m',query:{area:'ZH'}})
                 break;
              case 2:
                this.$router.push({path:'/discover/album/m',query:{area:'EA'}})
                  break;
              case 3:
                this.$router.push({path:'/discover/album/m',query:{area:'KR'}})
                 break;
              case 4:
                this.$router.push({path:'/discover/album/m',query:{area:'JP'}})
                  break;
          }
      }
  }
}
</script>

<style  scoped>
.new-song-ground{
    background-color: #eee;
   

}
.new-song-ground--content{
    width: 1024px;
    margin: 0 auto;

    background-color: white;
}
.new-song-ground--content::before{
    content: '';
    display: table;

}
.nav-bar,.nav-bar1{
    width: 950px;
    margin: 0 auto;
    margin-top: 50px;
    padding-bottom: 10px;
    border-bottom: 2px solid rgb(192,10,14);
}
.new-song-ground-sj{
   width: 950px;
    margin: 0 auto;
    margin-top: 20px;
    padding-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.second-title-wrapper{
    margin-left: 20px;
}
.second-title-wrapper{
    padding-top: 6px;
    display: flex;
}
.second-title-wrapper div:not(:last-child)::after{
    content: '|';
    
    padding: 0 10px;
}
.second-title{
    font-size: 12px;
     color: rgba(0, 0, 0, 0.6);
    position: relative;
}
.second-title a{
    color: rgba(0, 0, 0, 0.6);
    text-decoration: none;
}
.second-title a:hover{
    text-decoration: underline;
}
.bar-commons{
  width: 100%;
  height: 40px;
}
</style>
