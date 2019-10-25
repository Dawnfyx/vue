

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
  mutationsExamineListData(state, res){
    // debugger
    // for(let i=0;state.stateExamineListData.length; i++){
    //   if(state.stateExamineListData[i].id == res[0].id){
    //     return;
    //   }
    // }
    state.stateExamineListData = res;
  },
  mutationsExamineListHaveReadData(state, res){
    console.log("sss true res.id", res[res.length-1].id);
    // debugger
    for(let i=0; i<= state.stateExamineListHaveReadData[0].length; i++){
      if(state.stateExamineListHaveReadData[0][i].id == res[i].id){
        return;
      }
    }
    // if(sss){
      state.stateExamineListHaveReadData[0].push(res)
    // }
  }
}
