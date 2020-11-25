<!--  -->
<template>
<div class='left-tabbar-item'>
<a href="javascript:;" class="item-wrapper">
  <img :src="item.coverImgUrl" alt="">
  <div class="item-meta">
      <div>{{item.name}}</div>
      <div>{{item.updateFrequency}}</div>
  </div>
</a>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

};
},
props:{
    item:{
        type:Object,
        default(){
            return {}
        }
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
.left-tabbar-item{
    width: 100%;
    height: 80px;
}

.left-tabbar-item a{
     width: 100%;
    height: 80px;
    display: block;
    display: flex;
    align-items: center;
    text-decoration: none;
}
.item-wrapper img{
    width: 50px;
    height: 50px;
    margin-left: 20px;
    margin-right: 10px;
}
.item-meta div:first-child{
   font-size: 12px;
   color: rgba(0,0,0,0.8);
   margin-top: -6px;
   margin-bottom: 17px;
}
.item-meta div:last-child{
    font-size: 10px;
    color: rgba(0,0,0,0.4);
}
</style>