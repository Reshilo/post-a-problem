import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Post-a-Problem',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }

  ]
})
