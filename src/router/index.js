import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/components/Index'
import Ticket from '@/components/Ticket'
import Login from '@/components/Login'
import Registration from '@/components/Registration'
import Profile from '@/components/Profile'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Post-a-Problem',
      component: Index
    },
    {
      path: '/ticket/new',
      name: 'Ticket',
      component: Ticket
    },
    {
      path: '/ticket/{id}',
      name: 'Ticket',
      component: Ticket
    },
    {
      path: '/ticket/{id}/edit',
      name: 'Ticket',
      component: Ticket
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
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }

  ]
})
