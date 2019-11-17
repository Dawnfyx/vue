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
  mCustomerLayoutFormAndDetail(state, res){
    if(res.data.code == 1){
      console.log("mCustomerLayoutFormAndDetail", res.data.data);
      state.sCustomerLayoutFormAndDetail = res.data.data;
    } else {
      console.error("VUEX Error", res.data);
    }
  },
  mCustomerLayoutView(state, res){
    if(res.data.code == 1){
      console.log("mCustomerLayoutView", res.data.data);
      state.sCustomerLayoutView = res.data.data;
    } else {
      console.error("VUEX Error", res.data);
    }
  },

  mContactEntityViewAndList(state, res){
    if(res.data.code == 1){
      console.log("mContactEntityViewAndList", res.data.data);
      state.sContactEntityViewAndList = res.data.data;
    }else{
      console.error("VUEX Error", res.data);
    }
  },
  mContactLayoutFormAndDetail(state, res){
    if(res.data.code == 1){
      console.log("mContactLayoutFormAndDetail", res.data.data);
      state.sContactLayoutFormAndDetail = res.data.data;
    } else {
      console.error("VUEX Error", res.data);
    }
  },
  mContactLayoutView(state, res){
    if(res.data.code == 1){
      console.log("mContactLayoutView", res.data.data);
      state.sContactLayoutView = res.data.data;
    } else {
      console.error("VUEX Error", res.data);
    }
  }
}
