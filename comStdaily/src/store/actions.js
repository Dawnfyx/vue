import axios from 'axios';

// import { getHome, ConfigHome } from '@/api' //封装的axois接口

export default {
  //首页数据
  aHomePageData(state) {
    const api = "/menu"
    axios({
      method: "get",
      baseURL: "/api",
      url: api
    }).then((response) => {
      state.commit('mHomePageData', response);
    }).catch((error) => {
      console.log("axios catch Error", error.messages);
    })
  },
  //客户
  aCustomerEntityViewAndList(state, pageData){
    const api = "/EntityViewAndList";
    const args = state.state.apiStrConfig.customer;
    axios({
      method: "get",
      baseURL: "/api",
      url: api,
      params: {
        entName: args.entName,
        viewId: args.viewId,
        page: pageData.page,
        count: pageData.count,
        total: pageData.total
      }
    }).then((response) => {
      state.commit('mCustomerEntityViewAndList', response);
    }).catch((error) => {
      console.log("axios catch Error", error.messages);
    })
  },
  aCustomerLayoutView(state){
    const api = "/LayoutView";
    const args = state.state.apiStrConfig.customer;
    axios({
      method: "get",
      baseURL: "/api",
      url: api,
      params: {
        entName: args.entName,
        viewId: args.viewId
      }
    }).then((response) => {
      state.commit('mCustomerLayoutView', response);
    }).catch((error) => {
      console.log("axios catch Error", error.messages);
    })
  },
  aCustomerLayoutFormAndDetail(state, data){
    const api = "/LayoutFormAndDetail";
    const args = state.state.apiStrConfig.customer;
    axios({
      method: "get",
      baseURL: "/api",
      url: api,
      params: {
        entName: args.entName,
        formId: args.formId,
        id: data
      }
    }).then((response) => {
      state.commit('mCustomerLayoutFormAndDetail', response);
    }).catch((error) => {
      console.log("axios catch Error", error.messages);
    })
  },

  aContactEntityViewAndList(state, pageData){
    const api = "/EntityViewAndList";
    const args = state.state.apiStrConfig.contact;
    axios({
      method: "get",
      baseURL: "/api",
      url: api,
      params: {
        entName: args.entName,
        viewId: args.viewId,
        page: pageData.page,
        count: pageData.count,
        total: pageData.total
      }
    }).then((response) => {
      state.commit('mCustomerEntityViewAndList', response);
    }).catch((error) => {
      console.log("axios catch Error", error.messages);
    })
  },
  aContactLayoutView(state){
    const api = "/LayoutView";
    const args = state.state.apiStrConfig.contact;
    axios({
      method: "get",
      baseURL: "/api",
      url: api,
      params: {
        entName: args.entName,
        viewId: args.viewId
      }
    }).then((response) => {
      state.commit('mContactLayoutView', response);
    }).catch((error) => {
      console.log("axios catch Error", error.messages);
    })
  },
  aContactLayoutFormAndDetail(state, data){
    const api = "/LayoutFormAndDetail";
    const args = state.state.apiStrConfig.contact;
    axios({
      method: "get",
      baseURL: "/api",
      url: api,
      params: {
        entName: args.entName,
        formId: args.formId,
        id: data
      }
    }).then((response) => {
      state.commit('mContactLayoutFormAndDetail', response);
    }).catch((error) => {
      console.log("axios catch Error", error.messages);
    })
  },
  //清除数据
  actionsClearState(state) {
    for (var key in state.state) {
      state.state[key] = null;
    }
  },

}
