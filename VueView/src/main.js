// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'

//清除一些浏览器默认样式
//import 'css/reset.css'

// //jquery1.12.4
// import jQuery from 'jquery/dist/jquery.min.js';
// window.jQuery = jQuery;

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import 'font-awesome/css/font-awesome.min.css'

//AdminLTE
// import 'admin-lte/dist/css/AdminLTE.css'
// import 'admin-lte/dist/css/skins/skin-blue.min.css'

import '@/assets/css/main.css'

Vue.config.productionTip = false

// 解决移动端点击延迟的问题
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
