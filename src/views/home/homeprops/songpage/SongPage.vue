<template>
  <div class="song-page">
      <barcommon class="bar-commons" :barItem="barItem"></barcommon>
    <div class="song-page-content">
      <cardmusci :muscicard="muscicard" class="card-musci">
        <div class="song-page-content-header" slot="PageHeader">
          <div class="header-item-left">
            <div class="songpage-cat">{{query.cat}}</div>
            <div class="tag-select">
               <el-popover placement="bottom" width="400"  trigger="click" :width="800"  :offset="270" @show="popovershow()">
                 <el-row>
                     <el-col class="cat-all">
                         <a href="javascript:;" @click="chosecat('全部')" >全部风格</a>
                     </el-col>
                 </el-row>
                 <div class="cat-content">
                     <el-row class="language">
                         <el-col :span="1"><img src="~@/assets/Image/diqiu.svg" alt=""></el-col>
                         <el-col :span="2" class="list2">{{ songpagecategorys[0]}}</el-col>
                         <el-col :span="21">
                             <el-row>
                                 <el-col v-for="(item,index) in language" :key="index" :span="2"  ><a href="javascript:;" @click="chosecat(item.name)">{{item.name}}</a> </el-col>
                             </el-row>
                         </el-col>
                     </el-row>
                     <el-row class="style">
                         <el-col :span="1"><img src="~@/assets/Image/gangqin02.svg" alt=""></el-col>
                         <el-col :span="2" class="list2">{{ songpagecategorys[1]}}</el-col>
                         <el-col :span="21">
                             <el-row>
                                 <el-col v-for="(item,index) in style" :key="index" :span="3"><a href="javascript:;" @click="chosecat(item.name)">{{item.name}}</a></el-col>
                             </el-row>
                         </el-col>
                     </el-row>
                     <el-row class="spectacle">
                         <el-col :span="1"><img src="~@/assets/Image/recha.svg" alt=""></el-col>
                         <el-col :span="2" class="list2">{{ songpagecategorys[2]}}</el-col>
                         <el-col :span="21">
                             <el-row>
                                 <el-col v-for="(item,index) in spectacle" :key="index" :span="2"><a href="javascript:;" @click="chosecat(item.name)">{{item.name}}</a></el-col>
                             </el-row>
                         </el-col>
                     </el-row>
                     <el-row class="emotion">
                         <el-col :span="1"><img src="~@/assets/Image/biaoqing.svg" alt=""></el-col>
                         <el-col :span="2" class="list2">{{ songpagecategorys[3]}}</el-col>
                         <el-col :span="21">
                             <el-row>
                                 <el-col v-for="(item,index) in emotion" :key="index" :span="2"><a href="javascript:;" @click="chosecat(item.name)">{{item.name}}</a></el-col>
                             </el-row>
                         </el-col>
                     </el-row>
                     <el-row class="theme">
                         <el-col :span="1"><img src="~@/assets/Image/yinyue.svg" alt=""></el-col>
                         <el-col :span="2" class="list2">{{ songpagecategorys[4]}}</el-col>
                         <el-col :span="21">
                             <el-row>
                                 <el-col v-for="(item,index) in theme" :key="index" :span="3"><a href="javascript:;" @click="chosecat(item.name)">{{item.name}}</a></el-col>
                             </el-row>
                         </el-col>
                     </el-row>

                 </div>
                <el-button slot="reference">选择分类</el-button>
              </el-popover>
            </div>
          </div>
          <div class="header-item-right" @click="chosehot()"><a href="javascript:;">热门</a> </div>
        </div>
      </cardmusci>
      <div class="songpage-pagination">
          <el-pagination
             :bacground= "true"
             :page-size="this.query.limit"
             layout="prev, pager, next"
             :current-page="getpage"
             @current-change="handleCurrentChange"
            :total="total">
           </el-pagination>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import {request} from '@/network/index.js'

import cardmusci from "@/content/cardmusci/CardMusci";
import barcommon from "@/common/bar/BarCommon"
export default {
  data() {
    return {
      muscicard: [],
      query:{
          limit:35,
          offset:0,
          cat:'全部',
          order:''
      },
      total:0,
      songpagecategorys:{},
      songpagesub:[],
      language:[],
      style:[],
       spectacle:[],
       emotion:[],
       theme:[],
       barItem:['推荐','排行榜','歌单','主播电台','歌手','新碟上架'],

      
    };
  },
  created() {
      if(this.$route.query.cat!=null){
          this.query.cat=this.$route.query.cat
      }
      this.getmuscicard()
  },
  components: {
    cardmusci,
    barcommon
  },
  computed:{
      getpage(){
         return this.query.offset/this.query.limit+1
      }
  },
  watch:{
      $route(){
          if(this.$route.query.cat!=null){
        this.query.cat=this.$route.query.cat
        this.query.order=this.$route.query.order
    
          }else{
              this.query.cat='全部'
          }
        
        this.getmuscicard()
      }
  },
  methods: {
     async getmuscicard(){
      const{data:res}=await request({url:'/top/playlist',params:this.query})
      console.log(res)
      this.total=res.total
      this.muscicard=res.playlists
      },
      handleCurrentChange(val){
        this.query.offset=(val-1)*35
        console.log(val)
        this.getmuscicard()
      },
     async popovershow(){
        const{data:res}=await  request({url:'/playlist/catlist'})
        console.log(res)
        this.songpagecategorys=res.categories
        this.songpagesub=res.sub
       this.language= this.songpagesub.filter((item)=>item.category==0)
        this.style= this.songpagesub.filter((item)=>item.category==1)
        this.spectacle= this.songpagesub.filter((item)=>item.category==2)
        this.emotion= this.songpagesub.filter((item)=>item.category==3)
        this.theme= this.songpagesub.filter((item)=>item.category==4)
        console.log(this.language)
       

      },
      chosecat(cat){
        this.$router.push({path:'/discover/playlist',query:{cat:cat}})
      },
      chosehot(){
          this.$router.push({path:'/discover/playlist',query:{order:'hot',cat:this.query.cat}})

      }
     
  },
};
</script>

<style scoped>
.song-page-content {
  width: 1024px;
  margin: 0 auto;
  background-color: white;
}
.song-page-content::before{
    content: '';
    display: table;
}
.songpage-cat{
    font-size: 30px;
    color: black;
    margin-right: 10px;
    margin-bottom: 5px;
}
.cat-all a{
 display: block;
  width: 60px;
  height: 30px;
  text-align: center;
 text-decoration: none;
 color:rgba(0, 0, 0, 0.6);
 border:  solid #eee 1px;
 border-radius: 2px;
 font-size: 12px;
 line-height: 30px;
}
.el-row{
    font-size: 12px;
    color: black;
}
.el-col{
    overflow: hidden;
}
.card-musci{
    position: relative;

}
.song-page-content-header{
    width: 950px;
    margin: 0 37px;
    display: flex;
    margin-top: 50px;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: rgb(192,10,14) solid 2px;

    
}
.song-page-content-header::after{
    content: '';
    display: table;
    clear: both;
}
.header-item-left{
    flex: 1;
    display: flex;
    align-content: center;
}
.header-item-right a{
    width: 60px;
    height: 35px;
    display: block;
    background-color: rgb(192,10,14);
    text-align: center;
    line-height: 35px;
    border-radius: 4px;
    color: white;
    text-decoration: none;
}
.el-pagination{
    width: 400px;
    margin: 0 auto;
    font-size: 20px;
    height: 80px;
    
}
/* .el-pagination .el-pager .number{
    background-color: rgb(192,10,14);
} */
.el-pager li.active{
    background-color: rgb(192,10,14);
    color: white;
}
.el-pager li:hover{
    color:black;
}
.el-pagination button:hover{
    color:  rgb(192,10,14);
}
.el-col{
    position: relative;
}
.language .el-col:not(:nth-child(1))::after,.spectacle .el-col:not(:nth-child(1))::after,.emotion .el-col:not(:nth-child(1))::after{
    content: '';
    width: 1px;
    height: 8px;
    background-color: #aaa;
    position: absolute;
    top: 4px;
    left: 42px;
}
.style .el-col:not(:nth-child(1))::after,.theme .el-col:not(:nth-child(1))::after{
    content: '';
    width: 1px;
    height: 8px;
    background-color: #aaa;
    position: absolute;
    top: 4px;
    left: 62px;
}

.cat-content{
    margin-top: 10px;
    border-top: solid 2px #eee;
    padding-top: 20px;
}
.language ,.style,.spectacle ,.emotion ,.theme{
    margin-bottom: 20px;
}

.language a,.style a,.spectacle a,.emotion a,.theme a{
    text-decoration: none;
    color: black;
}
.language a:hover,.style a:hover,.spectacle a:hover,.emotion a:hover,.theme a:hover{
  text-decoration: underline;
}
.el-button{
    background: url('~@/assets/Image/xiangxia.svg') no-repeat ;
    background-position: 78px,0;
}
.bar-commons{
  width: 100%;
  height: 40px;
}
</style>
