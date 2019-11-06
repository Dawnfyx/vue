import axios from 'axios';

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
      const api = "https://www.fastmock.site/mock/394a8e36c8d6220da8a4de7376665c7a/detailex/detail/" + id
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
    }
}
