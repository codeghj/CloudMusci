<template>
  <div id="app">
    <router-view></router-view>
   
  </div>
</template>

<script type="text/javascript">
import {request} from './network/index'
export default {
  created(){
  //  this.getdata()
  },
  data() {
    return {

    }
  },
  methods:{ 
  //  async getdata(){
  //  const res= await request({url:'/search',params:{keywords:'海阔天空'}})
  //  console.log(res)
  // }
  },
  components: {

  }
}
</script>

<style lang="less">
body{
  margin: 0;
  padding: 0;
  background-color: #eee;
}
#app{
  
}
</style>


