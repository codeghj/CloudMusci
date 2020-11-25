<template>
  <div class="bar-common">
     <ul class=" bar-common-center" v-if="barItem.length!=0? true:false">
        <li v-for="( item,index) in barItem" :key="index"@click="changePage(index)"><a  :class="{activebg:currentIndex==index}" @click="changeactive(index)">{{item}}</a></li>
     </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
        currentIndex:0,

    }
  },
  props:{
   barItem:{
       type:Array,
       default(){
           return []
       }
   }
  },
  mounted(){
  this.$bus.$on('changebarcommonCurrentIndex',()=>{
      this.currentIndex=2
  })
  this.$bus.$on('toalbum',()=>{
      this.currentIndex=5
  })
  if(this.$route.path.indexOf('/discover/playlist')!=-1){
      this.currentIndex=2
  }else if(this.$route.path.indexOf('/discover/album')!=-1){
      this.currentIndex=5
  }
         
  },
  components: {

  },
  methods:{
      changeactive(index){
          this.currentIndex=index
      },
      changePage(index){
          switch(index){
              case 0:
                  this.$router.push('/discover')
                  break;
              case 1:
                   this.$router.push('/discover/toplist')
                   console.log(1)
                  break;
              case 2:
                   this.$router.push('/discover/playlist')
                   break;
              case 5:
                  this.$router.push('/discover/album')     
          }
      }
  }
}
</script>

<style  scoped>
.bar-common{
    background-color: rgb(194,12,12);
}
.bar-common-center{
    display: flex;
    width: 40%;
    list-style: none;
    margin: 0;
    padding: 0;
    margin-left: 23%;
    
}
.bar-common-center li{
    flex: 1;
    position: relative;
    height: 40px;
}
.bar-common-center li:first-child{
    margin-left: -8px;
}

.bar-common-center li a{
    display: inline-block;
    width: 60px;
    height: 20px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    text-decoration: none;
    color: white;
    font-size: 12px;
    text-align: center;
    line-height: 20px;

}
.bar-common-center li a:hover{
      background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
}

.activebg{
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
}
</style>
