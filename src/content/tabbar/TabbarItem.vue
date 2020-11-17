<template>
  <div class=" Tabbar-item">
    <div class="item-left"><slot name="left"></slot></div>
    <div class="item-center"><slot name="center"></slot></div>
    <div class="item-right"><slot name="right"></slot></div>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
.Tabbar-item {
  width: 1150px;
  height: 70px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
.item-left {
  flex: 1;
}
.item-center {
  flex: 4;
}
.item-center ul {
  list-style: none;
  height: 70px;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 14px;
  padding: 0;
  margin: 0;
}
.item-center li {
  flex: 1;
  position: relative;
  height: 100%;
}
.item-center li:nth-child(-n+2){
  flex: 1.5;
}
.item-center li:last-child{
  flex: 1.5;
}

.item-center li a:hover {
  background-color: #000;
  color: rgb(255, 255, 255);
}
.item-center li a {
  display: inline-block;
  width: 100%;
  height: 70px;
  line-height: 70px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.6);
}
.item-center .icon {
  width: 0;
  height: 0;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent red transparent;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
}
.bg {
  background-color: #000;
  color: white !important;
}
.item-right {
  flex: 2;
}
.item-right .create {
  width: 90px;
  font-size: 12px;
  height: 30px;
  text-align: center;
  margin-left: 20px;
}
.loginbutton a{
    margin-left: 20px;
    display: inline-block;
    width: 30px;
    font-size: 12px;
    color: rgba(255, 255, 255,0.6);
    text-decoration: none;
}
.loginbutton a:hover{
    text-decoration: underline;
    color: rgba(255, 255, 255,0.4);
}
.item-right .create a:hover {
  border: solid 1px rgba(255, 255, 255);
  color: rgba(255, 255, 255) !important ;
}
.item-right .create a {
  display: inline-block;
  width: 90px;
  height: 30px;
  line-height: 30px;
  border-radius: 20px;
  color: rgba(255, 255, 255, 0.6);
  border: solid 1px rgba(255, 255, 255, 0.6);
  text-decoration: none;
}
.query-form {
  margin-left: 100px;
}
.query-form input {
  display: inline-block;
  height: 30px;
  border-radius: 20px;
  border-style: none;
  background: url(~@/assets/Image/search.svg) no-repeat 8px 8px;
  background-color: white;
  padding-left: 30px;
}
</style>
