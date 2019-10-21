import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex);

const store = new Vuex.Store( {
  state: state,
  actions: actions,
  mutations: mutations
});

export default store;
