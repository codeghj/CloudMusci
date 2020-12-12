import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import {Message} from 'element-ui'
import{MessageBox} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element)
Vue.prototype.$bus=new Vue()
Vue.component(Message.name,Message)
Vue.component(MessageBox.name,MessageBox)
Vue.prototype.$message=Message
Vue.prototype.$confirm=MessageBox
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
