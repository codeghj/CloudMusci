<!--  -->
<template>
<div class='user-detail'>
    <div class="avatar">
        <img :src="profile.avatarUrl" alt="">
        <div class="change-avatar"><a href="javascript:;">更换头像</a> </div>
    </div>
    <div class="details">
        <div class="header">
         <span class="nickname">{{profile.nickname}}</span>
         <a href="javascript:;" class="setingprofile" @click="tousersetting()">编辑个人资料</a>
        </div>
        <div class="center">
          <div class="ceter-item" @click="touserevent()">
             <div class="number">
                 <a href="javascript:;">{{profile.eventCount}}</a>
                 </div>
                 <div class="meta">
                     <a href="javascript:;">动态</a>
                 </div>
          </div>
          <div class="ceter-item" @click="touserfllows()">
              <div class="number">
                 <a href="javascript:;">{{profile.follows}}</a>
                 </div>
                 <div class="meta">
                     <a href="javascript:;">关注</a>
                 </div>
          </div>
          <div class="ceter-item" @click="touserfans()">
             <div class="number">
                 <a href="javascript:;">{{profile.followeds}}</a>
                 </div>
                 <div class="meta">
                     <a href="javascript:;">粉丝</a>
                 </div>
          </div>
        </div>
        <div class="footer">
           <div class="area">
               <span class="area-meta">所在地区:</span>
               <span class="area-true">{{profile.city | getcity}}</span>
           </div>
        </div>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {city} from '@/utils/city'
export default {
//import引入的组件需要注入到对象中才能使用
components: {

},
data() {
//这里存放数据
return {

};
},
props:{
   profile:{
       type:Object,
       default(){
           return {}
       }
   }
},
//监听属性 类似于data概念
computed: {

},
filters:{
  getcity(val){
    for(let key in city){
        if(key==val){
            return city[key]
        }
    }
  }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    touserevent(){
        this.$router.push({path:'/user/event',query:{id:JSON.parse(window.localStorage.getItem('loginstate')).userId }})
    },
    touserfllows(){
       this.$router.push({path:'/user/follows',query:{id:JSON.parse(window.localStorage.getItem('loginstate')).userId }})
    },
    touserfans(){
        this.$router.push({path:'/user/fans',query:{id:JSON.parse(window.localStorage.getItem('loginstate')).userId }})
    },
    tousersetting(){
        this.$router.push('update')
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
.user-detail{
    width: 850px;
    margin: 0 auto;
    display: flex;
     margin-top: 40px;
}
.avatar{
    position: relative;
   width: 205px;
   height: 205px;
   border:  solid 1px #ccc;
   margin-right: 40px;
}
.avatar:hover .change-avatar {
 display: block;
}
.avatar img{
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
.change-avatar{
    width: 200px;
    height: 30px;
    position: absolute;
    line-height: 30px;
    left: 0;
    bottom: 2.5px;
    margin-left: 2.5px;
    background-color: rgba(0, 0, 0, 0.4);
    text-align: center;
    display: none;
}
.change-avatar a{
     position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    color: rgba(255, 255, 255, 1);
    text-decoration: none;
    font-size: 13px;
}
.change-avatar a:hover{
    text-decoration: underline;
}
.details{
    margin-top: 10px;
    flex: 1;

}
.header{
    margin-right: 40px;
    padding-bottom: 15px;
    border-bottom:  solid 1px rgba(0, 0, 0, 0.7);
}
.header::after{
 content: '';
 display: block;
 clear: both;
}
.nickname{
    
    float: left;
    font-size: 25px;
    font-style: none;

}
.setingprofile{
    float: right ;
    text-decoration: none;
    display: block;
    color: rgba(0, 0, 0, 0.7);
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 12px;
    background-color: rgba(255, 255, 255, 0.2);
    border: solid 1px rgba(0, 0, 0, 0.5);
    border-radius: 5px;

}
.setingprofile:hover{
    background-color: white;
}
.center{
    margin-top: 5px;
    width: 300px;
    display: flex;
}
.ceter-item{
    flex: 1;
    position: relative;
    
}

.center > div:not(:last-child)::after{
    content: '';
    display: block;
    width: 1px;
    height: 35px;
    position: absolute;
    top: 8px;
    left: 77px;
    background-color:#ccc;
}
.ceter-item .number{
  font-size: 25px;
  color: rgba(0, 0, 0, 0.5);
  
}
.ceter-item .meta{
    font-size: 11px;
    color: rgba(0, 0, 0, 0.5);
  

}
.ceter-item:hover a{
    color: rgba(0, 0,255, 0.6);
}
.ceter-item a{
    text-decoration: none;
    color: rgba(0, 0, 0, 0.5);
}
.footer{
    margin-top: 20px;
}
.area-meta{
    margin-right: 10px;
}
.area-meta,.area-true{
    color: rgba(0, 0, 0, 0.5);
    font-size:15px ;
}

</style>