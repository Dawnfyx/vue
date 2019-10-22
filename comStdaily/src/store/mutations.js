export default {
  setEntityListInfo (state, res) {
    state.EntityList = res;
    // console.log("mutations",  state.EntityList);
  },
  setLayoutFormInfo (state, res) {
    state.LayoutForm = res;
    // console.log("mutations",  state.LayoutForm);
  },
}
