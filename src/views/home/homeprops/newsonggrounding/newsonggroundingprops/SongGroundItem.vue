<template>
  <div class="song-ground-item">
      <div class="item-img" @mouseenter="playshow()" @mouseleave="playleave()"> <img :src="groundData.blurPicUrl" alt=""></div>
      <div class="item-desc"> <a href="javascript:;">{{groundData.name}}</a></div>
      <div class="item-name" v-if="groundData.artists.length>1">
          <a href="javascript:;" v-for="(item,index) in groundData.artists" >{{item.name}}</a>
      </div>
       <div class="item-name" v-else>
          <a href="javascript:;" >{{groundData.artists[0].name}}</a>
      </div>

      <div class="icon" :class="{iconshow: playisshow}">
        <img src="~@/assets/Image/bofangblack.svg" alt="">
      </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
        playisshow:false,
    }
  },
  props:{
   groundData:{
       type:Object,
       default(){
           return {}
       }
   }
  },
  components: {

  },
  methods:{
      playshow(){
        this.playisshow=true
      },
      playleave(){
       this.playisshow=false
      }
  }
}
</script>

<style  scoped>
.song-ground-item{
    width: 168px;
    height: 210px;
    margin-bottom: 20px;
    position: relative;
}
.item-img img{
    width: 146px;
    height: 154px;

}
.item-name a{
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
    text-decoration: none;
   
}

.item-name {
    margin-top: 10px;
    width: 168px;
     overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

}
.item-desc a{
    width: 168px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: black;
    text-decoration: none;
}
.item-desc a:hover,.item-name a:hover{
    text-decoration: underline;
}
.item-name a:not(:last-child)::after{
   content: '/';
   padding: 0 10px;
   text-decoration: none;
}
.icon{
    display: none;
    position: absolute;
    top: 121px;
    left: 110px;
}
.icon img{
    width: 35px;
    height: 35px;
}
.iconshow{
    display: block;
}
</style>
