<template>
  <div class="card-musci-item">
      <div class="card-musci-item-sj" :class="{songpageitemsj:$route.path.indexOf('/discover/playlist')!=-1}">
          <div class="img-header">
          <img :src="carditem.coverImgUrl" alt="">
           <div class="play-button">
               <div ><img src="~@/assets/Image/iconej-.svg" alt=""></div>
               <span class="playcount">{{carditem.playCount|playcount}}</span>
               <a href="#"><img src="~@/assets/Image/bofangliang.svg" alt="" v-if=" imgactive" @mouseenter="enteractive()"> <img src="~@/assets/Image/bofangliangwhite.svg" alt="" v-else @mouseleave="leaveactive()"></a>

           </div>
          </div>
          <div class="description"><a href="#">{{carditem.name}}</a></div>
          <div class=song-page-item-bottem v-if="$route.path.indexOf('/discover/playlist')!=-1">
          <span class=item-bottom-left>by</span>
          <span class=item-bottom-center><a href="#">{{carditem.creator.nickname}}</a> </span>
          <span class="item-bottom-right" >
              <img v-if="carditem.creator.avatarDetail!=null" :src="carditem.creator.avatarDetail.identityIconUrl" alt="">
            
          </span>
          </div>

        </div>
   
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
       imgactive:true,
    }
  },
  props:{
      carditem:{
          type:Object,
          default(){
              return {}
          }
      }
  },
  filters:{
    playcount(value){
        if(value<100000) return value
        return (value/10000).toFixed(0)+'万'
    }
  },
  components: {

  },
  methods:{
      enteractive(){
          this.imgactive=false
      },
      leaveactive(){
          this.imgactive=true
      }

  }
}
</script>

<style  scoped>
.card-musci-item-sj{
    width: 155px;
    height: 260px;
}
.songpageitemsj{
    width: 159px;

}
.songpageitemsj .description{
    margin-top: 10px;
}
.songpageitemsj .description a{
    display: inline-block;
    width: 155px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.img-header{
    width: 155px;
    height: 175px;
    position: relative;
}

.card-musci-item-sj img{
   width: 155px;
   height: 175px;
}
.play-button{
    position: absolute;
    width: 100%;
    height: 30px;
    background-color: rgba(0, 0, 0, 0.5);
    bottom: 0;
    color: #aaa;
    font-size: 13px;
    display: flex;
    align-items: center;
}
.play-button :first-child{
    margin-left: 5px;
}
.play-button a{
    display: block;
    margin-top: 3px;
    margin-right: 10px;
}
.play-button img{
    width: 25px;
    height: 25px;
}
.playcount{
    flex: 1;
}
.description a{
    color: black;
    text-decoration: none;
}
.description a:hover{
    text-decoration: underline;
}
.song-page-item-bottem{
    display: flex;
    align-items: flex-start;
}
.item-bottom-right img{
    width: 12px;
    height: 12px;
}
.item-bottom-left {
    color: rgba(0, 0, 0, 0.5);
    font-size: 13px;
    margin-right: 2px;
    
}
.item-bottom-center a{
    display: inline-block;
    width: 90px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.5);
    text-decoration: none;

}
.item-bottom-center a:hover{
    text-decoration: underline;
}
</style>
