import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: ()=>import('@/components/LandingPage')
    },
    {
      path:'/',
      redirect: 'login'
    },
    {
      path: '/login',
      name:'login',
      component: ()=>import('@/components/Login/login')
    }
  ]
})
