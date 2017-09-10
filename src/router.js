import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/components/Index'
import Settings from '@/components/Settings'
import Tickets from '@/components/Tickets'
import TicketForm from '@/components/TicketForm'
import Ticket from '@/components/Ticket'
import Login from '@/components/Login'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'app',
      component: Index,
      children: [
        {
          path: 'tickets',
          name: 'tickets',
          component: {
            template: '<router-view></router-view>'
          },
          children: [
            {
              path: 'list',
              name: 'ticket_list',
              component: Tickets
            },
            {
              path: 'new',
              name: 'ticket_create',
              component: TicketForm
            },
            {
              path: ':id',
              name: 'ticket',
              component: Ticket
            },
            {
              path: ':id/edit',
              name: 'ticket_edit',
              component: TicketForm
            }
          ]
        },
        {
          path: 'settings',
          name: 'settings',
          component: Settings
        },
        {
          path: '/login',
          name: 'login',
          component: Login
        }
      ]
    }
  ]
})
