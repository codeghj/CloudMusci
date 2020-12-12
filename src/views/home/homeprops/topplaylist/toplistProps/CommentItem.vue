<!--  -->
<template>
<div class='comment-item' @mouseenter="changestate" @mouseleave="changestate">
 <div class="img">
     <img :src="commentdata.user.avatarUrl" alt="">
 </div>
 <div class="comment-contain-wrapper">
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
           <a href="javascript:;" v-if="judge&&isshow" @click="deletecomment()" >删除</a>
           <a href="javascript:;" @click="likecomment()">
                <img src="~@/assets/Image/dzred.svg" alt=""   v-if="isactive">
               <img src="~@/assets/Image/dz.svg" alt="" v-else>
               <span>({{commentdata.likedCount}})</span>
           </a>
            <a href="javascript:;" class="reply" @click="replycomment()">回复</a>
       </div>
     </div>
     <div class="isreply-comment" v-if="isreply">
           <el-form ref="forms" :model="form" >
                       <el-form-item prop="content">
                        <el-input  type="textarea"  maxlength="140"  show-word-limit    v-model="form.content" ref="mark"></el-input>
                        </el-form-item>
            </el-form>
            <div class="option-button">
                        <!-- <div class="select-emoji"></div>
                        <div class="select-friend"></div> -->
                        <div class="submit">
                           <el-button type="primary" size="mini" @click.native="publishreplycomment()">回复</el-button>
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
import {time} from '@/utils/time'
import { request } from '../../../../../network';
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
 isactive:false,
 isshow:false,
 isreply:false,

 form:{
     t:2,
     type:2,
     id:0,
     commentId:0,
     content:'',
     cookie:window.localStorage.getItem('cookie')
 },
 rules:{
     content:[
          { required: true, message: '请输入评论', trigger: 'blur' },
            { min: 0, max: 140, message: '长度在 0 到 140 个字符', trigger: 'blur' }
     ]
 }
};
},
props:{
    commentdata:{
        type:Object,
        default(){
            return {}
        }
    },
    toplist:{
        type:Array,
        default(){
            return []
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
computed: {
    judge(){
       return this.commentdata.user.userId==JSON.parse(window.localStorage.getItem('loginstate')).userId? true:false
    }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
 likecomment(){
     let param={
         id:0,
         cid:this.commentdata.commentId,
         t:0,
         type:2,
         cookie:window.localStorage.getItem('cookie')

     }
     if(this.$route.query.id!=null){
         param.id=this.$route.query.id
     }else{
         param.id=this.toplist[0].id
         console.log(param.id)
     }
     
   this.isactive=!this.isactive
   if(!this.isactive){
       param.t=0
       this.commentdata.likedCount--
       this.islikecommentrequest(param)
   }else{
       param.t=1
       this.commentdata.likedCount++
       this.islikecommentrequest(param)
   }
  


 },
 async islikecommentrequest(param){
     console.log(param)
   const{data:res}= await request({url:'/comment/like',params:param})
   console.log(res)
   
 },
 changestate(){
     this.isshow=!this.isshow
 },
 replycomment(){
     this.isreply=!this.isreply
      this.form.content='回复'+this.commentdata.user.nickname+':'
      this.$nextTick(()=>{
      this.$refs['mark'].focus()
      })
      
 },
 publishreplycomment(){
     if(this.$route.query.id!=null){
         this.form.id=this.$route.query.id
     }else{
         this.form.id=this.toplist[0].id
        
     }
     this.form.commentId=this.commentdata.commentId
     this.$refs.forms.validate(async (valid)=>{
     let{data:res}=  await request({url:'/comment',params:this.form})
     if(res.code==200){
         let beReplied={
             content:this.commentdata.content,
             user:this.commentdata.user
         }
         res.comment.beReplied=[]
         res.comment.beReplied.push(beReplied)
         res.comment.likedCount=0
         this.$emit('replypublishcomment',res)
         console.log(res)
     }
     })
     this.$refs.forms.resetFields()
     
    
 },
 deletecomment(){
    this.$emit('deletecomment',this.commentdata.commentId)
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
.comment-item{
    width: 100%;
    min-height: 100px;
    display: flex;
    /* align-items: center; */

    
}
.img{
    margin-top: 20px;
}
.img img{
    width: 60px;
    height: 60px;
}
.comment-contain-wrapper{
flex: 1;
margin-left: 10px;
margin-top: 20px;
}
.comment-contain{
    width: 100%;
    min-height: 60px;
}
.comment-meta{
    margin-bottom: 10px;
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
    margin-bottom: 10px;
}
.commetn-publishtime span{
    font-size: 12px;
    color: rgba(0,0,0,0.6);
}
.option{
    float: right;
    margin-right: 10px;
}
.option a{
    text-decoration: none;
    color: rgba(0,0,0,0.6);
    font-size: 12px;
}
.option a:hover{
    text-decoration: underline;
}
.option a:not(:last-child)::after{
    content: '|';
    margin-left: 5px;
    margin-right: 5px;
}
.option a:last-child{
    position: relative;
    top: 1px;
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
    margin-bottom: 10px;

}
.reply-contain{
    color: rgba(0,0,0,0.6);
}
.commentcontain{
    padding-top: 10px;
}
.isreply-comment{
    width: 100%;
    min-height: 100px;
    margin-bottom: 10px;
}
.el-input{
    font-size: 12px;
    color: black;
}
.submit{
    position: relative;
    top: -10px;
    float: right;
}
</style>