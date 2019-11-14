let stateHomePageData = {};

let stateLayoutFormData = {};
let stateLayoutViewData = {};
let stateLayoutFormAndDetailData = {};

let stateEntityListData = {};
let stateEntityDetailData = {};
let stateEntityViewAndListData = {};

let stateCustomerEntityList = {};
let stateContactEntityList = {};

try {
  if(localStorage.vuex){

    if(JSON.parse(localStorage.vuex).stateHomePageData){
      stateHomePageData = JSON.parse(localStorage.vuex).stateHomePageData;
    }

    if(JSON.parse(localStorage.vuex).stateLayoutFormData){
      stateLayoutFormData = JSON.parse(localStorage.vuex).stateLayoutFormData;
    }

    if(JSON.parse(localStorage.vuex).stateLayoutViewData){
      stateLayoutViewData = JSON.parse(localStorage.vuex).stateLayoutViewData;
    }

    // if(JSON.parse(localStorage.vuex).stateLayoutFormAndDetailData){
    //   stateLayoutFormAndDetailData = JSON.parse(localStorage.vuex).stateLayoutFormAndDetailData;
    // }
    // if(JSON.parse(localStorage.vuex).stateEntityListData){
    //   stateEntityListData = JSON.parse(localStorage.vuex).stateEntityListData;
    // }
    // if(JSON.parse(localStorage.vuex).stateEntityDetailData){
    //   stateEntityDetailData = JSON.parse(localStorage.vuex).stateEntityDetailData;
    // }
    // if(JSON.parse(localStorage.vuex).stateEntityViewAndListData){
    //   stateEntityViewAndListData = JSON.parse(localStorage.vuex).stateEntityViewAndListData;
    // }

  }
} catch(err){
  console.log("state.error", err);
} finally {

}


export default {
  stateHomePageData : stateHomePageData,

  stateLayoutFormData : stateLayoutFormData,
  stateLayoutViewData : stateLayoutViewData,
  stateLayoutFormAndDetailData : stateLayoutFormAndDetailData,

  stateEntityListData : stateEntityListData,
  stateEntityDetailData : stateEntityDetailData,
  stateEntityViewAndListData : stateEntityViewAndListData,

  stateCustomerEntityList: stateCustomerEntityList,
  stateContactEntityList: stateContactEntityList

}
