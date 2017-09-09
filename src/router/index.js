import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/components/Index'
import Settings from '@/components/Settings'
import Media from '@/components/Media'
import Tickets from '@/components/Tickets'
import TicketForm from '@/components/TicketForm'
import Ticket from '@/components/Ticket'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Post-a-Problem',
      component: Index
    },
    {
      path: '/tickets',
      name: 'Tickets',
      component: Tickets
    },
    {
      path: '/tickets/new',
      name: 'Ticket',
      component: TicketForm
    },
    {
      path: '/tickets/:id',
      name: 'Ticket',
      component: Ticket
    },
    {
      path: '/tickets/:id/edit',
      name: 'Ticket',
      component: TicketForm
    },
    {
      path: '/media',
      name: 'Media',
      component: Media
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    }

  ]
})
