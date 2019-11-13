export default {
  mutationsEntityList (state, res) {
    state.stateEntityList = res.data;
    // console.log("mutations",  state.EntityList);
  },
  mutationsLayoutForm (state, res) {
    state.stateLayoutForm = res.data;
    // console.log("mutations",  state.LayoutForm);
  },
  mutationsEntityList2(state){
    let json = require('@/pages/Home/api/apidata1.json');
    state.stateEntityList = json.data;
  },
  mutationsLayoutForm2(state){
    let json = require('@/pages/Home/api/apidata2.json');
    state.stateLayoutForm = json.data;
  },
  mutationsInfoList(state){
    let json = require('@/pages/Home/api/apiinfo.json');
    state.stateInfoList = json.data;
  },
  mutationsExamineList(state, res){
    state.stateExamineList = res;
  },
  mutationsExamineListHaveRead(state, res){
    if(state.stateExamineListHaveRead.length > 0){
      for(var i=0; i< state.stateExamineListHaveRead.length; i++){
        // console.log("============",state.stateExamineListHaveRead[i].id, res.id);
        if(state.stateExamineListHaveRead[i].id == res.id){
          return;
        }
      }
    }
    state.stateExamineListHaveRead.push(res)
  },
  mutationsExamineDetail(state, res) {
     state.stateExamineDetail = res.data;
  },
  mutationsContactList(state, res){
     state.stateContactList = res.data;
  },
  mutationscustomerList(state, res){
     state.stateCustomerList = res.data.data;
  },
  mutationsHomePageData(state, res){
    state.stateHomePageData = res.data.data;
  }
}
