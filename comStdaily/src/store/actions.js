import axios from 'axios';

export default {
    getEntityListInfo(state){
      const api = 'Crmapp/EntityList?ent=new_salestest'
      axios({
        method: "get",
        baseURL:"/api",
        url: api
      })
        .then((res) => {
          // console.log("actions", res);
          state.commit('setEntityListInfo', res)
        })
        .catch(error=>{
          console.log("Error", error.message);
        })
    },
    getLayoutFormInfo(state){
      const api = 'Crmapp/LayoutForm?ent=new_salestest'
      axios({
        method: "get",
        baseURL:"/api",
        url: api
      })
        .then((res) => {
          // console.log("actions", res);
          state.commit('setLayoutFormInfo', res)
        })
        .catch(error=>{
          console.log("Error", error.message);
        })
    }
}
