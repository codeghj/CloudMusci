<!--  -->
<template>
  <div class="user-setting">
    <div class="setting-wrapper">
      <div class="setting-header">个人设置</div>
      <div class="setting-tabbar">
        <a
          href="javscript:;"
          v-for="(item, index) in tabbardata"
          :key="index"
          @click="choses(index)"
          :class="{
            active: currentindex == index,
            itemhover: agreehover == index,
          }"
          @mouseenter="changebg(index)"
          @mouseleave="noshow()"
          >{{ item }}</a
        >
      </div>
      <div class="setting-form-wrapper">
        <div class="form">
          <el-form ref="forms" :model="form" :rules="rules" label-width="60px" size="mini">
            <el-form-item label="昵称:" prop="nickname">
              <el-input v-model="form.nickname" size="mini"></el-input>
            </el-form-item>
            <el-form-item label="介绍:" prop="signature">
              <el-input
                type="textarea"
                v-model="form.signature"
                :rows="8"
                maxlength="300"
                show-word-limit
              ></el-input>
            </el-form-item>
            <el-form-item label="性别:" prop="gender">
              <el-radio v-model="form.gender" label="1">男</el-radio>
              <el-radio v-model="form.gender" label="2">女</el-radio>
              <el-radio v-model="form.gender" label="0">保密</el-radio>
            </el-form-item>
            <el-form-item label="生日:" prop="birthday">
              <el-date-picker
                v-model="form.birthday"
                type="date"
                placeholder="选择日期"
                format="yyyy 年 MM 月 dd 日"
                value-format="timestamp"
              >
              </el-date-picker>
            </el-form-item>
            <el-form-item label="地区:">
                <el-row :gutter="20">
                    <el-col :span="11"  prop="province">
                        <el-form-item prop="province">
                           <el-select v-model="form.province" placeholder="请输入省份" size="mini">
                <el-option
                  v-for="item in provinces"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
                        </el-form-item>
                        
                       
              </el-col>
                <el-col :span="11">
                    <el-form-item prop="city">
                        <el-select
                v-model="form.city"
                placeholder="请输入城市"
                @focus="getcity()"
                 size="mini"
              >
                <el-option
                  v-for="item in city"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>    
            </el-form-item>
              </el-col>
                </el-row>
            </el-form-item>
             <el-form-item >
             <el-button type="primary" style="margin-top:20px;" @click="sunmitdata()">保存</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="avatar">
          <img :src="profile.avatarUrl" alt="">
          <a href="javascript:;" @click="changeavator()">更换头像</a>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import areadata from "china-area-data";
import { request } from '../../../../../network';
import _ from 'lodash'


export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      tabbardata: ["基本设置", "绑定设置", "隐私设置"],
      currentindex: 0,
      agreehover: -1,
      provinces: [],
      profile:{},
      city: [],
      value: "",
      values: "",
      form: {
        nickname: "",
        signature: "",
        gender: "0",
        birthday: "",
        province:'',
        city:'',
        cookie: window.localStorage.getItem("cookie")
      },
      formdeep:{},
      rules:{
           nickname: [
            { required: true, message: '请输入昵称', trigger: 'blur' },
            { min: 6, max: 25, message: '长度在 15 到 25 个字符', trigger: 'blur' }
          ],
          gender: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          province: [
            {  required: true, message: '请选择省份', trigger: 'change' }
          ],
          city: [
            { required: true, message: '请选择城市', trigger: 'change' }
          ],
          birthday: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],   
      }
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    profile(){
      this.form.nickname=this.profile.nickname
    this.form.gender=this.profile.gender+''
    this.form.birthday=this.profile.birthday
    console.log(areadata)
    for(let key in areadata[86]){
        if(key==this.profile.province){
            this.form.province=areadata[86][key]
        }
    }
    for(let key in areadata[this.profile.province]){
        if(key==this.profile.city){
             this.form.city=areadata[this.profile.province][key]
        }
       
    } 
    }
  },
  //方法集合
  methods: {
    choses(index) {
      this.currentindex = index;
    },
    changebg(index) {
      if (index != this.currentindex) {
        this.agreehover = index;
      }
    },
    noshow() {
      this.agreehover = -1;
    },
    getareadata(area) {
      console.log(area);
      let options = [];
      for (let key in area) {
        let option = {
          label: "",
          value: "",
        };
        option.label = area[key];
        option.value = key;
        options.push(option);
      }
      console.log(options);
      return options;
    },
    getcity() {
      let regx=/^[\u4E00-\u9FA5]+$/
      if(regx.test(this.form.province)){
        let provin=this.form.province
                for(let key in areadata[86]){
                    if(areadata[86][key]==provin){
                        provin=key
                    }
                }
                this.city = this.getareadata(areadata[provin]);
                return
            } 
      this.city = this.getareadata(areadata[this.form.province]);
    },
    sunmitdata(){
        this.formdeep=_.defaultsDeep(this.formdeep,this.form)
        console.log(this.formdeep)
        this.$refs.forms.validate(async(valid)=>{
            this.formdeep.gender=parseInt(this.form.gender)
            let regx=/^[\u4E00-\u9FA5]+$/
            if(regx.test(this.formdeep.province)){
                for(let key in areadata[86]){
                    if(areadata[86][key]==this.formdeep.province){
                        this.formdeep.province=key
                    }
                }
            } 
             if(regx.test(this.formdeep.city)){
                for(let key in areadata[this.formdeep.province]){
                    if(areadata[this.formdeep.province][key]==this.formdeep.city){
                        this.formdeep.city=key
                    }
                }
            }
        const{data:res}= await request({url:'/user/update',params:this.formdeep})
        if(res.code==200){
         this.$forceUpdate()
         this.$message.success('保存成功')
         console.log(res)
        }
       
        })
    },
   async getprofile(){
        const{data:res}=await request({url:'/user/detail',params:{cookie:window.localStorage.getItem('cookie'),uid:JSON.parse(window.localStorage.getItem('loginstate')) .userId}})
         if(res.code==200){
             this.profile=res.profile
             console.log(res)
         }
    },
    changeavator(){
      
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getprofile()
    this.provinces = this.getareadata(areadata[86]);
    console.log(this.form)
    // setTimeout(()=>{
    // this.form.nickname=this.profile.nickname
    // this.form.gender=this.profile.gender+''
    // this.form.birthday=this.profile.birthday
    // console.log(areadata)
    // for(let key in areadata[86]){
    //     if(key==this.profile.province){
    //         this.form.province=areadata[86][key]
    //     }
    // }
    // for(let key in areadata[this.profile.province]){
    //     if(key==this.profile.city){
    //          this.form.city=areadata[this.profile.province][key]
    //     }
       
    // }    },500)
    
   
   
  },

  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
      
  },
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
.user-setting {
  width: 950px;
  min-height: 1000px;
  margin: 0 auto;
  background-color: white;
}
.user-setting::before {
  content: "";
  display: table;
}
.setting-wrapper {
  width: 850px;
  margin: 0 auto;
  margin-top: 40px;
}
.setting-header {
  font-size: 25px;
  font-weight: 300px;
}
.setting-tabbar {
  margin-top: 10px;
  width: 850px;
  height: 40px;
  line-height: 40px;
  background: url("~@/assets/Image/tab.png");
  background-position: 0 0px;
  border-right: 1px solid #ccc;
  border-left: 1px solid #ccc;
}
.setting-tabbar a {
  display: inline-block;
  text-decoration: none;
  width: 150px;
  color: rgba(0, 0, 0, 0.8);
  font-size: 15px;
  text-align: center;
}

.active {
  background: url("~@/assets/Image/tab.png");
  background-position: 0 -91px;
}
.itemhover {
  background: url("~@/assets/Image/tab.png");
  background-position: 0 -45.5px;
}
.setting-form-wrapper {
  width: 850px;
  margin: 0 auto;
  margin-top: 40px;
  display:  flex;
}
.form {
  width: 300px;
}
.avatar{
  width: 160px;
  height: 160px;
  margin-left: 30px;
  position: relative;
}
.avatar img{
  width: 160px;
  height: 160px;

}
.avatar a{
  position: absolute;
  width: 160px;
  height: 30px;
  line-height: 30px;
  background-color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
  color: white;
  text-align: center;
  font-size: 12px;
  bottom: 0;
  left: 0;
}
.avatar a:hover{
  text-decoration: underline;
}
</style>
