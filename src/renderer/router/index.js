import Vue from 'vue'
import Router from 'vue-router'
// const index = import('@/components/Home/index')
import index from '@/components/Home/index'
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
            component: index
        }
    ]
})
