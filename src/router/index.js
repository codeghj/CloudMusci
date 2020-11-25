import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
 {
   path:'/',
   name:'home',
   component:()=>import('../views/home/home.vue'),
   children:[
     {
     path:'/discover',
     name:'discover',
     component:()=>import('../views/home/recomand/Recomand.vue'),
     alias:'/'
     },
     {
       path:'/discover/playlist',
       component:()=>import('../views/home/homeprops/songpage/SongPage.vue')
     },
     {
       path:'/discover/album',
       component:()=>import('../views/home/homeprops/newsonggrounding/NewSongGround'),
       children:[
         {
           path:'m',
           component:()=>import('../views/home/homeprops/newsonggrounding/newsonggroundingprops/catitem'),
           alias:'/discover/album'
         }
       ]

     },
     {
       path:'/user',
       component:()=>import('../views/home/homeprops/user/User.vue'),
       children:[
         {
           path:'home',
           component:()=>import('../views/home/homeprops/user/userProps/UserHome.vue'),
           meta:{
             requireauth:true
           }
         },
         {
           path:'event',
           component:()=>import('../views/home/homeprops/user/userProps/UserEvent.vue'),
           meta:{
            requireauth:true
          }
         },
         {
           path:'follows',
           component:()=>import('../views/home/homeprops/user/userProps/UserFllows.vue'),
           meta:{
            requireauth:true
          }
         },
         {
           path:'fans',
           component:()=>import('../views/home/homeprops/user/userProps/UserFans.vue'),
           meta:{
            requireauth:true
          }
         },
         {
           path:'update',
           component:()=>import('../views/home/homeprops/user/userProps/UserSetting.vue'),
           meta:{
            requireauth:true
          }
         }
       ]
     },
     {
       path:'/discover/toplist',
       component:()=>import('../views/home/homeprops/topplaylist/TopPlayList.vue')
     }

    
    ]
   
 },
 
]

const router = new VueRouter({
  routes,
  

})
router.beforeEach((to,from,next)=>{
  if(to.meta.requireauth){
    if(window.localStorage.getItem('loginstate')!=null){
      next()
    }else{
      next('/')
    }
  }
  next()
})

export default router
