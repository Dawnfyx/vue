let EntityList = {};
let LayoutForm = {};
try {
  if(localStorage.EntityList){
    EntityList = localStorage.EntityList
  }
} catch(err){
  console.log("state.error", err);
} finally {

}

try {
  if(localStorage.LayoutForm){
    EntityList = localStorage.LayoutForm
  }
} catch(err){
  console.log("state.error", err);
} finally {

}

export default {
  EntityList: EntityList,
  LayoutForm: LayoutForm
}
