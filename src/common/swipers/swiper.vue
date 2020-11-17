<template>
  <div class="swiper" ref="swiperbg" v-if="banners.length>0" >
    <div class="bg" :style="bg" ></div>
    <div class="content">
      <Swiper :options="swiperobject" class="" @slideChangeTransitionStart="slideChangeTransitionStart()" @slideNextTransitionStart="slideNextTransitionStart"  @slidePrevTransitionStart=" slidePrevTransitionStart" ref="swiper" v-if="banners.length">
      <Swiper-Slide 
        v-for="(item, index) in banners"
        :key="index"
        class="swiper-slide"
      >
       <img :src="item.imageUrl" alt="" ref="swiperimg"   id="img">
      </Swiper-Slide>
      <div class="swiper-pagination" slot="pagination"></div>
       <div class="swiper-button-prev"></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
       <div class="swiper-button-next"></div><!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
    </Swiper>
    <div class="left-bg"><a href="#"></a></div>
    </div>
  </div>
</template>

<script type="text/javascript">
import ColorThief from "colorthief"

import "swiper/css/swiper.css";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  created(){
   
  },
  data() {
    return {
      swiperobject: {
        notNextTick: true,
        speed: 300, //滚动速度
        autoplay: {
          delay: 2000,
          disableOnInteraction:false

        },
        loop: true, //循环
        pagination: {
          el: ".swiper-pagination",
          clickable :true,
        },
        effect:'fade',
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      observer:true,
      observeParents:true
      
      },
      bg:{
        backgroundImage:'',
        
      },
      currentIndex:1,
     
    };
  },
  mounted(){
    setTimeout(()=>{
       this.bg.backgroundImage='url('+this.banners[0].imageUrl+')'
     
    },200)
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  computed:{

  },
  methods: {
   slideChangeTransitionStart(){
     
     
 },
 slideNextTransitionStart(){
  if(this.currentIndex<this.banners.length){
     this.bg.backgroundImage='url('+this.banners[this.currentIndex].imageUrl+')'
     this.currentIndex++;
     }else{
        this.bg.backgroundImage='url('+this.banners[0].imageUrl+')'
        this.currentIndex=1
     }
 },
  slidePrevTransitionStart(){
    if(this.currentIndex>1&&this.currentIndex<=this.banners.length){
      this.currentIndex-=2
      this.bg.backgroundImage='url('+this.banners[this.currentIndex].imageUrl+')'
      this.currentIndex++
    
    }else{
      this.bg.backgroundImage='url('+this.banners[this.banners.length-1].imageUrl+')'
      this.currentIndex=this.banners.length
    }
  },
  // getcolor(){
            
  //           var img=document.getElementById("img")
           
  //          var context= canva.getContext("2d")
  //          context.drawImage(img,0,0,canva.width,canva.height)
  //        var data=  context.getImageData(0,0,img.width,img.height).data
  //        console.log(data)
  //        var r=1,g=1,b=1;
  //       // 取所有像素的平均值
  //       for (var row = 0; row < img.height; row++) {
  //           for (var col = 0; col < img.width; col++) {
  //       // console.log(data[((img.width * row) + col) * 4])
  //               if(row==0){
  //                   r += data[((img.width * row) + col)];
  //                   g += data[((img.width * row) + col) + 1];
  //                   b += data[((img.width * row) + col) + 2];
  //               }else{
  //                   r += data[((img.width * row) + col) * 4];
  //                   g += data[((img.width * row) + col) * 4 + 1];
  //                   b += data[((img.width * row) + col) * 4 + 2];
  //               }
  //           }
  //       }
  //       // 求取平均值
  //       r /= (img.width * img.height);
  //       g /= (img.width * img.height);
  //       b /= (img.width * img.height);

  //       // 将最终的值取整
  //       r = Math.round(r);
  //       g = Math.round(g);
  //       b = Math.round(b);
  //       console.log(r,g,b)
  // }
  
   
  },
  destoryed(){
   
  }

};
</script>

<style scoped>
.swiper{
  width: 100%;
  height: 280px;
  
  
}
.bg{
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* filter: blur(10px); */
  float: left;
  
}
.swiper-button-next::after{
  font-size: 30px;
  color:rgba(255, 255, 255, 0.6);
}
.swiper-button-next,.swiper-button-prev{
  width: 35px;
  height: 35px;
}
.swiper-button-prev:hover,.swiper-button-next:hover{
  background-color: rgba(0, 0, 0, 0.5);
}
.swiper-button-prev::after{
  font-size: 30px;
  color: rgba(255, 255, 255, 0.6);
}
.swiper-slide img{
  width: 800px ;
  height: 280px;
}
.swiper-container ,.swiper-wrapper{
  width: 800px;
  height: 280px;
}
.swiper-container{
  margin: 0;
  --swiper-theme-color: #ff6600;/* 设置Swiper风格 */
  --swiper-navigation-color: #00ff33;/* 单独设置按钮颜色 */
  --swiper-navigation-size: 30px;/* 设置按钮大小 */
}
.content{
  width: 1024px;
  height: 280px;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  display: flex;
}
.left-bg{
  position: relative;
  width: 224px;
  height: 280px;
  background: url(https://s2.music.126.net/style/web2/img/index/download.png?48b888b2b9e3da6bf3746c732775cde8) no-repeat -14px 0;
}
.left-bg a{
  position: absolute;
  display: block;
  width: 216px;
  height: 55px;
  left: 50%;
  transform: translate(-50%);
  top: 184px;
  border-radius: 2px;
  background: url(https://s2.music.126.net/style/web2/img/index/download.png?48b888b2b9e3da6bf3746c732775cde8) no-repeat ;
  background-position: -18px -185px;
}
.left-bg a:hover{
  background-position: 1px -288px;
}
</style>
