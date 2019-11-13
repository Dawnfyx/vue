import axios from "axios";
// import qs from 'qs';
import urlMap from './api.url';

const baseUrl = urlMap[process.env.NODE_ENV]
const ERR_OK = 1

//一些默认设置
// axios.defaults.tmeout    = 5000;
// axios.defaults.baseURL   = baseUrl;
// axios.defaults.headers.common['Content-Type'] = 'application/json';
// axios.defaults.withCredentials = false; //表示跨域请求时是否需要使用凭证

export function axiosget(url) {
  return function (params = {}) {
      return axios.get(baseUrl + url, {
        params
      }).then((res) =>{
        const {errno, data} = res.data
        if (errno === ERR_OK) {
          return data
        }
      })
        .catch((err) =>{
            console.error("Axios Get Error", err);
        })
  }
}

export function axiosconfig(config) {
    return function (config) {
      return axios({
        method: config.method,
        baseUrl: baseUrl,
        url: config.url
      }).then((res)=>{
        const {errno, data} = res.data
        if (errno === ERR_OK) {
          return data
        }
      }).catch((err)=>{
        console.error("Axios Config Error", err.messages);
      })
    }
}

