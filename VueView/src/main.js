// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import feather from 'vue-icon'
import validator from "vue-j-validator";

import fyxaxios from './axios/http'; //封装的axios

//清除一些浏览器默认样式
//import 'css/reset.css'

//bootstrap and bootstrap vue
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'font-awesome/css/font-awesome.min.css'

import '@/assets/css/main.css'

Vue.config.productionTip = false

// 解决移动端点击延迟的问题
fastClick.attach(document.body)


Vue.use(BootstrapVue)
Vue.use(feather, 'v-icon')
Vue.use(validator)


//封装的axios 绑定到vue原型上
Vue.prototype.$axios = fyxaxios; // axios 没有 install 必须绑定到原型链上

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
