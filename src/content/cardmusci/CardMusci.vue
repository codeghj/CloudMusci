<template>
  <div class="card-musci" v-if="muscicard.length!=0">
      <div class="page-header"><slot name="PageHeader"></slot></div>
      <div class="card-musci-item-wrapper" :class="{songpage:$route.path.indexOf('/discover/playlist')!=-1}"><cardmusciitem v-for="(item,index) in  muscicard" :key="index" :carditem="item"></cardmusciitem></div>
  </div>
</template>

<script type="text/javascript">
import cardmusciitem from './CardMsciItem'
export default {
  data() {
    return {

    }
  },
  props:{
      muscicard:{
          type:Array,
          default(){
              return []
          }
      }
  },
  components: {
  cardmusciitem  
  }
}
</script>

<style  scoped>

.card-musci .card-musci-item-wrapper{
    width: 750px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;
}
.card-musci .songpage{
  width: 950px;
  margin: 0px 37px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
}

.page-header::after{
   height: 5px;
}
</style>
