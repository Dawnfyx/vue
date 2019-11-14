import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import state from './state'
//VUEX 数据持久化 引入
import VuexPersistence from "vuex-persist";

// VUEX 数据持久化 使用
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex);

const store = new Vuex.Store( {
  actions: actions,
  mutations: mutations,
  state: state,
  plugins: [vuexLocal.plugin]
});

export default store;
