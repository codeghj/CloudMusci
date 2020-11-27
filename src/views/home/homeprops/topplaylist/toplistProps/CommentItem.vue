<!--  -->
<template>
<div class='comment-item'>
 <div class="img">
     <img :src="commentdata.user.avatarUrl" alt="">
 </div>
 <div class="comment-contain" :class="{commentcontain:commentdata.beReplied!=null&& commentdata.beReplied.length!=0}">
     <div class="comment-meta">
         <a class="name" href="javascript:;">{{commentdata.user.nickname}}:</a>
         <span class="contain">{{commentdata.content}}</span>
     </div>
     <div class="comment-reply-wrapper" v-show=" commentdata.beReplied!=null&& commentdata.beReplied.length!=0">
         <div class="comment-reply" v-for="(item,index) in commentdata.beReplied " :key="item.user.userId">
              <a class="reply-name" href="javascript:;">{{item.user.nickname}}:</a>
             <span class="reply-contain">{{item.content}}</span>
         </div>
         
     </div>
     <div class="commetn-publishtime">
       <span>{{ commentdata.time |gettime}}</span>
       <div class="option">
           <a href="javascript:;">
               <img src="~@/assets/Image/dz.svg" alt="">
               <span>({{commentdata.likedCount}})</span>
           </a>
            <a href="javascript:;">回复</a>
       </div>
     </div>
 </div>
</div>

</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {time} from '@/utils/time'
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

};
},
props:{
    commentdata:{
        type:Object,
        default(){
            return {}
        }
    }
},
filters:{
 gettime(val){
     let date=new Date(val)
     return time(date,'yyyy年MM月dd日')

 }
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
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
.comment-item{
    width: 100%;
    min-height: 100px;
    display: flex;
    align-items: center;
    
}
.img img{
    width: 60px;
    height: 60px;
}
.comment-contain{
    flex: 1;
    margin-left: 10px;
    min-height: 60px;
}
.comment-meta a,.comment-reply a{
    font-size: 12px;
    color:rgb(44,115,200);
    text-decoration: none;
}
.comment-meta a:hover{
    text-decoration: underline;
}
.comment-meta span,.comment-reply span{
   font-size: 12px;
}
.commetn-publishtime{
    margin-top: 10px;
}
.commetn-publishtime span{
    font-size: 12px;
    color: rgba(0,0,0,0.6);
}
.option{
    float: right;
}
.option a{
    text-decoration: none;
    color: rgba(0,0,0,0.6);
    font-size: 12px;
}
.option a:hover{
    text-decoration: underline;
}
.option a:first-child::after{
    content: '|';
    margin-left: 5px;
    margin-right: 5px;
}
.option a:last-child{
    position: relative;
    top: 2px;
}
.option  img{
width: 15px;
height: 15px;
position: relative;
top:2px;
margin-right: 5px;
}
.comment-reply-wrapper{
    margin-top: 10px;
    min-height: 20px;
    box-sizing: content-box;
    padding: 10px;
    background-color: rgb(244,244,244);

}
.reply-contain{
    color: rgba(0,0,0,0.6);
}
.commentcontain{
    padding-top: 10px;
}
</style>