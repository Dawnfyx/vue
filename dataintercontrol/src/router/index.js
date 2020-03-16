import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export default new Router({
  routes: [
    {
      path: '/',
      name: '/home',
      component: Layout
    },
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
      path: '/reportform',
      component: Layout,
      redirect: '/reportform',
      children: [
        {
          path: 'index',
          component: () => import('@/views/reportform/index'),
          name: 'Reportform',
          meta: { title: 'Reportform', icon: 'reportform', affix: true }
        }
      ]
    },
    {
      path: '/maketopage',
      component: Layout,
      redirect: '/maketopage',
      children: [
        {
          path: 'index',
          component: () => import('@/views/maketopage/index'),
          name: 'Maketopage',
          meta: { title: 'Maketopage', icon: 'maketopage', affix: true }
        }
      ]
    },
    {
      path: '/bigscreen',
      component: Layout,
      redirect: '/bigscreen',
      children: [
        {
          path: 'index',
          component: () => import('@/views/bigscreen/index'),
          name: 'Bigscreen',
          meta: { title: 'Bigscreen', icon: 'bigscreen', affix: true }
        }
      ]
    },
    {
      path: '/myread',
      component: Layout,
      redirect: '/myread',
      children: [
        {
          path: 'index',
          component: () => import('@/views/myread/index'),
          name: 'Myread',
          meta: { title: 'Myread', icon: 'myread', affix: true }
        }
      ]
    },
    {
      path: '/qlikview',
      component: Layout,
      redirect: '/qlikview',
      children: [
        {
          path: 'index',
          component: () => import('@/views/qlikview/index'),
          name: 'Qlikview',
          meta: { title: 'Qlikview', icon: 'myread', affix: true }
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
