

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
    // for(let i=0;state.stateExamineListData.length; i++){
    //   if(state.stateExamineListData[i].id == res[0].id){
    //     return;
    //   }
    // }
    state.stateExamineListData = res;
  },
  mutationsExamineListHaveReadData(state, res){
    //debugger
    // if(res[0]){
    //   console.log("sss true res.id", res[0].id);
    //   if(state.stateExamineListHaveReadData.length > 0){
    //     for(var i=0; i<= state.stateExamineListHaveReadData[0].length; i++){
    //       if(state.stateExamineListHaveReadData[0][i].id == res[0].id){
    //         return;
    //       }
    //     }
    //   }
    //   state.stateExamineListHaveReadData[0].push(res)
    // } else{
    //   // debugger
    //   console.log("sss true res.id", res.id);
    //   if(state.stateExamineListHaveReadData[0].length > 0){
    //     for(var i=0; i< state.stateExamineListHaveReadData[0].length; i++){
    //       console.log("============",state.stateExamineListHaveReadData[0][i].id, res.id);
    //       if(state.stateExamineListHaveReadData[0][i].id == res.id){
    //         return;
    //       }
    //     }
    //   }
    //   state.stateExamineListHaveReadData[0].push(res)
    // }
    console.log("sss true res.id", res.id);
    if(state.stateExamineListHaveReadData[0].length > 0){
      for(var i=0; i< state.stateExamineListHaveReadData[0].length; i++){
        console.log("============",state.stateExamineListHaveReadData[0][i].id, res.id);
        if(state.stateExamineListHaveReadData[0][i].id == res.id){
          return;
        }
      }
    }
    state.stateExamineListHaveReadData[0].push(res)
  }
}
