import { createRouter, createWebHistory } from 'vue-router'
import DefaultView from '../views/DefaultView.vue'
import HomePage from '@/pages/HomePage.vue'
import TokioSlotsView from '@/views/TokioSlotsView.vue'
import MainComponentSlots from '@/components/MainComponentSlots.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DefaultView,
      children: [
        {
          path: '',
          name: 'tela inicial',
          component: HomePage
        }
      ]
    },

    {
      path: '/tokioslots',
      name: 'Tokio Slots',
      component: TokioSlotsView,
      children: [
        {
          path: '',
          name: 'Tokio Slots',
          component: MainComponentSlots
        }
      ]
    }
  ]
})

export default router
