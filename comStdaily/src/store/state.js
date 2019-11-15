let apiStrConfig = {
  "customer" : {
    entName: "account",
    formId: "8448B78F-8F42-454E-8E2A-F8196B0419AF",
    viewId: "00000000-0000-0000-00AA-000010001001"
  },
  "contact" : {
    entName: "contact",
    formId: "1FED44D1-AE68-4A41-BD2B-F13ACAC4ACFA",
    viewId: "00000000-0000-0000-00AA-000010001003"
  },
  "contract": {
    entName: "stnc_contract",
    formId: "06FFF0F1-EE6C-4A7C-896F-0A9510482BDD",
    viewId: "A8DCC9E4-4E53-4C68-98C7-D8F4366C7F4D"
  }
}

let sHomePageData = {};
let sCustomerEntityViewAndList = {};

let stateCustomerEntityList = {};
let stateCustomerLayoutForm = {};
let stateContactEntityList = {};
let stateContactLayoutForm = {};

try {
  if (localStorage.vuex) {

    if (JSON.parse(localStorage.vuex).sHomePageData) {
      sHomePageData = JSON.parse(localStorage.vuex).sHomePageData;
    }

  }
} catch (err) {
  console.log("state.error", err);
} finally {

}


export default {
  apiStrConfig: apiStrConfig,
  sHomePageData: sHomePageData,
  sCustomerEntityViewAndList: sCustomerEntityViewAndList,

  stateCustomerEntityList: stateCustomerEntityList,
  stateCustomerLayoutForm: stateCustomerLayoutForm,
  stateContactEntityList: stateContactEntityList,
  stateContactLayoutForm: stateContactLayoutForm

}
