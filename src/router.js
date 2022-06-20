import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Image360 from './views/Image360.vue'
import Video360 from './views/Video360.vue'
import Live360 from './views/Live360.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/image360',
            name: 'image360',
            component: function() {
                return import('./views/Image360.vue')
            }
        },
        {
            path: '/video360',
            name: 'video360',
            component: function() {
                return import('./views/Video360.vue')
            }
        },
        {
            path: '/live360',
            name: 'live360',
            component: function() {
                return import('./views/Live360.vue')
            }
        }
    ]
})