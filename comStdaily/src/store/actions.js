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
    }
}
