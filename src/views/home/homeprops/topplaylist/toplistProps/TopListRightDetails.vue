<!--  -->
<template>
<div class='right-details'>
    <div class="details-wrapper">
          <div class="header-details">
              <div class="playlist-img">
                  <img :src=" toplistdetails.coverImgUrl" alt="">
              </div>
              <div class="playlist-info">
                 <div class="info-name">
                     {{toplistdetails.name}}
                 </div>
                 <div class="info-time">
                     <span>最近更新：</span>
                     <span>{{toplistdetails.updateTime | gettime}}</span>
                     <span></span>
                 </div>
                 <div class="info-option">
                    <a href="javascript:;"> <span>播放</span></a>
                     <a href="javascript:;"></a>
                      <a href="javascript:;"><span>({{toplistdetails.subscribedCount}})</span></a>
                       <a href="javascript:;"><span>({{toplistdetails.shareCount}})</span></a>
                        <a href="javascript:;"><span>下载</span> </a>
                         <a href="javascript:;"><span>({{toplistdetails.commentCount}})</span></a>
                 </div>
              </div>
          </div>
          <div class="tabber-details-hedaer">
              <div class="contain-left">
                  <span>歌曲列表</span>
                  <span>{{song.length}}首歌</span>
              </div>
              <div class="contain-right">
                  <span>播放：</span>
                  <span>{{toplistdetails.playCount}}</span>
                  <span>次</span>
              </div>
          </div>
          <div class="tabber-details">
              <div class="tabbaer-header">
                  <div class="id"></div>
                  <div class="title">标题</div>
                  <div class="time">时长</div>
                  <div class="song-name">歌手</div>
              </div>
              <songlistitem :songitem="song[0]"></songlistitem>
          </div>

    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {time} from '@/utils/time.js'
 
import songlistitem from './SongListItem'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    songlistitem
},
data() {
//这里存放数据
return {

};
},
props:{
    toplistdetails:{
        type:Object,
        default(){
            return {}
        }
    },
    song:{
        type:Array,
        default(){
            return []
        }
    }
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
filters:{
    gettime(val){
      let date=new Date(val)
      return time(date,'MM月dd日')
    }
},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

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
.right-details{
    flex: 1;
    margin-left: 10px;
}
.details-wrapper{
    width: 700px;
    margin: 0 auto;
    height: 100%;
}
.header-details{
    height: 300px;
    width: 100%;
    display: flex;
    align-items: center;
    
}
.playlist-img{
    width: 180px;
    height: 180px;
    border: 1px solid #ccc;
    position: relative;
    margin-right: 30px;
}
.playlist-img img{
    width: 175px;
    height: 175px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.playlist-info{
    height: 180px;
    flex: 1;
}
.info-name{
    margin-top: 20px;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 15px;
}
.info-time{
    margin-left: 20px;
    margin-bottom: 30px;
}
.info-time span{
    font-size: 13px;
    color: rgba(0,0,0,0.6);
}
.info-option{
    height: 35px;
    display: flex;
    align-items: center;
}
.info-option a{
    display: inline-block;
    line-height: 35px;
    height: 35px;
     background: url('~@/assets/Image/button2.png') no-repeat ;
     text-decoration: none;
     position: relative;
}
.info-option a:first-child{
     width: 63px;
     background-position: 0 -629px;
     color: white;
     text-align: center;
     font-size: 12px;
}
.info-option a:first-child span{
    position: relative;
    top: 2px;
    margin-left: 28px;
}
.info-option a:first-child:hover{
    background-position: 0 -715px;
}
.info-option a:nth-child(2){
    width: 35px;
    background-position: 0 -1584px;
}
.info-option a:nth-child(2):hover{
    background-position: -40px -1584px;
}
.info-option a:nth-child(3){
    width: 100px;
    height: 32px;
    background-position: 0 -976px;
    border-right:  1px solid #ccc;
    border-radius: 5px;
    margin-left: 5px;
    margin-top: 2px;


}
.info-option a:nth-child(3) span,.info-option a:nth-child(4) span,.info-option a:nth-child(5) span,.info-option a:last-child span{
    color: rgba(0,0,0,0.7);
    text-align: center;
    margin-left: 30px;
    font-size: 13px;
    position: relative;
    top: -2px;
}
.info-option a:nth-child(3):hover{
     background-position: 0 -1062px;
}
.info-option a:nth-child(4){
  width: 90px;
  height: 31.5px;
  border-right: 1px solid #ccc;
  border-radius: 5px;
  background-position: 0 -1225px;
  margin-left: 5px;
  margin-top: 2px;
}
.info-option a:nth-child(4):hover{
    background-position: 0 -1268px;
}
.info-option a:nth-child(4) span{
    top: -4px;
}
.info-option a:nth-child(5){
    width: 70px;
    background-position: 0 -2759px;
    border-right: 1px solid #ccc;
    border-radius: 5px;
    height: 32px;
    margin-left: 5px;
}
.info-option a:nth-child(5):hover{
    background-position: 0 -2804px;
}
.info-option a:last-child{
    width: 100px;
    background-position: 0 -1464px;
    border-right: 1px solid #ccc;
    border-radius: 5px;
    height: 32px;
    margin-left: 5px;
}
.info-option a:last-child:hover{
    background-position: 0 -1507px;
}
.tabber-details-hedaer{
    width: 100%;
    display: flex;
    align-items: center;
}
.contain-left{
    flex: 1;
}
.contain-left span:first-child{
    font-size: 20px;
    font-weight: 400;
}
.contain-left span:last-child,.contain-right span{
    color: rgba(0,0,0,0.6);
    font-size: 13px;
    margin-left: 20px;
}
.contain-right{
    width: 120px;
}
.contain-right span{
    margin: 0;
}
.contain-right span:nth-child(2){
    color: rgb(212,12,12);
}
.tabbaer-header{
    width: 100%;
    height: 42px;
    line-height: 42px;
    background: rgb(247,247,247);
    border: solid 1px #ccc;
    border-top: 3px solid rgb(212,12,12);
    display: flex;
}
.id{
    flex: 1;
}
.title{
    font-size: 13px;
    color: rgba(0,0,0,0.7);
    padding-left: 10px;
     border-left: 1px solid #ccc;
    flex: 3;
}
.time{
     font-size: 13px;
    color: rgba(0,0,0,0.7);
    padding-left: 10px;
     border-left: 1px solid #ccc;
    flex: 1;
}
.song-name{
     font-size: 13px;
    color: rgba(0,0,0,0.7);
    padding-left: 10px;
     border-left: 1px solid #ccc;
    flex: 2;
}
</style>