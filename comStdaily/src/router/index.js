import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home/Home'
import Info from '@/pages/Info/info'
import Configs from '@/pages/configs/configs'
import Examine from '@/pages/examine/examine'
import Contact from '@/pages/contact/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/info',
      name: 'info',
      component: Info
    },{
      path: '/configs',
      name: 'configs',
      component: Configs
    },{
      path: '/examine',
      name: 'examine',
      component: Examine
    },{
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
