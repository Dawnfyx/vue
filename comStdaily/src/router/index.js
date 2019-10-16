import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home/Home'
import Info from '@/pages/Info/info'
import Configs from '@/pages/configs/configs'
import List from '@/pages/List/list'
import Search from '@/pages/Search/search'
import DetailForm from '@/pages/Detail/detailForm'
import Test from '@/pages/TestDir/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/Info',
      name: 'Info',
      component: Info
    },{
      path: '/Configs',
      name: 'Configs',
      component: Configs
    },{
      path: '/List',
      name: 'List',
      component: List
    },{
      path: '/Search',
      name: 'Search',
      component: Search
    },{
      path: '/detail',
      name: 'DetailForm',
      component: DetailForm
    },{
      path: '/Test',
      name: 'Test',
      component: Test
    }
  ]
})
