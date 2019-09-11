import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    config: {
      userinfo: {
        "name": "Dawn",
        "sex":"男",
        "email":"zhangguoli@123.com"
      },
      leftSideStatus: false,
      contentHeader: {
        title: "大标题",
        subTitle: "小标题"
      },
      version: "0.0.1"
    },
    products: [
      {name: 'apple', price: '2'},
      {name: 'banana', price: '3'},
      {name: 'pear', price: '4'},
      {name: 'melon', price: '5'},
      {name: 'orange', price: '6'},
    ]
  },
  mutations: {
    leftSideToggle(state){
      state.config.leftSideStatus = !state.config.leftSideStatus;
    },
    leftSideHide(state){
      state.config.leftSideStatus = true;
    }
  }
})
