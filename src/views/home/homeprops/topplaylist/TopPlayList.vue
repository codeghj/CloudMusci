<!--  -->
<template>
<div class='top-play-list'>
<barcommon :barItem="barItem" class="play-list-bar"></barcommon>
   <div class="top-pay-list-wrapper">
      <leftabbar :toplist="toplist" :pretoplist="pretoplist" :backtoplist="backtoplist" @selectItem="selectItem" @backselectItem="backselectItem"></leftabbar> 
      <rightdetails :toplistdetails=" toplistdetails" :song="song" :hotcomment="hotcomment" :newcomment="newcomment" :pagenum="pagenum" :toplist="toplist">
          <div class="playlistpage-pagination" slot="pagination">
            <el-pagination
             :bacground= "true"
             :page-size="query.limit"
             layout="prev, pager, next"
             :current-page="getpage"
             @current-change="handleCurrentChange"
            :total="total">
           </el-pagination>
          </div>
      </rightdetails>
      
</div> 
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import barcommon from "@/common/bar/BarCommon"

import {request} from '@/network/index.js'

import leftabbar from './toplistProps/TopListLeftTabbar'
import  rightdetails from './toplistProps/TopListRightDetails'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    barcommon,
    leftabbar,
    rightdetails
},
data() {
//这里存放数据
return {
   barItem:['推荐','排行榜','歌单','主播电台','歌手','新碟上架'],
   toplist:[],
   pretoplist:[],
   backtoplist:[],
   toplistdetails:{},
   song:[],
   hotcomment:[],
   newcomment:[],
   param:{
       id:0,
       type:2,
       sortType:2,
       pageNo:1,
       pageSize:20,
       cursor:0
      

   },
   query:{
       id:0,
       offset:0,
       limit:20,
   },
   total:0,
   pagenum:1
};
},
//监听属性 类似于data概念
computed: {
    getpage(){
        return this.query.offset/this.query.limit+1
    }
},
//监控data中的数据变化
watch: {
    toplist(){
        if(this.$route.query.id!=null){
            this.getdetailstoplist(this.$route.query.id)
             this.param.id=this.$route.query.id
             this.query.id=this.$route.query.id
             this.getcommenthot()
             this.getcommenttoplist()
            return
        }
        this.getdetailstoplist(this.toplist[0].id)
        this.param.id=this.toplist[0].id
        this.query.id=this.toplist[0].id
        this.getcommenthot()
        this.getcommenttoplist()
    },
    $route:{
         handler(){
             if(this.$route.query.id!=null){
                 this.getdetailstoplist(this.$route.query.id)
                this.param.id=this.$route.query.id
                this.query.id=this.$route.query.id
                this.getcommenthot()
                this.getcommenttoplist()
             return 
             }
             this.getdetailstoplist(this.toplist[0].id)
             this.param.id=this.toplist[0].id
             this.query.id=this.toplist[0].id
             this.getcommenthot()
             this.getcommenttoplist()
            
         },
        
        
    }


},
//方法集合
methods: {
    async getalltoplist(){
    const{data:res}= await  request({url:'/toplist'})
    console.log(res)
    if(res.code==200){
     this.toplist=res.list
     this.pretoplist=res.list.slice(0,4)
     this.backtoplist=res.list.slice(4,this.toplist.length)
    }
    },
    async getdetailstoplist(uid){
    const{data:res}=  await  request({url:'/playlist/detail',params:{id:uid}})
    console.log(res)
    if(res.code==200){
          this.toplistdetails=res.playlist
          this.song=res.playlist.tracks
    }
    },
    async getcommenttoplist(){
      const{data:res}= await request({url:'/comment/playlist',params:this.query})
      console.log(res)
      if(res.code==200){
       this.newcomment=res.comments
       this.total=res.total
       
      }
    },
    async getcommenthot(){
       const{data:res}=await request({url:'/comment/new',params:this.param})
       console.log(res)
       if(res.code==200){
        this.hotcomment=res.data.comments
       }
    },
    selectItem(items){
        this.$router.push({path:'/discover/toplist',query:{id:items.id}})
    },
    backselectItem(items){
        this.$router.push({path:'/discover/toplist',query:{id:items.id}})
    },
    handleCurrentChange(val){
     this.query.offset=(val-1)*this.query.limit
     this.getcommenttoplist()
     this.pagenum=val
    }


},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    this.getalltoplist()
    console.log(1)
    

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style  scoped>
.top-play-list{
    width: 100%;
}
.play-list-bar{
    height: 40px;
    width: 100%;
}
.top-pay-list-wrapper{
    width: 1024px;
    margin: 0 auto;
    min-height: 1000px;
    background-color: white;
    display: flex;
}

</style>