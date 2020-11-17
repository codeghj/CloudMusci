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
           component:()=>import('../views/home/homeprops/user/userProps/UserHome.vue')
         },
         {
           path:'event',
           component:()=>import('../views/home/homeprops/user/userProps/UserEvent.vue')
         },
         {
           path:'fllows',
           component:()=>import('../views/home/homeprops/user/userProps/UserFllows.vue')
         },
         {
           path:'fans',
           component:()=>import('../views/home/homeprops/user/userProps/UserFans.vue')
         }
       ]
     }

    
    ]
   
 },
 
]

const router = new VueRouter({
  routes,
  

})

export default router
