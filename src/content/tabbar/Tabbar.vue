<template>
  <div class="Tabbar">
   <tabbaritem>
       <div slot="left"></div>
       <div slot="center" class="center">
       <ul>
           <li v-for="(item,index) in lisdata" :key="index" @click="isactive(index)">
              <a href="#" :class="{bg:index==currentIndex}">{{item}}</a> 
               <div :class="{icon:index==currentIndex}"></div>

           </li>
       </ul>
       </div>
       <div slot="right" class="right">
           <form  class="query-form">
               <input type="text" placeholder="音乐/视频电台/用户" name="queryname" @blur="inputblur" @focus="inputfocus" ref="input">
           </form>
          <div class="create"><a href="#">创作者中心</a></div> 
          <div class="loginbutton"  v-if="Object.keys(profiles).length!=0||Object.keys(loginstate).length!=0?false:true">
              <a href="javascript:;"  @click="loginclick()">登录</a>
          </div>
          <div class="avatar" v-else @mouseenter="isshowProfileSeting()" @mouseleave="isshowProfileSeting()">
             <img :src="getimg" alt="" > 
             <div class="progile-setting"  v-show="showProfileSeting">
                 <div class="ledaer-item"></div>
                 <div class="setting-item" @click="toUserhome()">
                     <a href="javascript:;"><img src="@/assets/Image/profile1.svg" alt="">
                     <span>我的主页</span></a>
                     
                 </div>
                 <div class="setting-item">
                      <a href="javascript:;"><img src="@/assets/Image/mymsg1.svg" alt="">
                     <span>我的消息</span></a>
                     
                 </div>
                 <div class="setting-item">
                      <a href="javascript:;"><img src="@/assets/Image/dj1.svg" alt="">
                     <span>我的等级</span></a>
                     
                 </div>
                 <div class="setting-item">
                      <a href="javascript:;"><img src="@/assets/Image/VIP1.svg" alt="">
                     <span>VIP会员</span></a>
                     
                 </div>
                 <div class="setting-item" @click="tousersetting()">
                      <a href="javascript:;"><img src="@/assets/Image/set1.svg" alt="">
                     <span>个人设置</span></a>
                     
                 </div>
                 <div class="setting-item" >
                      <a href="javascript:;" ><img src="@/assets/Image/risk1.svg" alt="">
                     <span>实名认证</span></a>
                     
                 </div>
                 <div class="setting-item" @click="exitmusci()">
                      <a href="javascript:;"><img src="@/assets/Image/tc1.svg" alt="">
                     <span>退出</span></a>
                     
                 </div>
             </div>
          </div>
       </div>
   </tabbaritem>
  </div>
</template>

<script type="text/javascript">
const tabbaritem=()=>import('./TabbarItem')
export default {
  data() {
    return {
        currentIndex:0,
        loginstate:{},
        loginstates:'',
        showProfileSeting:false
        
      
    

    }
  },
  created(){ 
      if(window.localStorage.getItem('loginstate')!=null){
       this.loginstate=JSON.parse(window.localStorage.getItem('loginstate'))
     }else{
         this.loginstates=window.localStorage.getItem('loginstate')
     }
     console.log(Object.keys(this.loginstate).length)
    
  },
  mounted(){
   
  },
  props:{
  lisdata:{
      type:Array,
      default(){
          return []
      }
  },
  profiles:{
      type:Object,
      default(){
          return {}
      }
  }
  },
  components: {
   tabbaritem
  },
  computed:{
    isselected(){
        if(Object.keys(this.profiles).length!=0){
            return false
        }
        return true
    },
    getimg(){
           return this.profiles.avatarUrl || this.loginstate.avatarUrl
    }
  },
  methods:{
      isactive(index){
          this.currentIndex=index
          switch(index){
              case 0:
                  this.$router.push('/')
                  break
          }
      },
      inputblur(){
       this.$refs.input.placeholder='音乐/视频电台/用户'
      },
      inputfocus(){
       this.$refs.input.placeholder='' 
      },
      loginclick(){
       this.$emit('loginclick')
       console.log(this.profiles)
       console.log(this.loginstate)
       console.log(this.getimg)
      },
      isshowProfileSeting(){
          this.showProfileSeting=!this.showProfileSeting
      },
      exitmusci(){
          if(window.localStorage.getItem('loginstate')){
            //   this.$emit('exitmusci')
              window.localStorage.removeItem('loginstate')
              window.localStorage.removeItem('cookie')
              this.loginstate={}
              this.$store.commit('deleteloginstate')
              this.showProfileSeting=false
              this.profiles={}
              console.log(this.profiles)
              console.log(this.loginstate)
              if(this.$route.meta.requireauth){
                   this.$router.push('/')
              }
              this.$message.success('退出登录成功')

             
          }
       
      },
      toUserhome(){
          this.$emit('toUserhome')
      },
      tousersetting(){
          this.$router.push({path:'/user/update'})
      }
     
      
  }
}
</script>

<style  scoped>
.Tabbar{
    width: 100%;
    height: 70px;
    background-color: rgb(36, 36, 36);
}
.center{
    height: 70px;
}
.right{
    display: flex;
    align-items: center;
}
.avatar{
margin-left: 15px;
position: relative;
}
.avatar img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
}
.progile-setting{
    width: 180px;
    height: 280px;
    background-color:rgb(43,43,43);
    position: absolute;
    top: 41px;
    left: -77px;
    z-index: 999;
    border-radius: 5px;
}
.setting-item{
 height: 40px;
 line-height: 40px;
}
.setting-item a{
    display: block;
    font-size: 13px;
    width: 120px;
    margin: 0 auto;
    text-decoration: none;
    height: 40px;
    color: rgba(255, 255, 255, 0.7);
    display: flex;
    align-items: center;
}
.setting-item img{
    width: 18px;
    height: 18px;
    display: inline-block;
    margin-right: 10px;
   
}
.setting-item:hover{
    background-color: rgb(53,53,53);
}
.setting-item a:hover{
    color: white;
}
.ledaer-item {
    width: 0;
    height: 0;
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent rgb(53,53,53) transparent;
    position: absolute;
    top: -16px;
    left: 84px;
}
</style>
