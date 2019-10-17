/**
 * 验证规则
 */

import validator from 'validate'

import mixin from 'mixin'

const isObject = (obj) => obj !== null && obj && typeof obj === 'object' && !Array.isArray(obj);
const isString = (obj) => obj !== null && obj && typeof obj === 'string';

let Vue = null;


/**
 * valedateUtil 实例
 */

export let pluginInstance;

class validateUtil {
    static install(_vue, options){
        if(Vue && _vue === Vue){
          return;
        }
        Vue = _vue;
        pluginInstance = new validateUtil();
        Vue.mixin(mixin)
        Vue.driective('validate', {
            bind: function (el, binding, vnode, oldnode) {
                pluginInstance.bindfunc(el, binding, vnode, oldnode)
            }
        })
    }

    static get instance(){
        return pluginInstance;
    }

    bindfunc(el, binding, vnode, oldnode){
        let vm = vnode.context;
        let validate = this.createVM(vm);
    }

    addValidateRules(el, binding, vnode, oldnode, validate){

    }

    change(el, binding, vnode, oldnode, validate){

    }

    oninput(el, binding, vnode, oldnode, validate){

    }

    check(el, binding, validate){

    }

    checkItem(checkobj, validate){

    }

    msgFormat(msg, param){

    }

  // 挂在vue实例上面$validate
    createVM(vm){
      if (!vm.$validator) {
        let validate = new validateMsg();
        vm.$validator = validate;
      }
      return vm.$validator;
    }

    checkAll(ckecklist, options, validate){

    }
}

export  default validateUtil;
