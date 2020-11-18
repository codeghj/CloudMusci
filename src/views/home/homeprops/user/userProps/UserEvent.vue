<!--  -->
<template>
<div class='user-event'>
  <userdetails :profile="profile"></userdetails>
  <div class="tabbar">
      <span>我的动态({{events.length}})</span>
  </div>
  <div class="event-wappper">
      <div class="user-event-wrapper">
          <userevent :events="item" v-for="(item,index) in events" :key="item.uuid"></userevent>
      </div>
      <div class="user-fllows-fans">
          <div class="user-fllows">
            <div class="user-fllows-title">我的关注</div>
            <div class="user-follows-card-wrapper">
                <div class="user-follows-card" v-for="(item,index) in follows " :key="item.userId">
                <div class="songer-img"> <a href="javascript:;"><img :src="item.avatarUrl" alt=""></a> </div>
                <div class="songer-meta">
                  <a href="javascript:;"  class="songer-name">{{item.nickname}}</a>
                    <img :src="item.avatarDetail.identityIconUrl" alt="" class="songer-icon">
                </div>
            </div>
            </div>
            
          </div>
          <div class="user-fans">
              <div class="user-fans-title">我的粉丝</div>
              <div class="user-fans-card-wrapper">
                <div class="user-fans-card" v-for="(item,index) in followeds " :key="item.userId">
                <div class="fans-img"> <a href="javascript:;"><img :src="item.avatarUrl" alt=""></a> </div>
                <div class="fans-meta">
                    <a class="fans-name" href="javascript:;">{{item.nickname}}</a>
                </div>
            </div>
            </div>
          </div>
      </div>
  </div>
  
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {request} from '@/network/index.js'

import userdetails from '@/content/userdetail/userdetail'
import userevent from '@/content/userevent/UserEvent'


export default {
//import引入的组件需要注入到对象中才能使用
components: {
    userdetails,
    userevent
    
},
data() {
//这里存放数据
return {
     profile:{},
     events:[],
     follows:[],
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
   async getevents(){
    const{data:res}=await request({url:'/user/event',params:{cookie:window.localStorage.getItem('cookie'),uid:this.$route.query.id}})
    console.log(res)
    this.events=res.events.filter(item=>item.json=JSON.parse(item.json))
    console.log(this.events)
    },
   async getfollows(){
    const{data:res}=await  request({url:'/user/follows',params:{cookie:window.localStorage.getItem('cookie'),uid:this.$route.query.id}})
    console.log(res)
    if(res.code==200){
        this.follows=res.follow
    }
    },
    async getfans(){
      const{data:res}=await request({url:'/user/followeds',params:{cookie:window.localStorage.getItem('cookie'),uid:this.$route.query.id}})
      console.log(res)
      if(res.code==200){
          this.followeds=res.followeds
      }
    }
  
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    this.getuserhomeData()
    this.getevents()
    this.getfollows()
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
.event-wappper{
    width: 850px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    
}
.user-fllows-fans{
    width: 250px;
   min-height: 600px;
    border-left: 2px solid rgb(245,245,245);
    padding-left: 20px;
}
.user-fllows-title,.user-fans-title{
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    font-weight: bold;
    border-bottom: 1px solid #ccc;
}
.user-fans-title{
    margin-top: 20px;
}
.songer-img img,.fans-img img{
    width: 70px;
    height: 70px;
}
.songer-icon {
    width: 15px;
    height: 15px;
    float: right;
    line-height: 15px;
}
.user-follows-card-wrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.user-follows-card,.user-fans-card{
    margin-top: 15px;
}
.songer-meta,.fans-meta{
    margin-top: 8px;
}
.songer-name,.fans-name{
    font-size: 12px;
}
.songer-name,.fans-name {
    display: inline-block;
    width: 40px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    height: 15px;
    line-height: 15px;
    text-decoration: none;
    color: black;
}
.songer-name:hover,.fans-name:hover{
    text-decoration: underline;
}
</style>