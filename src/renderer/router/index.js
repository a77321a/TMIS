import Vue from 'vue'
import Router from 'vue-router'
// const index = import('@/components/Home/index')
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: 'login'
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/components/Login/login')
        },
        {
            path: '/index',
            name: 'index',
            component:()=> import('@/components/Home/index'),
        },
        {
            path: 'singer',
            name: 'singer',
            component:() => import('@/components/Singer/singer')
        },
        {
            path: 'recommend',
            name: 'recommend',
            component:() => import('@/components/Recommend/recommend')
        },
        {
            path: 'search',
            name: 'search',
            component:() => import('@/components/Search/search')
        },
    ]
})
