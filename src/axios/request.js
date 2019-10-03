import axios from "axios";
import app from "../main.js";


/****** 创建axios实例 ******/
const service = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 5000
});


/****** request拦截器==>对请求参数做处理 ******/
service.interceptors.request.use(config => {
    app.$vux.loading.show({
        text: '数据加载中……'
    });

    // TODO 整合下 请求方法;
    // config.method === 'post' || config.method === 'put' || config.method === 'delete'
    //     ? config.data = qs.stringify({...config.data})
    //     : config.params = {...config.params};
    config.headers['Content-Type'] = 'application/json';

    return config;
}, error => {
    app.$vux.toast.show({
        type: 'warn',
        text: error
    });
    Promise.reject(error)
});


/****** respone拦截器==>对响应做处理 ******/
service.interceptors.response.use(
    response => {
        app.$vux.loading.hide();

        if (response.data['Success'] === true) {
            return response.data;
        } else {
            app.$vux.toast.show({
                type: 'warn',
                text: response.data
            });
        }
    },
    error => {
        console.log('error');
        console.log(error);
        console.log(JSON.stringify(error));

        let text = JSON.parse(JSON.stringify(error)).response.status === 404
            ? '404'
            : '网络异常，请重试';
        app.$vux.toast.show({
            type: 'warn',
            text: text
        });

        return Promise.reject(error)
    }
);
export default service;
