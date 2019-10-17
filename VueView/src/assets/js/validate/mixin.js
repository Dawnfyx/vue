//判断节点是不是标签
const isBuiltInComponent = (vnode) => {
  if (!vnode) {
    return false;
  }
  const tag = vnode.componentOptions.tag;
  return /^(keep-alive|transition|transition-group)$/.test(tag);
};

export default {
    beforeCreate(){
        if(isBuiltInComponent(this.$vnode)){
            return;
        }
        if( !this.$validator){

        }
    }
}
