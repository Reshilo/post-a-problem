import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Registration from '@/components/Registration'

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
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    }

  ]
})
