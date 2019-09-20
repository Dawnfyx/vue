import axios from 'axios';
import qs from 'qs';
import APIUrl from './api.url';


//一些默认设置
axios.defaults.tmeout    = 5000;
axios.defaults.baseURL   = APIUrl.baseURL;
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.withCredentials = true; //表示跨域请求时是否需要使用凭证

// http request 拦截器
// 在ajax发送之前拦截 比如对所有请求统一添加header token

// 添加请求拦截器
axios.interceptors.request.use(
  config => { // 在发送请求之前做些什么
      // if(token){
      //     config.headers.Authorization = `token ${ token }`;
      // }
      return config;
  },
  err => { // 对请求错误做些什么
    return Promise.reject(err);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    switch (response.data.error) {
      case 401:
        response.data.msg = '未经授权';
        break;
      default:
        break;
    }
    return response;
  },
  error => {
     console.log(error);
     return Promise.reject(error);
  }
);

export default axios;

/**
 * post 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(data))
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      });
  });
}
/**
 * get 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function get (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {params: data})
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      });
  });
}





