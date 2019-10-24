export default {
  mutationsEntityList (state, res) {
    state.stateEntityList = res.data;
    // console.log("mutations",  state.EntityList);
  },
  mutationsLayoutForm (state, res) {
    state.stateLayoutForm = res.data;
    // console.log("mutations",  state.LayoutForm);
  },
  mutationsExamineListData(state, res){
    for(let i=0;state.stateExamineListHaveReadData.length; i++){
      if(state.stateExamineListHaveReadData[i].id == res.id){
        return;
      }
    }
    state.stateExamineListData.push(res)
  },
  mutationsExamineListHaveReadData(state, res){
    for(let i=0;state.stateExamineListHaveReadData.length; i++){
      if(state.stateExamineListHaveReadData[i].id == res.id){
        return;
      }
    }
    state.stateExamineListHaveReadData.push(res)
  }
}
