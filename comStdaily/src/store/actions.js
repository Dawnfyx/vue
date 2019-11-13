import axios from 'axios';

import { getHome, ConfigHome } from '@/api' //封装的axois接口

export default {
    actionsEntityList(state){
      const api = 'Crmapp/EntityList?ent=new_salestest'
      axios({
        method: "get",
        baseURL:"/api",
        url: api
      })
        .then((res) => {
          // console.log("actions", res);
          state.commit('mutationsEntityList', res)
        })
        .catch(error=>{
          console.log("Error", error.message);
        })
    },
    actionsLayoutForm(state){
      const api = 'Crmapp/LayoutForm?ent=new_salestest'
      axios({
        method: "get",
        baseURL:"/api",
        url: api
      })
        .then((res) => {
          // console.log("actions", res);
          state.commit('mutationsLayoutForm', res)
        })
        .catch(error=>{
          console.log("Error", error.message);
        })
    },
    actionsClearState(state){
      for(var key in state.state){
        state.state[key] = null;
      }
    },
    actionsExamineDetail(state, id){
      const api = "/examine/detail/" + id
      axios({
        method: "get",
        baseURL:"/api",
        url: api
      }).then((res) => {
        state.commit('mutationsExamineDetail', res);
      })
        .catch(error=>{
          console.log("Error", error.message);
        })
    },
    actionsContact(state){
        const api = "/contact"
        axios({
          method: "get",
          baseURL: "/api",
          url: api
        }).then((res) => {
            state.commit('mutationsContactList', res);
        })
          .catch( error=>{
            console.log("Error", error.messages);
          })
    },
    actionsCustomer(state){
      const api = "/customer"
      axios({
        method: "get",
        baseURL: "/api",
        url: api
      }).then((res) => {
        state.commit('mutationscustomerList', res);
      })
        .catch( error=>{
          console.log("Error", error.messages);
        })
    },
    actionsHomePageData(state){

      const api = "/menu"
      axios({
        method: "get",
        baseURL: "/api",
        url: api
      }).then((res) => {
        console.log(res);
        state.commit('mutationsHomePageData', res);
      }).catch((err)=>{
        console.log("axios catch Error", err.messages);
      })
    }
}
