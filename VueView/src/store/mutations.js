export default{
  leftSideToggle(state){
    state.config.leftSideStatus = !state.config.leftSideStatus;
  },
  leftSideHide(state){
    state.config.leftSideStatus = true;
  },
  loginLevel(state, obj){
    state.config.userinfo.userStatus = obj.userStatus;
    state.config.userinfo.userLevel = obj.userLevel;
  }
}
