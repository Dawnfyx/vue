export default {
  mutationsHomePageData(state, res){
    if(res.data.code == 1){
      console.log("mutationsHomePageData", JSON.parse(res.data.data));
      state.stateHomePageData = res.data.data;
    }
  },
  mutationsLayoutFormData(state, res){
    if(res.data.code == 1){
      console.log("mutationsLayoutFormData", res.data.data);
      state.stateLayoutFormData = res.data.data;
    }
  },
  mutationsLayoutViewData(state, res){
    if(res.data.code == 1){
      console.log("mutationsLayoutViewData", res.data.data);
      state.stateLayoutViewData = res.data.data;
    }
  },
  mutationsLayoutFormAndDetailData(state, res){
    if(res.data.code == 1){
      console.log("mutationsLayoutFormAndDetailData", res.data.data);
      state.stateLayoutFormAndDetailData = res.data.data;
    }
  },
  mutationsEntityListData(state, res){
    if(res.data.code == 1){
      console.log("mutationsEntityListData", res.data.data);
      state.stateEntityListData = res.data.data;
    }
  },
  mutationsEntityDetailData(state, res){
    if(res.data.code == 1){
      console.log("mutationsEntityDetailData", res.data.data);
      state.stateEntityDetailData = res.data.data;
    }
  },
  mutationsEntityViewAndListData(state, res){
    if(res.data.code == 1){
      console.log("mutationsEntityViewAndListData", res.data.data);
      state.stateEntityViewAndListData = res.data.data;
    }
  },
  mutationsCustomerEntityList(state, res){
    if(res.data.code == 1){
      console.log("mutationsCustomerEntityList", res.data.data);
      state.stateCustomerEntityList = res.data.data;
    }
  },
  mutationsContactEntityList(state, res){
    if(res.data.code == 1){
      console.log("mutationsContactEntityList", res.data.data);
      state.stateContactEntityList = res.data.data;
    }
  }
}
