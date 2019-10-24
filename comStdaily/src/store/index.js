import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
//VUEX 数据持久化 引入
import VuexPersistence from "vuex-persist";

// VUEX 数据持久化 使用
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex);

const store = new Vuex.Store( {
  state: state,
  actions: actions,
  mutations: mutations,
  plugins: [vuexLocal.plugin]
});

export default store;
