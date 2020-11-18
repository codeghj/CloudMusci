<!--  -->
<template>
  <div class="users-event">
    <div class="avatar">
      <img :src="events.user.avatarUrl" alt="" />
    </div>
    <div class="event-contain">
      <div class="event-header">
        <a href="javascript:;" class="user-name">{{ events.user.nickname }}</a>
        <span class="meta">{{ events.type | gettype }}</span>
      </div>
      <div class="publish-time">
        <a href="javascript:;">{{events.showTime | gettime}}</a>
      </div>
      <div class="event-message">{{events.json.msg}}</div>
      <div class="event-musci">
          <div class="song-bg" @mouseenter="changisshow()" @mouseleave="changisshow()">
              <a href="javascript:;">
                  <img :src="events.json.song.album.blurPicUrl" alt="">
              <img src="~@/assets/Image/bofangliang.svg" alt="" v-if="isshow">
              <img src="~@/assets/Image/bofangliangwhite.svg" alt="" v-else>
              </a>
              
          </div>
          <div class="song-meta">
             <div class="song-name"><a href="javascript:;"> {{events.json.song.name}}</a></div>
             <div class="song-artists"><a href="javascript:;">{{events.json.song.artists[0].name}}</a> </div>
          </div>
      </div>
      <div class="event-option">
          <div class="event-option-wrapper">
              <a href="javascript:;" class="event-dz"><img src="~@/assets/Image/dz.svg" alt=""></a>
              <a href="javascript:;">转发</a>
              <a href="javascript:;">评论</a>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {time} from '@/utils/time'
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
        isshow:true,
    };
  },
  props: {
    events: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  filters: {
    gettype(val) {
      switch (val) {
        case 18:
          return "分享单曲";
          break;
        case 19:
          return "分享专辑";
          break;
        case 17||28:
          return "分享电台节目";
          break;
        case 22:
          return "转发";
          break;
        case 39:
          return "发布视频";
          break;
        case 35||13:
          return "分享歌单";
          break;
        case 24:
          return "分享专栏文章";
          break;
        case 41||21:
          return "分享视频";
          break;
      }
    },
     gettime(val){
       var date=new Date(val)
      return time(date,'yyyy-MM-dd hh:mm:ss')
     }
  },
  //方法集合
  methods: {
      changisshow(){
          this.isshow=!this.isshow
      }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
.users-event {
  display: flex;
   width: 550px;
   border-bottom: 1px solid #ccc;
    margin-top: 40px;
   min-height:211px ; 

}
.avatar {
  margin-right: 10px;
}
.avatar img {
  width: 60px;
  height: 60px;
}
.user-name {
  text-decoration: none;
  color: rgb(12, 133, 216);
  margin-right: 5px;
}
.meta{
 font-size: 15px;
 color: rgba(0, 0, 0,0.6);
}
.publish-time{
margin-top: 8px;
}
.publish-time a{
    text-decoration: none;
    color: rgba(0, 0, 0,0.6);
    font-size: 12px;
    
}
.event-header a:hover,.publish-time a:hover{
    text-decoration: underline;
}
.event-message{
    width: 100%;
    margin-top: 15px;
    margin-bottom: 8px;
    word-break: break-all;
}
.event-musci{
    width: 480px;
    height: 60px;
    background-color: rgb(245,245,245);
    display: flex;
    align-items: center;
}
.song-bg{
    margin-left: 10px;
    margin-right: 10px;
    position: relative;
}
.song-bg img:last-child{
    position: absolute;
    width: 20px;
    height: 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.song-bg img{
    width: 40px;
    height: 40px;
}
.song-meta{
    margin-top: -5px;
}
.song-meta a:hover{
    text-decoration: underline;
}
.song-name{
   margin-bottom: 5px;
}
.song-name a{
    color: black;
    text-decoration: none;
}
.song-artists a{
  font-size: 11px;
  color: rgba(0, 0, 0,0.6);
  text-decoration: none;
}
.event-option{
    height: 60px;
    display: flex;
    justify-content: flex-end;
}
.event-option-wrapper{
    line-height: 60px;
}
.event-option-wrapper a{
    text-decoration: none;
    color: rgb(12, 133, 216);
    display: inline-block;
    font-size: 13px;
    height: 60px;
    width: 60px;
    text-align: center;
    position: relative;

}
.event-option-wrapper a:not(:first-child):hover{
    text-decoration: underline;
}
.event-option-wrapper a:not(:last-child)::after{
    content: '';
    width: 1px;
    height: 12px;
    background-color: rgba(0, 0, 0,0.4);
    position: absolute;
    top: 23px;
    left: 58px;
}
.event-dz img{
    width: 18px;
    height: 18px;
    position: relative;
    top: 3px;
}
</style>
