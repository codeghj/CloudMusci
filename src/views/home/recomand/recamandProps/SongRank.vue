<template>
  <div class="song-rank">
   <el-breadcrumb >
  <el-breadcrumb-item><a href="#">榜单</a> </el-breadcrumb-item>
  <el-breadcrumb-item class="more">更多</el-breadcrumb-item>
</el-breadcrumb>
  <div class="rank-list">
   <el-row>
       <el-col :span="8" v-for="(item,index) in imglist" :key="index">
           <div class="col-header"> 
               <img :src="item.coverImgUrl" alt="">
               
               <div class="col-header-desc">
                 <span class="rankname">{{item.name}}</span>
                 <div class="icons">
                     <el-tooltip class="item" effect="light" content="播放" placement="bottom-start" :visible-arrow="false" >
                     <img src="~@/assets/Image/bofang2.svg" alt="" style="width:20px;height:20px;margin-right:10px" v-if="isactive==index" @mouseleave="active()"> 
                     <img src="~@/assets/Image/bofang2deapth.svg" alt="" style="width:20px;height:20px;margin-right:10px" v-else  @mouseenter="changeactive(index)">
                     </el-tooltip>
                     <el-tooltip class="item" effect="light" content="收藏" placement="bottom-start" :visible-arrow="false" >
                     <img src="~@/assets/Image/shoucangjia1.svg" alt="" style="width:20px;height:20px" v-if="isactives==index"  @mouseleave="actives()">
                     <img src="~@/assets/Image/shoucangjia1deapth.svg" alt="" style="width:20px;height:20px" v-else @mouseenter="changeactives(index)" >
                     </el-tooltip>
                 </div>
               </div>
            </div>
       
       </el-col>

   </el-row>
   <el-row>
     <el-col :span="8" class="tabel">
      <div class="songli" v-for="(item,index) in rankdata['top'].list" :class="{limitsong:setclass1==index}" @mouseenter="songisactives1(index)" @mouseleave="songisactives1false()" ref="songli1">
          <span ref="songli1item1">{{index+1}}</span>
          <span ref="songli1item2" :class="{limitwidth:setclass1==index}" class="spanwidth"> <a href="#">{{item.name}}</a></span> 
          <i v-show="songisactive1==index" ref="songli1item3">
            <el-tooltip class="item" effect="light" content="播放" placement="bottom-start" :visible-arrow="false" >
            <img src="~@/assets/Image/bofang2.svg" alt="" style="width:18px;height:18px;margin-right:8px" >
             </el-tooltip>
            <el-tooltip class="item" effect="light" content="添加到播放列表" placement="bottom-start" :visible-arrow="false" >
            <img src="~@/assets/Image/jiahaodeapth.svg" alt="" style="width:18px;height:18px;margin-right:8px" >
            </el-tooltip>
             <el-tooltip class="item" effect="light" content="收藏" placement="bottom-start" :visible-arrow="false" >
            <img src="~@/assets/Image/shoucangjia1.svg" alt="" style="width:18px;height:18px;margin-right:8px" >
            </el-tooltip>
            </i>
          </div>
          <div class="songlin-bottom">
                <a href="#">查看更多></a>
            </div>
     </el-col>
      <el-col :span="8" class="tabel">
       <div class="songli" v-for="(item,index) in rankdata['new'].list" :class="{limitsong:setclass2==index}" @mouseenter="songisactives2(index)" @mouseleave="songisactives2false()" ref="songli2">
           <span ref="songli2item1">{{index+1}}</span>
           <span ref="songli2item2" :class="{limitwidth:setclass2==index}" class="spanwidth"> <a href="#">{{item.name}}</a></span>
             <i v-show="songisactive2==index"  ref="songli2item3">
            <el-tooltip class="item" effect="light" content="播放" placement="bottom-start" :visible-arrow="false" >
            <img src="~@/assets/Image/bofang2.svg" alt="" style="width:18px;height:18px;margin-right:8px" >
             </el-tooltip>
            <el-tooltip class="item" effect="light" content="添加到播放列表" placement="bottom-start" :visible-arrow="false" >
            <img src="~@/assets/Image/jiahaodeapth.svg" alt="" style="width:18px;height:18px;margin-right:8px" >
            </el-tooltip>
             <el-tooltip class="item" effect="light" content="收藏" placement="bottom-start" :visible-arrow="false" >
            <img src="~@/assets/Image/shoucangjia1.svg" alt="" style="width:18px;height:18px;margin-right:8px" >
            </el-tooltip>
            </i>
           </div>
           <div class="songlin-bottom">
                <a href="#">查看更多></a>
            </div>
      </el-col>
       <el-col :span="8" class="tabel">
        <div class="songli" v-for="(item,index) in rankdata['sell'].list" :class="{limitsong:setclass==index}" @mouseenter="songisactives3(index)" @mouseleave="songisactives3false()" ref="songli">
            <span ref="songliitem1">{{index+1}}</span>
            <span  ref="songliitem2" :class="{limitwidth:setclass==index}" class="spanwidth"> <a href="#" >{{item.name}}</a></span>
            <i v-show="songisactive3==index"  ref="songliitem3">
            <el-tooltip class="item" effect="light" content="播放" placement="bottom-start" :visible-arrow="false" >
            <img src="~@/assets/Image/bofang2.svg" alt="" style="width:18px;height:18px;margin-right:8px" >
             </el-tooltip>
            <el-tooltip class="item" effect="light" content="添加到播放列表" placement="bottom-start" :visible-arrow="false" >
            <img src="~@/assets/Image/jiahaodeapth.svg" alt="" style="width:18px;height:18px;margin-right:8px" >
            </el-tooltip>
             <el-tooltip class="item" effect="light" content="收藏" placement="bottom-start" :visible-arrow="false" >
            <img src="~@/assets/Image/shoucangjia1.svg" alt="" style="width:18px;height:18px;margin-right:8px" >
            </el-tooltip>
            </i>
            </div>
            <div class="songlin-bottom">
                <a href="#">查看更多></a>
            </div>
       </el-col>

   </el-row>

  </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
       isactive:-1,
       isactives:-1,
       songisactive1:-1,
       songisactive2:-1,
       songisactive3:-1,
       setclass:-1,
       setclass1:-1,
       setclass2:-1
    }
  },
  props:{
      rankdata:{
          type:Object,
          default(){
              return {}
          }
      },
      imglist:{
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
      changeactive(index){
          this.isactive=index
      },
       changeactives(index){
          this.isactives=index
      },
      active(){
          this.isactive=-1
      },
      actives(){
          this.isactives=-1
      },
      songisactives1(index){
         this.songisactive1=index
          this.$nextTick(()=>{
              let width=this.$refs.songli1[index].offsetWidth
              let width1= this.$refs.songli1item1[index].offsetWidth
              let width2=this.$refs.songli1item2[index].offsetWidth
              let width3=this.$refs.songli1item3[index].offsetWidth
              let allwidth=width1+width2+width3
             
              if(allwidth>164)
              {
                 this.setclass1=index
              }
             
          })
      },
      songisactives1false(){
        this.songisactive1=-1
        this.setclass1=-1
      },
      songisactives2(index){
       this.songisactive2=index
        this.$nextTick(()=>{
              let width=this.$refs.songli2[index].offsetWidth
              let width1= this.$refs.songli2item1[index].offsetWidth
              let width2=this.$refs.songli2item2[index].offsetWidth
              let width3=this.$refs.songli2item3[index].offsetWidth
              let allwidth=width1+width2+width3
              
              if(allwidth>164)
              {
                 this.setclass2=index
              }
             
          })
      },
      songisactives2false(){
        this.songisactive2=-1
        this.setclass2=-1
      },
      songisactives3(index){
      this.songisactive3=index
       this.$nextTick(()=>{
              let width=this.$refs.songli[index].offsetWidth
              let width1= this.$refs.songliitem1[index].offsetWidth
              let width2=this.$refs.songliitem2[index].offsetWidth
              let width3=this.$refs.songliitem3[index].offsetWidth
              let allwidth=width1+width2+width3
             
              if(allwidth>164)
              {
                 this.setclass=index
              }
             
          })
      },
       songisactives3false(){
       this.songisactive3=-1
       this.setclass=-1
      },
      getwidth(){
         
      }
      
  
  },
  updated(){
     
  }
}
</script>

<style  scoped>
.more{
    float: right;
}
.el-breadcrumb{
    width: 750px;
}
.rank-list{
    width: 750px;
    margin-top: 20px;
    background-color: rgb(244,244,244);
    border:solid 2px rgb(210,210,210);
    
}
.rankname:hover{
 text-decoration: underline;
}
.el-col{
    border-right: solid 2px rgb(210,210,210);
    position: relative;
}
.el-col:last-child{
    border-style: none;
}
.el-col img{
    width: 80px;
    height: 80px;
    float: left;
}
.col-header{
    width: 80%;
    height: 100px;
    margin-left: 20px;
    display: flex;
    align-items: flex-start;
    margin-top: 20px;
    
}
.col-header-desc{
    margin-left: 10px;
}
.col-header-desc span{
    font-size: 13px;
    font-weight: bold;
    color: rgba(0, 0, 0,0.7);
}
.songli{
   background-color:  rgb(232,232,232);
   line-height: 30px;
   padding-left: 20px;
   position: relative;
}
.songli span{
  color:rgba(0, 0, 0,0.7);
  margin-left: 10px;
}
.icons{
    margin-top: 10px;
}
.songli a{
    color: rgba(0, 0, 0,0.9);
    font-size: 13px;
    text-decoration: none;
}
.songli a:hover{
    text-decoration: underline;
}
.songli i{
    float: right;
    margin-right: 15px;
}
.songli i::after{
    content: '';
    display: table;
}
.songli:hover a{
    text-decoration: underline;
}
.el-col div:nth-child(even){
    background-color: rgba(244,244,244);
}
.tabel div:nth-child(-n+3) span{
    color: red !important;
}
.el-col img{
    float: none;
    position: relative;
    top: 5px;
    
}
.songlin-bottom{
    background-color:  rgb(232,232,232)!important;
    height: 30px;
   line-height: 30px;
}
.songlin-bottom:hover a{
    text-decoration: underline;
}
.songlin-bottom a{
   color: rgba(0, 0, 0,0.9);
    font-size: 13px;
    text-decoration: none;
    float: right;
    margin-right: 30px;
}
.limitwidth{
    position: absolute;
    width: 60px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.spanwidth{
     position: absolute;
    width: 120px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.tabel div:nth-last-child(2) span:first-child{
    margin-left: 5px;
}
</style>
