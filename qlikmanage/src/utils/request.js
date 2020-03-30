import axios from 'axios';
import { MessageBox, Message } from 'element-ui';
import store from '@/store';
import { getToken } from '@utils/auth';


const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})

service.interceptors.request.use(
    config => {
        if (store.getters.token) {
            config.headers['X-Token'] = getToken()
        }
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
)

service.interceptors.response.use(
    response => {
        const res = response.data
         
        if(res.code !== 200){
            console.log("Error: 200");
        }
        if(res.code === 500){
            console.log("Error: 500");
        }

    },
    error => {
        console.log('err' + error);
        return Promise.reject(error);
    }
)

export default service




