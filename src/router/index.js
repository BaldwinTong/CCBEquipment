import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: 'Bill'
    }, {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('../views/About.vue')
    }, {
        path: '/white',
        name: 'White',
        component: () =>
            import ('../views/white.vue')
    }, {
        path: '/deal',
        name: 'Deal',
        component: () =>
            import ('../views/deal.vue')
    }, {
        path: '/bill',
        name: 'Bill',
        component: () =>
            import ('../views/Bill.vue')
    }
]

const router = new VueRouter({
    mode: "history",
    routes
})

export default router