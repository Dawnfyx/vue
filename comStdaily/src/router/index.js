import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home/Home'
import Info from '@/pages/Info/info'
import InfoDetail from '@/pages/Info/detail'
import Configs from '@/pages/configs/configs'
import Examine from '@/pages/examine/examine'
import ExamineDetail from '@/pages/examine/detail'
import Contact from '@/pages/contact/contact'
import ContactDetail from '@/pages/contact/detail'
import Customer from '@/pages/customer/customer'
import loading from '@/components/loading'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },{
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/info',
      name: 'info',
      component: Info
    },{
      path: '/info/detail/:id',
      name: 'InfoDetail',
      component: InfoDetail
    },{
      path: '/configs',
      name: 'configs',
      component: Configs
    },{
      path: '/examine',
      name: 'examine',
      component: Examine
    },{
      path: '/examine/detail/:id',
      name: 'examineDetail',
      component: ExamineDetail
    },{
      path: '/contact',
      name: 'contact',
      component: Contact
    },{
      path: '/contact/detail/:id',
      name: 'ContactDetail',
      component: ContactDetail
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
