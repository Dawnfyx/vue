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
  if(localStorage.ExamineListData){
    stateLayoutForm = localStorage.ExamineListData
  }
} catch(err){
  console.log("state.error", err);
} finally {

}

try {
  if(localStorage.ExamineListData){
    stateExamineListData = localStorage.ExamineListData
  }
} catch(err){
  console.log("state.error", err);
} finally {

}

try {
  if(localStorage.ExamineListHaveReadData){
    stateExamineListHaveReadData = localStorage.ExamineListHaveReadData
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
