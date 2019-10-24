let stateEntityList = {};
let stateLayoutForm = {};
let stateExamineListData = [];
let stateExamineListHaveReadData = [];
try {
  if(localStorage.EntityListData){
    stateEntityList = localStorage.EntityListData
  }
} catch(err){
  console.log("state.error", err);
} finally {

}

try {
  if(localStorage.LayoutFormData){
    stateLayoutForm = localStorage.LayoutFormData
  }
} catch(err){
  console.log("state.error", err);
} finally {

}

try {
  if(localStorage.stateExamineListData){
    stateExamineListData = localStorage.stateExamineListData
  }
} catch(err){
  console.log("state.error", err);
} finally {

}

try {
  if(localStorage.stateExamineListHaveReadData){
    stateExamineListHaveReadData = localStorage.stateExamineListHaveReadData
  }
} catch(err){
  console.log("state.error", err);
} finally {

}


export default {
  stateEntityList: stateEntityList,
  stateLayoutForm: stateLayoutForm,
  stateExamineListData: stateExamineListData,
  stateExamineListHaveReadData: stateExamineListHaveReadData
}
