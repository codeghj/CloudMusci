<!--  -->
<template>
<div class='user-fllows'>
  <userdetails :profile="profile"></userdetails>
  <div class="tabbar">
      <span>关注({{follows.length}})</span>
  </div>
  <followsandfanscom :follows="follows"></followsandfanscom>
  <!-- <div class="follows-wrapper">
      <div class="follows-items" v-for="(item,index) in follows" :key="item.userId">
          <div class="item-left">
            <a href="javascript:;"><img :src="item.avatarUrl" alt=""></a> 
          </div>
          <div class="item-center">
             <div class="center-header">
             <a href="javascript:;">{{item.nickname}}</a>
             <img  v-if=" item.avatarDetail!=null?true:false"
                  :src="item.avatarDetail.identityIconUrl" alt="" >
              <img src="~@/assets/Image/man.svg" alt="" v-if="item.gender==1" class="sex">
              <img src="~@/assets/Image/woman.svg" alt="" v-else-if="item.gender==2" class="sex">
                 </div> 
             <div class="center-contain">
                <a href="javascript:;"> <span>动态</span> <span>{{item.eventCount}}</span></a>
                <a href="javascript:;"> <span>关注</span> <span>{{item.follows}}</span></a>
                <a href="javascript:;"> <span>粉丝</span> <span>{{item.followeds}}</span></a>
             </div>
             <div class="center-footer">
               <span>{{item.signature}}</span>
             </div>
          </div>
          <div class="item-right">
              <a href="javascript:;"><div class="send-button"><span>发私信</span> </div></a>
              <div>
                  <img src="~@/assets/Image/gous.svg" alt="">
                  <span>已关注</span></div>
             
          </div>
      </div>
  </div> -->
  
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
     follows:[]
    

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
   async getfollows(){
    const{data:res}= await request({ url: "/user/follows",params: { cookie: window.localStorage.getItem("cookie"), uid: this.$route.query.id}})
    console.log(res)
    if(res.code==200){
        this.follows=res.follow
    }
    }
  
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    this.getuserhomeData()
    this.getfollows()
  
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
.user-fllows{
    width: 950px;
   min-height: 1000px;
    background-color: #fff;
    margin: 0 auto;
}
.user-fllows::before{
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
/* .follows-wrapper{
    width: 850px;
    margin: 0 auto;
    min-height: 500px;
    display: flex;
    flex-wrap: wrap;
    align-content:flex-start;
}
.follows-wrapper>div:last-child{
    border-bottom: 1px solid #ccc;
     border-right: 1px solid #ccc;
}
.follows-wrapper>div:nth-last-child(2){
     border-bottom: 1px solid #ccc;
}
.follows-wrapper>div:nth-child(even){
     border-right: 1px solid #ccc;
}
.follows-items{
    width: 50%;
    height: 100px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border-left: 1px solid #ccc;
}
.item-left{
    margin-left: 10px;
}
.item-left img{
    width: 60px;
    height: 60px;

}
.item-center{
    flex: 0.9;
    height: 60px;
    margin-left: 10px;
}
.center-header{
    margin-top: -5px;
    margin-bottom: 5px;

}
.center-header a{
  text-decoration: none;
  color: rgb(12, 133, 216);
  font-size: 15px;
  margin-right: 5px;
}
.center-header a:hover{
    text-decoration: underline;
}
.center-header img{
    width: 15px;
    height: 15px;
    margin-right: 5px;
}
.center-header .sex{
    width: 20px;
    height: 20px;
    position: relative;
    top: 3px;
}
.item-right{
    width: 60px;
    height: 60px;
}
.center-contain a{
    display: inline-block;
    font-size: 12px;
    color: black;
    text-decoration: none;
    margin-right: 15px;
    position: relative;
}
.center-contain a:hover{
    text-decoration: underline;
}

.center-contain a:not(:last-child){
    padding-right: 10px;
    border-right: 1px solid #ccc;
    height: 12px;
}
.center-contain span:last-child{
    color: rgb(12, 133, 216);
}
.center-footer{
    margin-top: 5px;
}
.center-footer span{
    display: inline-block;
    width: 190px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.6);
}
.item-right{
    width: 75px;
    height: 60px;
}
.send-button{
    width: 75px;
    height: 40px;
    background: url('~@/assets/Image/button.png') no-repeat 0 -803px;
    position: relative;
    margin-top: -5px;
}
.send-button span{
    position: absolute;
    top: 13.5px;
    left: 31px;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.8);
}
.send-button:hover{
    height: 35px;
    background-position: 0 -842px;
    margin-bottom: 5px;
}
.send-button:hover span{
    top: 11px;
}
.item-right>div img{
    margin-left: 8px;
    width: 15px;
    height: 15px;
    position: relative;
    top: 5px;
    margin-right: 5px;
   
}
.item-right>div span{
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
   
    

} */
</style>