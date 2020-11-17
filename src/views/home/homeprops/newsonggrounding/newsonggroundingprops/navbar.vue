<template>
  <div class="bav-bar">
   <div class="bar-nav-title">
    {{title}}
   </div>
   <div class="bar-nav-second-title">
       <slot name="bar-nav-second-title"></slot>
   </div>
  </div>
</template>

<script type="text/javascript">

export default {
  data() {
    return {

    }
  },
  props:{
      title:{
          type:String,
          defaault(){
              return ''
          }
      }
  },
  components: {

  }
}
</script>

<style  scoped>
.bav-bar{
    display: flex;
    align-items: center;
}
.bar-nav-title{
    font-size: 25px;
}
</style>
