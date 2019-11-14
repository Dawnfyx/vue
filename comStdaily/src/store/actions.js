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
  actionsHomePageData(state) {
    const api = "/menu"
    axios({
      method: "get",
      baseURL: "/api",
      url: api
    }).then((response) => {
      state.commit('mutationsHomePageData', response);
    }).catch((error) => {
      console.log("axios catch Error", error.messages);
    })
  },
  //LayoutForm
  actionsLayoutFormData(state, arg) {
    const api = "/LayoutForm";
    axios({
      method: "get",
      baseURL: "/api",
      url: api,
      params: {
        entName: arg.entName,
        formId: arg.formId
      }
    }).then(function (response) {
        state.commit('mutationsLayoutFormData', response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  //LayoutView
  actionsLayoutViewData(state, args) {
    const api = "/LayoutView"
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
        state.commit('mutationsLayoutViewData', response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  //LayoutFormAndDetail
  actionsLayoutFormAndDetailData(state, args) {
    const api = "/LayoutFormAndDetail"
    axios({
      method: "get",
      baseURL: "/api",
      url: api,
      params: {
        entName: args.entName,
        formId: args.formId,
        id: args.id
      }
    })
      .then(function (response) {
        state.commit('mutationsLayoutFormAndDetailData', response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  //EntityList
  actionsEntityListData(state, args) {
    const api = "/EntityList"
    axios({
      method: "get",
      baseURL: "/api",
      url: api,
      params: {
        viewId: args.viewId,
        page: args.page,
        count: args.count,
        total: args.total
      }
    })
      .then(function (response) {
        state.commit('mutationsEntityListData', response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  //EntityDetail
  actionsEntityDetailData(state, args) {
    const api = "/EntityDetail"
    axios({
      method: "get",
      baseURL: "/api",
      url: api,
      params: {
        entName: args.entName,
        id: args.id
      }
    })
      .then(function (response) {
        state.commit('mutationsEntityDetailData', response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  //EntityViewAndList
  actionsEntityViewAndListData(state, args) {
    const api = "/EntityViewAndList"
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
        state.commit('mutationsEntityViewAndListData', response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
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
  }
}
