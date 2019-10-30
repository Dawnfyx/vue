import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home/Home'
import Info from '@/pages/Info/info'
import Configs from '@/pages/configs/configs'
import Examine from '@/pages/examine/examine'
import ExamineDetail from '@/pages/examineDetail/detail'
import Contact from '@/pages/contact/contact'
import Customer from '@/pages/customer/customer'
import loading from '@/components/loading'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
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
      path: '/examineDetail/:id',
      name: 'examineDetail',
      component: ExamineDetail
    },{
      path: '/contact',
      name: 'contact',
      component: Contact
    },{
      path: '/customer',
      name:'customer',
      component: Customer
    },{
      path: '/loading',
      name: 'loading',
      component: loading
    }
  ]
})
