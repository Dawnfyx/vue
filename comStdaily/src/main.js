// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'

//引入 VUEX
import store from './store'

//自己封装的axios
// import fyxaxios from './axios/http';

//bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
// import 'font-awesome/css/font-awesome.min.css'  //转CDN

// 清除一些浏览器默认样式
// import 'style/reset.css'

Vue.config.productionTip = false

// 解决移动端点击延迟的问题
fastClick.attach(document.body)

// 绑定到原型链上
// Vue.prototype.$axios = fyxaxios;

Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
