let stateEntityList = {};
let stateExamineList = [];
let stateExamineListHaveRead = [];
let stateExamineDetail = {};

let stateLayoutForm = {};
let stateInfoList = {};

try {
  if(localStorage.vuex){
    stateEntityList = JSON.parse(localStorage.vuex).stateEntityList;
    stateExamineList = JSON.parse(localStorage.vuex).stateExamineList;
    stateExamineListHaveRead = JSON.parse(localStorage.vuex).stateExamineListHaveRead;
    stateLayoutForm = JSON.parse(localStorage.vuex).stateLayoutForm;
    stateInfoList = JSON.parse(localStorage.vuex).stateInfoList;
  }
} catch(err){
  console.log("state.error", err);
} finally {

}


export default {
  stateEntityList: stateEntityList,
  stateLayoutForm: stateLayoutForm,
  stateExamineListHaveRead: stateExamineListHaveRead,
  stateExamineList: stateExamineList,
  stateExamineDetail: stateExamineDetail,
  stateInfoList: stateInfoList
}
