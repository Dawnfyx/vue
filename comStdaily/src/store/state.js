let EntityListData = {};
let LayoutFormData = {};
try {
  if(localStorage.EntityListData){
    EntityListData = localStorage.EntityListData
  }
} catch(err){
  console.log("state.error", err);
} finally {

}

export default {
  EntityList: EntityListData,
  LayoutForm: LayoutFormData
}
