import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location){
    return originalPush.call(this,location).catch(err => err)
}

Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
            return import('../views/About.vue')
        },
        // children: [
        //     {
        //         path: 'abc',
        //         component: function () {
        //             return import('../views/about-abc.vue')
        //         }
        //     }
        // ]
    },
    {
        path: '/User/:username',
        name: 'myUser',
        component: function () {
            return import('../views/User.vue')
        },
        children: [
            {
                path: 'profile',
                component: function () {
                    return import('../views/UserProfile')
                }
            },
            {
                path: 'posts',
                component: function () {
                    return import('../views/UserPosts')
                }
            }
        ]
    },
    {
        path: '*',
        name: 'any',
        component: function () {
            return import('../views/Wildcard.vue')
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes
})


export default router
