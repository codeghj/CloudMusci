import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  loginstate:{},
  },
  mutations: {
    setloginsate(state,loginstate){
      state.loginstate=loginstate
     window.localStorage.setItem('loginstate',JSON.stringify(loginstate))
    },
    deleteloginstate(state){
     state.loginstate={}
    }
 
  },
  getters:{
   getloginstate(state){
     return state.loginstate
   }
  },
  actions: {

  },
  modules: {
    
  }

})
