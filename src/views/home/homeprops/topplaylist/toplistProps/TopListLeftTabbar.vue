<!--  -->
<template>
<div class='toplist-left-tabbar'>
<div class="header">
    云音乐特色榜
</div>
<toplistlefttabbaritem  v-for="(item ,index) in pretoplist" :key="item.id" :item="item" @click.native="activeIndex(index,item)" :class="{active:currentIndex==index,hoveractive:hoverIndex==index}" @mouseenter.native="hoverative(index)" @mouseleave.native="hovernoactive()"></toplistlefttabbaritem>
<div class="center-header">
 全球媒体榜
</div>
<toplistlefttabbaritem  v-for="(item ,index) in backtoplist" :key="item.id" :item="item" @click.native="backactiveIndex(index,item)" :class="{active:backcurrentIndex==index,hoveractive:backhoverIndex==index}" @mouseenter.native="backhoverative(index)" @mouseleave.native="backhovernoactive()" ></toplistlefttabbaritem>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import toplistlefttabbaritem from './TopListLeftTabbarItem'

export default {
//import引入的组件需要注入到对象中才能使用
components: {
    toplistlefttabbaritem 
},
data() {
//这里存放数据
return {
    currentIndex:0,
    backcurrentIndex:-1,
    hoverIndex:-1,
    backhoverIndex:-1
};
},
props:{
 toplist:{
     type:Array,
     default(){
         return []
     }
 },
 pretoplist:{
      type:Array,
     default(){
         return []
     }
 },
 backtoplist:{
      type:Array,
     default(){
         return []
     }
 }
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {
    $route(){
        if(this.$route.query.id==null){
            this.currentIndex=0
            this.backcurrentIndex=-1
        }
    }
},
//方法集合
methods: {
   activeIndex(index,item){
       this.backcurrentIndex=-1
     this.currentIndex=index
     this.$emit('selectItem',item)
     },
   backactiveIndex(index,item){
       this.currentIndex=-1
       this.backcurrentIndex=index
       this.$emit('backselectItem',item)
   },
   hoverative(index){
       if(index!=this.currentIndex){
           this.hoverIndex=index
       }
   },
   hovernoactive(){
       this.hoverIndex=-1
   },
    backhoverative(index){
       if(index!=this.backcurrentIndex){
           this.backhoverIndex=index
       }
   },
   backhovernoactive(){
       this.backhoverIndex=-1
   }

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    setTimeout(()=>{
    if(this.$route.query.id!=null){
      this.currentIndex=this.pretoplist.findIndex((value)=>value.id==this.$route.query.id)
        
       this.backcurrentIndex=this.backtoplist.findIndex((item)=>item.id==this.$route.query.id)  
     console.log(this.backactiveIndex)
     return
    }
    
    },500)
    
  
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
.toplist-left-tabbar{
    width: 250px;
    min-height: 1000px;
    background-color: rgb(249,249,249);
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
   
}
.header{
     padding-top: 50px;
    margin-left: 15px;
    font-size: 15px;
    color: rgba(0,0,0,0.8);
    font-weight: bold;
    margin-bottom: 10px;
}
.center-header{
    padding-top: 20px;
    margin-left: 15px;
    font-size: 15px;
    color: rgba(0,0,0,0.8);
    font-weight: bold;
    padding-bottom: 20px;
    
}
.active{
    background-color: rgb(230,230,230);
}
.hoveractive{
    background-color: rgb(244,242,242);
}
</style>