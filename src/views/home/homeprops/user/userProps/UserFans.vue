<!--  -->
<template>
<div class='user-event'>
  <userdetails :profile="profile"></userdetails>
  <div class="tabbar">
      <span>粉丝({{followeds.length}})</span>
  </div>
  <followsandfanscom :follows="followeds"></followsandfanscom>
  
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {request} from '@/network/index.js'

import userdetails from '@/content/userdetail/userdetail'

import followsandfanscom from './commonprops/FollowsAndFansCom'

export default {
//import引入的组件需要注入到对象中才能使用
components: {
    userdetails,
    followsandfanscom
    
    
},
data() {
//这里存放数据
return {
     profile:{},
     followeds:[]
    

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
     async  getuserhomeData(){
         const{data:res}=await request({url:'/user/detail',params:{cookie:window.localStorage.getItem('cookie'),uid:this.$route.query.id}})
         console.log(res)
          this.profile=res.profile

    },
     async getfans(){
      const{data:res}= await request({ url: "/user/followeds", params: { cookie: window.localStorage.getItem("cookie"),uid: this.$route.query.id,}})
      console.log(res)
      if(res.code==200){
          this.followeds=res.followeds
      }
      
    }
  
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    this.getuserhomeData()
    this.getfans()
  
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
.user-event{
    width: 950px;
    height: 1000px;
    background-color: #fff;
    margin: 0 auto;
}
.user-event::before{
    content: '';
    display: table;

}
.tabbar{
    width: 850px;
    margin: 0 auto;
    border-bottom: rgb(192,10,14) solid 2px;
    padding-bottom: 5px;
    margin-top: 40px;

}
.tabbar span{
  font-size: 20px;
}


</style>