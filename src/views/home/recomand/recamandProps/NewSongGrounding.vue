<template>
  <div class="new-song-grounding">
   <el-breadcrumb >
  <el-breadcrumb-item ><a href="javascript:;" @click="toalbum()">新碟上架</a> </el-breadcrumb-item>
  <el-breadcrumb-item class="more">更多</el-breadcrumb-item>
  </el-breadcrumb>
  <el-card>
      <div class="wrapper-song">
          <div class="song-content" ref="songcontent" :style="{left:callleft+'px'}">
              <div class="song" v-for="(item,index) in newsonggrounding " :key="index">
               <div class="img"><img :src="item.blurPicUrl" alt="" @mouseenter="playshow(index)" @mouseleave="playleave()"></div>
               <div class="song-name">{{item.name}}</div>
               <div class="songer-name">{{item.artist.name}}</div>
                <div class="icon" :class="{iconshow: playisshow==index}">
                 <img src="~@/assets/Image/bofangblack.svg" alt="">
                 </div>
              </div>
          </div>
      </div>
      <div class="prv" @click="prvimg()"><img src="~@/assets/Image/qianjin.svg" alt=""></div>
      <div class="next" @click="nextimg()"><img src="~@/assets/Image/houtui.svg" alt=""></div>
  </el-card>
  </div>

</template>

<script type="text/javascript">
export default {
  data() {
    return {
      callleft:0,
       playisshow:-1,
    }
  },
  props:{
      newsonggrounding:{
          type:Array,
          default(){
              return []
          }
      }
  },
  components: {

  },
  mounted(){
      
    },
  methods:{
      prvimg(){
      this.auplay()
      }, 
      nextimg(){
         this.auplay()
      },
      auplay(){
          if(this.callleft>-700){
          var time=setInterval(()=>{
            this.callleft-=10
            if(this.callleft==-700){
                clearInterval(time)
               
            }
          },10)
          }else {
            var times=setInterval(()=>{
            this.callleft+=10
            if(this.callleft==0){
                clearInterval(times)
               
            }
          },10)
          }
      },
      toalbum(){
          this.$router.push('/discover/album')
          this.$bus.$emit('toalbum')
      },
      playshow(index){
        this.playisshow=index
      },
      playleave(){
       this.playisshow=-1
      }
  }
}
</script>

<style scoped>
.new-song-grounding{
    width: 750px;
    height: 300px;
}
.el-breadcrumb {
    width: 750px;
}
.more{
    float:right;
}
.el-card{
    position: relative;
    height: 200px;
    margin-top: 20px;
    background-color: rgb(245,245,245);
}
.wrapper-song{
    width: 700px;
    height: 170px;
    position: absolute;
    top: 50%;
    left: 52%;
    transform: translate(-50%,-50%);
    overflow: hidden;
}
.song-content{
    width: 1400px;
    height: 180px;
    position: relative;
    left: 0px;
    
}
.song{
  width: 110px;
  height: 180px;
  float: left;
  margin-right: 30px;
  box-sizing: border-box;
  position: relative;
}
.song-name{
    color: black;
    font-size: 12px;
    margin-bottom: 3px;
}
.songer-name{
    color: rgb(0, 0, 0,0.5);
    font-size: 11px;
}
.song img{
    width: 110px;
    height: 110px;
}
.prv {
    position: absolute;
    top: 68px;
    right: 12px;
}
.next {
    position: absolute;
    top: 68px;
    left: 12px;
}
.icon{
    display: none;
    position: absolute;
    top: 77px;
    left: 77px;
}
.icon img{
    width: 35px;
    height: 35px;
}
.iconshow{
    display: block;
}
</style>
