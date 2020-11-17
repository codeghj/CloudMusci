<template>
  <div class="song-ground-cat-item">
     <songgrounditem v-for="(item,index) in albums1" :key="index" :groundData="item"></songgrounditem>
      <div class="songpage-pagination">
          <el-pagination
             :bacground= "true"
             :page-size="this.query.limit"
             layout="prev, pager, next"
             :current-page="getpage"
             @current-change="handleCurrentChange"
            :total="total">
           </el-pagination>
      </div>
  </div>
   

</template>

<script type="text/javascript">
import songgrounditem from './SongGroundItem'

import {request} from '@/network/index.js'
export default {
  data() {
    return {
       albums1:[],
       query:{
          limit:35,
          offset:0,
          area:'ALL'
      },
      total:0
    }
  },
  created(){
    this.getcatgroundingData()
  },
  computed:{
    getpage(){
      return this.query.offset/this.query.limit+1
    }
  },
  methods:{
    async getcatgroundingData(){
         const{data:res}=await request({url:'/album/new',params:this.query})
         console.log(res)
         this.albums1=res.albums
         this.total=res.total
      },
      handleCurrentChange(val){
        this.query.offset=(val-1)*35
        this.getcatgroundingData()
      }
  },
  components: {
   songgrounditem
  },
  watch:{
    $route(){
       this.query.area=this.$route.query.area
       this.getcatgroundingData()
    }
  }
}
</script>

<style  scoped>
.song-ground-cat-item{
    width: 950px;
    margin: 0 auto;
    margin-top: 20px;
    padding-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.songpage-pagination{
  width: 100%;
  margin-top: 40px;
}
.el-pagination{
    width: 400px;
    margin: 0 auto;
    font-size: 20px;
    height: 80px;
    
}
/* .el-pagination .el-pager .number{
    background-color: rgb(192,10,14);
} */
.el-pager li.active{
    background-color: rgb(192,10,14);
    color: white;
}
.el-pager li:hover{
    color:black;
}
.el-pagination button:hover{
    color:  rgb(192,10,14);
}
</style>
