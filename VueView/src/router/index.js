import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/pages/Layout'
import Login from '@/pages/Login'
import TestPagination from '@/pages/testPagination'
import TestLoading from '@/pages/testLoading'
import TestTable from '@/pages/testTable'
import TestAxios from '@/pages/testAxios'
import TestDownPull from '@/pages/testDownPull'
import TestUpPull from '@/pages/testUpPull'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/TestTable',
      name: 'TestTable',
      component: TestTable
    },
    {
      path: '/TestPagination',
      name: 'TestPagination',
      component: TestPagination
    },
    {
      path: '/TestLoading',
      name: 'TestLoading',
      component: TestLoading
    },
    {
      path: '/TestAxios',
      name: 'TestAxios',
      component: TestAxios
    },
    {
      path: '/TestDownPull',
      name: 'TestDownPull',
      component: TestDownPull
    },
    {
      path: '/TestUpPull',
      name: 'TestUpPull',
      component: TestUpPull
    }
  ]
})
