<template>
  <div class="home-card-musci" v-if="cardmusci.length!=0">
    <cardmusci class="card-musci" :muscicard="cardmusci">
      <div class="page-header" slot="PageHeader">
        <el-breadcrumb separator="|">
          <el-breadcrumb-item  class="item"><a href="#" @click="tosongpage()">热门推荐</a> </el-breadcrumb-item>
          <el-breadcrumb-item class="item"><a href="#">华语</a></el-breadcrumb-item>
          <el-breadcrumb-item class="item"><a href="#">流行</a> </el-breadcrumb-item>
          <el-breadcrumb-item class="item"><a href="#">摇滚</a> </el-breadcrumb-item>
          <el-breadcrumb-item class="item"><a href="#">民谣</a> </el-breadcrumb-item>
          <el-breadcrumb-item class="item"><a href="#">电子</a> </el-breadcrumb-item>
          <el-breadcrumb-item class=" more"><a href="#">更多</a> </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </cardmusci>
  </div>
</template>

<script type="text/javascript">
import cardmusci from "@/content/cardmusci/CardMusci";
export default {
  data() {
    return {};
  },
  props:{
      cardmusci:{
        type:Array,
         default(){
          return []
      }
      }
  },
  components: {
    cardmusci,
  },
  methods:{
    tosongpage(){
      this.$router.push('/discover/playlist')
      this.$bus.$emit('changebarcommonCurrentIndex')
    }
  }
};
</script>

<style scoped>
.el-breadcrumb{
  width: 750px;
}
.more{
    float: right;
}


</style>
