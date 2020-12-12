<template>
  <div class="home">
   <tabbar :lisdata="menuItem" @loginclick="loginclick" :profiles="profile" @toUserhome="toUserhome" @exitmusci="exitmusci"></tabbar>
    <playdivce class="playdivce" :class="{showplaydivce:isactive}" @mouseenter.native="changactive()" @mouseleave.native="changactives()"></playdivce>
   
   <router-view v-if="isRouterAlive"></router-view>
   <el-dialog
   width="40%"
   title="登录"
   :visible.sync="dialogVisible"
   @close="digclose()">
  <div class="contain">
    <div class="img">
      <img src="@/assets/Image/ghj.jpg" alt="">
    </div>
   
  </div>
   <div class="form">
      <el-form :model="data" :rules="rules" ref="LoginForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="手机号" prop="phone">
       <el-input v-model="data.phone"></el-input>
     </el-form-item>
     <el-form-item label="密码" prop="password" type="password">
       <el-input v-model="data.password" show-password></el-input>
     </el-form-item>
      </el-form>
    </div>
    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="Logintrue()">确 定</el-button>
  </span>
 </el-dialog>
  
  </div>
</template>

<script type="text/javascript">
import tabbar from "@/content/tabbar/Tabbar"
import playdivce from '@/common/playdivce/PlayDivce'

import {request} from '@/network/index.js'
export default {
  created(){
    
    this.getHomemessage()
    
  },
  provide(){
    return{
      reload:this.reload
    }
  },
  data() {
    return {
      currentIndex: 0,
      menuItem: [
        "发现音乐",
        "我的音乐",
        "朋友",
        "商城",
        "音乐人",
        "下载客户端"
      ],
      isRouterAlive:true,
      dialogVisible:false,
      data:{
        phone:'',
        password:''
      },
       rules: {
          phone: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { min: 11, max: 11, message: '长度在 11个字符', trigger: 'blur' }
          ],
           password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 20, message: '长度在 6到20个字符', trigger: 'blur' }
          ],
       },
       profile:{},
       isactive:false
      
     
    };
  },
  components: {
     tabbar,
     playdivce
    
     
  },
  computed:{
    getheight(){
     
    }
  },
  methods: {
  
    async getHomemessage(){
    const resmessage= await request({url:'/homepage/block/page'})
    
    },
    handleClose(){

    },
    loginclick(){
       if(Object.keys(this.profile).length!=0){
         this.profile={}
       }
       this.dialogVisible=true
      
    },
    Logintrue(){
      if(Object.keys(this.profile).length==0){
      this.$refs.LoginForm.validate( async(valid)=>{
       if(!valid) return
      const { data:res} = await request({url:'/login/cellphone',params:{phone:this.data.phone,password:this.data.password}})
      console.log(res)
      if(res.code==200){
      this.profile=res.profile
      this.$store.commit('setloginsate',this.profile)
      window.localStorage.setItem('cookie',res.cookie)
      this.dialogVisible=false
      this.$message.success('登录成功')
      }else{
        this.$message.error(res.message)

      }
      })
      }
    },
    exitmusci(){
       if(Object.keys(this.profile).length!=0){
         this.profile={}
       }
    },
    digclose(){
        this.$refs.LoginForm.resetFields()
        this.dialogVisible=false
    },
    toUserhome(){
      this.$router.push({path:'/user/home',query:{id:JSON.parse(window.localStorage.getItem('loginstate')).userId }})
    },
    changactive(){
      this.isactive=true
    },
    changactives(){
     setTimeout(()=>{
     this.isactive=false
     },2000)
    },
    debounce(time,fnc){
       let times=null
       return function(){
         if(times!=null) clearTimeout(time)
         times=setTimeout(()=>{
               fnc.apply(this,arguments)
         },time)
       }
    },
    reload(){
        this.isRouterAlive=false
        this.$nextTick(()=>{
          this.isRouterAlive=true
        })
    }
    
  },
};
</script>

<style  scoped>

.el-card{
    width: 1024px;
    background-color: white;
    margin: 0 auto;
    position: relative;
}

.title{
  background-color: rgb(45, 45, 45);
}
.contain{
  height: 100px;
  position: relative;
}
.img{
 width: 100px;
 height: 100px;
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%,-50%);
}
.img img{
  width: 100px;
  height: 100px;
}
.form{
  margin-left: -20px;
}
.playdivce{
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  height: 10px;
   transition:  height 1s;
}
.showplaydivce{
  height: 70px;
  transition:  height 1s;
}

</style>
