export default {
  mHomePageData(state, res){
    if(res.data.code == 1){
      console.log("mHomePageData", JSON.parse(res.data.data));
      state.sHomePageData = res.data.data;
    }else{
      console.error("VUEX Error", res.data);
    }
  },
  mCustomerEntityViewAndList(state, res){
    if(res.data.code == 1){
      console.log("mCustomerEntityViewAndList", res.data.data);
      state.sCustomerEntityViewAndList = res.data.data;
    }else{
      console.error("VUEX Error", res.data);
    }
  },
  mutationsCustomerEntityList(state, res){
    if(res.data.code == 1){
      console.log("mutationsCustomerEntityList", res.data);
      state.stateCustomerEntityList = res.data.data;
    }
  },
  mutationsCustomerLayoutForm(state, res){
    if(res.data.code == 1){
      console.log("mutationsCustomerLayoutForm", res.data.data);
      state.stateCustomerLayoutForm = res.data.data;
    }
  },
  mutationsContactEntityList(state, res){
    if(res.data.code == 1){
      console.log("mutationsContactEntityList", res.data.data);
      state.stateContactEntityList = res.data.data;
    }
  },
  mutationsContactLayoutForm(state, res){
    if(res.data.code == 1){
      console.log("mutationsContactLayoutForm", res.data.data);
      state.stateContactLayoutForm = res.data.data;
    }
  }
}
