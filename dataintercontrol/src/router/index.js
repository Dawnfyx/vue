import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export default new Router({
  routes: [
    {
      path: '/dashboard',
      component: Layout,
      redirect: '/dashboard',
      children: [
        {
          path: 'index',
          component: () => import('@/views/dashboard/index'),
          name: 'Dashboard',
          meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
        }
      ]
    },
    {
      path: '/charts',
      component: Layout,
      redirect: '/charts',
      children: [
        {
          path: 'index',
          component: () => import('@/views/charts/index'),
          name: 'Charts',
          meta: { title: 'Charts', icon: 'charts', affix: true }
        }
      ]
    },
    {
      path: '/workshop',
      component: Layout,
      redirect: '/workshop',
      children: [
        {
          path: 'index',
          component: () => import('@/views/workshop/index'),
          name: 'workshop',
          meta: { title: 'workshop', icon: 'workshop', affix: true }
        }
      ]
    },
    {
      path: '/test',
      component: Layout,
      children: [
        {
          path: 'index',
          component: () => import('@/views/test/index'),
          name: 'Test',
          meta: { title: 'Test', icon: 'test', affix: true }
        }
      ]
    },
  ]
})
