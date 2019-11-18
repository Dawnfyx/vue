export default {
  mHomePageData(state, res){
    if(res.data.code == 1){
      console.log("mHomePageData", JSON.parse(res.data.data));
      state.sHomePageData = res.data.data;
      state.sIsGetAllData.sHomePageData = true;
    }else{
      console.error("VUEX Error", res.data);
    }
  },
  mCustomerEntityViewAndList(state, res){
    if(res.data.code == 1){
      console.log("mCustomerEntityViewAndList", res.data.data);
      state.sCustomerEntityViewAndList = res.data.data;
      state.sIsGetAllData.sCustomerEntityViewAndList = true;
    }else{
      console.error("VUEX Error", res.data);
    }
  },
  mCustomerLayoutFormAndDetail(state, res){
    if(res.data.code == 1){
      console.log("mCustomerLayoutFormAndDetail", res.data.data);
      state.sCustomerLayoutFormAndDetail = res.data.data;
      state.sIsGetAllData.sContactLayoutFormAndDetail = true;
    } else {
      console.error("VUEX Error", res.data);
    }
  },
  mCustomerLayoutView(state, res){
    if(res.data.code == 1){
      console.log("mCustomerLayoutView", res.data.data);
      state.sCustomerLayoutView = res.data.data;
      state.sIsGetAllData.sContactLayoutView = true;
    } else {
      console.error("VUEX Error", res.data);
    }
  },

  mContactEntityViewAndList(state, res){
    if(res.data.code == 1){
      console.log("mContactEntityViewAndList", res.data.data);
      state.sContactEntityViewAndList = res.data.data;
      state.sIsGetAllData.sContactEntityViewAndList = true;
    }else{
      console.error("VUEX Error", res.data);
    }
  },
  mContactLayoutFormAndDetail(state, res){
    if(res.data.code == 1){
      console.log("mContactLayoutFormAndDetail", res.data.data);
      state.sContactLayoutFormAndDetail = res.data.data;
      state.sIsGetAllData.sContactLayoutFormAndDetail = true;
    } else {
      console.error("VUEX Error", res.data);
    }
  },
  mContactLayoutView(state, res){
    if(res.data.code == 1){
      console.log("mContactLayoutView", res.data.data);
      state.sContactLayoutView = res.data.data;
      state.sIsGetAllData.sContactLayoutView = true;
    } else {
      console.error("VUEX Error", res.data);
    }
  },

  mExamineEntityViewAndList(state, res){
    if(res.data.code == 1){
      console.log("mExamineEntityViewAndList", res.data.data);
      state.sExamineEntityViewAndList = res.data.data;
      state.sIsGetAllData.sExamineEntityViewAndList = true;
    }else{
      console.error("VUEX Error", res.data);
    }
  },
  mExamineLayoutFormAndDetail(state, res){
    if(res.data.code == 1){
      console.log("mExamineLayoutFormAndDetail", res.data.data);
      state.sExamineLayoutFormAndDetail = res.data.data;
      state.sIsGetAllData.sExamineLayoutFormAndDetail = true;
    } else {
      console.error("VUEX Error", res.data);
    }
  },
  mExamineLayoutView(state, res){
    if(res.data.code == 1){
      console.log("mExamineLayoutView", res.data.data);
      state.sExamineLayoutView = res.data.data;
      state.sIsGetAllData.sExamineLayoutView = true;
    } else {
      console.error("VUEX Error", res.data);
    }
  }
}
