import axios from 'axios';

// import { getHome, ConfigHome } from '@/api' //封装的axois接口

export default {
  //清除数据
  actionsClearState(state) {
    for (var key in state.state) {
      state.state[key] = null;
    }
  },
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
  //顾客列表数据
  actionsCustomerEntityList(state, args){
    const api = "/EntityList"
    axios({
      method: "get",
      baseURL: "/api",
      url: api,
      params: {
        entName: args.entName,
        viewId: args.viewId
      }
    })
      .then(function (response) {
        state.commit('mutationsCustomerEntityList', response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  //顾客form框架
  actionsCustomerLayoutForm(state, args){
      const api = "/LayoutForm";
      axios({
        method: "get",
        baseURL: "/api",
        url: api,
        params: {
          entName: args.entName,
          formId: args.formId
        }
      })
        .then(function (response) {
          state.commit('mutationsCustomerLayoutForm', response);
        })
        .catch(function (error) {
          console.log(error);
        });
  },
  //客户列表数据
  actionsContactEntityList(state, args){
    const api = "/EntityList"
    axios({
      method: "get",
      baseURL: "/api",
      url: api,
      params: {
        entName: args.entName,
        viewId: args.viewId
      }
    })
      .then(function (response) {
        state.commit('mutationsContactEntityList', response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  //客户form框架
  actionsContactLayoutForm(state, args){
    const api = "/LayoutForm"
    axios({
      method: "get",
      baseURL: "/api",
      url: api,
      params: {
        entName: args.entName,
        formId: args.formId
      }
    })
      .then(function (response) {
        state.commit('mutationsContactLayoutForm', response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
