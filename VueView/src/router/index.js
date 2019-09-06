import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/pages/Layout'
import allPages from '@/pages/allPges'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/allPages',
      name: 'allPages',
      component: allPages
    }
  ]
})
