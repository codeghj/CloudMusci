<!--  -->
<template>
<div class='song-list-item' @mouseenter="changeactive()" @mouseleave="changeactive()">
 <div class="id"><span>{{index+1}}</span> </div>
 <div class="title">
     <div class="img" v-if="index<3"> <a href="javascript:;"><img :src="songitem.al.picUrl" alt=""></a></div>
     <div class="icon" @mouseenter="changeimgactive()" @mouseleave="changeimgactive()">
         <img src="~@/assets/Image/bofangliang.svg" alt="" v-if="imgactive"> 
         <img v-else src="~@/assets/Image/bfblack.svg" alt="" > 
         </div>
     <div class="name"><a href="javascript:;">{{songitem.name}}</a> </div>
     <div class="alia" v-if="songitem.alia.length!=0"><span >-({{songitem.alia[0]}})</span></div>
     <div class="icon1"></div>
 </div>
 <div class="time">
     <span v-if="active">{{songitem.dt |gettime}}</span> 
     <span v-else>
         <el-tooltip class="item" effect="light" content="添加到播放列表" placement="bottom-start" :visible-arrow="false" > 
         <a href="javascript:;"><img src="~@/assets/Image/jiahaodeapth.svg" alt=""></a>
         </el-tooltip>
         <el-tooltip class="item" effect="light" content="收藏" placement="bottom-start" :visible-arrow="false" >
         <a href="javascript:;"><img src="~@/assets/Image/shoucangjia1.svg" alt=""></a>
         </el-tooltip>
         <el-tooltip class="item" effect="light" content="分享" placement="bottom-start" :visible-arrow="false" >
         <a href="javascript:;"><img src="~@/assets/Image/fx.svg" alt=""></a>
         </el-tooltip>
         <el-tooltip class="item" effect="light" content="下载" placement="bottom-start" :visible-arrow="false" >
         <a href="javascript:;"><img src="~@/assets/Image/xz.svg" alt=""></a>
         </el-tooltip>
     </span>
 </div>
 <div class="song-name"> <a href="javascript:;" v-for="(item,index) in songitem.ar" :key="index">{{item.name}}</a></div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {time} from '@/utils/time.js'

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    active:true,
    imgactive:true

};
},
props:{
  songitem:{
      type:Object,
      default(){
          return {}
      }
  },
  index:{
     type:Number,
     
  }
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
filters:{
 gettime(val){
   let date=new Date(val)
   return time(date,'mm:ss')

 }
},
//方法集合
methods: {
 changeactive(){
     this.active=!this.active
 },
 changeimgactive(){
     this.imgactive=!this.imgactive
 }
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
.song-list-item{
    display: flex;
}
.id{
    flex: 1;
     font-size: 13px;
    color: rgba(0,0,0,0.6);
}
.id span{
    margin-left: 20px;
}
.title{
    font-size: 13px;
    color: rgba(0,0,0,0.7);
    padding-left: 10px;
    flex: 3;
    display: flex;
    align-items: center;
}
.img{
    margin-right: 10px;
}
.img img,.img{
    width: 60px;
    height: 60px;
    
}
.icon,.icon img{
    width: 20px;
    height: 20px;
   line-height: 0px;
   margin-right: 10px;
}
.time{
     font-size: 13px;
    color: rgba(0,0,0,0.7);
    padding-left: 10px;
    flex: 1;
}
.time span:last-child img{
    width: 15px;
    height: 15px;
    margin-left: 5px;
}
.song-name{
     font-size: 13px;
    padding-left: 10px;
    flex: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.song-name a{
    text-decoration: none;
    color: rgba(0,0,0,1);
}
.song-name a:not(:last-child)::after{
    content: '/';
     color: rgba(0,0,0,1);
}
.song-name a:hover{
    text-decoration: underline;
}

.name a{
    color: black;
    text-decoration: none;
}
.name a:hover{
    text-decoration: underline;
}
.alia{
    width: 100px;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap; 
 margin-top: 3px;
 margin-left: 3px;
 
}
.alia span{
    display: inline-block;
    width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: rgba(0,0,0,0.4);
    font-size: 11px;
}

</style>