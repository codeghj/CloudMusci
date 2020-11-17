<!--  -->
<template>
<div class='user'>
  <barcommon class="bar-common" :barItem="barItem" v-if="$route.path.indexOf('event')!=-1||$route.path.indexOf('fllows')!=-1||$route.path.indexOf('fans')!=-1? true:false"></barcommon>
  <barcommon class="bar-commons" v-else></barcommon>
  <router-view></router-view>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';



import barcommon from "@/common/bar/BarCommon"
export default {
//import引入的组件需要注入到对象中才能使用

components: {
    barcommon:()=>import("@/common/bar/BarCommon")
},
data() {
//这里存放数据
return {
    barItem:['推荐','排行榜','歌单','主播电台','歌手','新碟上架'],
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
   async getuserdata(){
     
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
  this.getuserdata()
  

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {

}, //生命周期 - 创建之前
beforeMount() {

}, //生命周期 - 挂载之前
beforeUpdate() {

}, //生命周期 - 更新之前
updated() {

}, //生命周期 - 更新之后
beforeDestroy() {

}, //生命周期 - 销毁之前
destroyed() {

}, //生命周期 - 销毁完成
activated() {

}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style  scoped>
.bar-common{
  width: 100%;
  height: 40px;
}
.bar-commons{
  width: 100%;
  height: 5px;
}

</style>